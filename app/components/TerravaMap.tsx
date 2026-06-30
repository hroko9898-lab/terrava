"use client";

import { useEffect, useRef, useState } from "react";

type BaseMap = "standard" | "topo";
type TrailKey =
  | "rila"
  | "pirin"
  | "vitosha"
  | "rodopi"
  | "staraPlanina"
  | "strandzha";
type OverlayKey = "hiking" | "markers" | TrailKey;

type TrailConfig = {
  key: TrailKey;
  name: string;
  files: string[];
};

type MapLayerEntry = {
  layer: any;
  loaded?: boolean;
  loading?: boolean;
  load?: () => Promise<void>;
};

const trailConfigs: TrailConfig[] = [
  {
    key: "rila",
    name: "Рила",
    files: ["/map-data/osm/rila-trails.geojson"],
  },
  {
    key: "pirin",
    name: "Пирин",
    files: ["/map-data/osm/pirin-trails.geojson"],
  },
  {
    key: "vitosha",
    name: "Витоша",
    files: ["/map-data/osm/vitosha-trails.geojson"],
  },
  {
    key: "rodopi",
    name: "Родопи",
    files: [
      "/map-data/osm/rodopi-west-trails.geojson",
      "/map-data/osm/rodopi-central-trails.geojson",
      "/map-data/osm/rodopi-east-north-trails.geojson",
      "/map-data/osm/rodopi-east-south-trails.geojson",
    ],
  },
  {
    key: "staraPlanina",
    name: "Стара планина",
    files: [
      "/map-data/osm/stara-planina-west-trails.geojson",
      "/map-data/osm/stara-planina-central-trails.geojson",
      "/map-data/osm/stara-planina-east-west-trails.geojson",
      "/map-data/osm/stara-planina-east-east-trails.geojson",
    ],
  },
  {
    key: "strandzha",
    name: "Странджа",
    files: [
      "/map-data/osm/strandzha-west-trails.geojson",
      "/map-data/osm/strandzha-east-trails.geojson",
    ],
  },
];

const initialVisibleLayers: Record<OverlayKey, boolean> = {
  hiking: true,
  markers: true,
  rila: false,
  pirin: false,
  vitosha: false,
  rodopi: false,
  staraPlanina: false,
  strandzha: false,
};

export default function TerravaMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const userMarkerRef = useRef<any>(null);
  const baseMapsRef = useRef<Record<BaseMap, any> | null>(null);
  const overlayLayersRef = useRef<Record<string, MapLayerEntry>>({});

  const [isLayersOpen, setIsLayersOpen] = useState(false);
  const [selectedBaseMap, setSelectedBaseMap] =
    useState<BaseMap>("standard");
  const [visibleLayers, setVisibleLayers] = useState<Record<OverlayKey, boolean>>(
    initialVisibleLayers
  );
  const [loadingLayers, setLoadingLayers] = useState<Record<string, boolean>>(
    {}
  );

  function showMyLocation() {
    if (!navigator.geolocation) {
      alert("GPS не се поддържа от този браузър.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const L = await import("leaflet");
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        if (!mapInstanceRef.current) return;

        if (userMarkerRef.current) {
          userMarkerRef.current.remove();
        }

        userMarkerRef.current = L.circleMarker([lat, lng], {
          radius: 10,
          color: "#ffffff",
          weight: 3,
          fillColor: "#2563eb",
          fillOpacity: 1,
        })
          .addTo(mapInstanceRef.current)
          .bindPopup("Ти си тук")
          .openPopup();

        mapInstanceRef.current.setView([lat, lng], 13);
      },
      () => {
        alert(
          "Не успях да взема местоположението. Провери дали си разрешил GPS достъп."
        );
      }
    );
  }

  function changeBaseMap(nextMap: BaseMap) {
    const map = mapInstanceRef.current;
    const baseMaps = baseMapsRef.current;

    if (!map || !baseMaps) return;

    map.removeLayer(baseMaps.standard);
    map.removeLayer(baseMaps.topo);
    baseMaps[nextMap].addTo(map);
    setSelectedBaseMap(nextMap);
  }

  async function toggleOverlay(layerKey: OverlayKey) {
    const map = mapInstanceRef.current;
    const entry = overlayLayersRef.current[layerKey];

    if (!map || !entry || entry.loading) return;

    const shouldShow = !visibleLayers[layerKey];

    if (!shouldShow) {
      map.removeLayer(entry.layer);
      setVisibleLayers((current) => ({ ...current, [layerKey]: false }));
      return;
    }

    try {
      if (entry.load && !entry.loaded) {
        await entry.load();
      }

      entry.layer.addTo(map);
      setVisibleLayers((current) => ({ ...current, [layerKey]: true }));
    } catch (error) {
      console.error("Проблем при зареждане на слой:", error);
      alert(
        "Не успях да заредя един от файловете с пътеки. Провери имената на файловете в public/map-data/osm."
      );
    }
  }

  useEffect(() => {
    if (!mapRef.current) return;

    let map: any;

    async function loadMap() {
      const L = await import("leaflet");

      if (!mapRef.current || mapRef.current.dataset.loaded === "true") return;

      mapRef.current.dataset.loaded = "true";
      map = L.map(mapRef.current).setView([42.7339, 25.4858], 7);
      mapInstanceRef.current = map;

      const standardMap = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { attribution: "© OpenStreetMap contributors" }
      );

      const topoMap = L.tileLayer(
        "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
        { attribution: "© OpenTopoMap contributors" }
      );

      const hikingRoutes = L.tileLayer(
        "https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png",
        { attribution: "© Waymarked Trails" }
      );

      standardMap.addTo(map);
      hikingRoutes.addTo(map);

      baseMapsRef.current = {
        standard: standardMap,
        topo: topoMap,
      };

      const mountainMarkers = L.layerGroup();
      const mountains = [
        { name: "Рила", position: [42.17, 23.58], link: "/mountains/rila" },
        { name: "Пирин", position: [41.76, 23.42], link: "/mountains/pirin" },
        {
          name: "Родопи",
          position: [41.72, 24.75],
          link: "/mountains/rodopi",
        },
        {
          name: "Стара планина",
          position: [42.72, 24.92],
          link: "/mountains/stara-planina",
        },
        {
          name: "Витоша",
          position: [42.56, 23.28],
          link: "/mountains/vitosha",
        },
        {
          name: "Странджа",
          position: [42.05, 27.65],
          link: "/mountains/strandzha",
        },
      ];

      mountains.forEach((mountain) => {
        L.circleMarker(mountain.position as [number, number], {
          radius: 9,
          color: "#3b2416",
          weight: 3,
          fillColor: "#f3eadb",
          fillOpacity: 1,
        })
          .bindPopup(`
            <div style="font-family: sans-serif; min-width: 140px;">
              <strong style="font-size: 16px;">${mountain.name}</strong><br />
              <a href="${mountain.link}" style="color: #3b2416; font-weight: 700;">
                Отвори страницата
              </a>
            </div>
          `)
          .addTo(mountainMarkers);
      });

      mountainMarkers.addTo(map);

      overlayLayersRef.current = {
        hiking: { layer: hikingRoutes },
        markers: { layer: mountainMarkers },
      };

      function getTrailStyle(feature: any) {
        const tags = feature?.properties?.tags ?? feature?.properties ?? {};

        if (tags.highway === "track") {
          return {
            color: "#9a6a35",
            weight: 3,
            opacity: 0.9,
            dashArray: "7 6",
          };
        }

        return {
          color: "#2f6b4f",
          weight: 3,
          opacity: 0.95,
        };
      }

      function addTrailPopup(feature: any, layer: any) {
        const tags = feature?.properties?.tags ?? feature?.properties ?? {};
        const type =
          tags.highway === "track" ? "Горски път" : "Планинска пътека";
        const name = tags.name ?? "Маршрут без име";

        layer.bindPopup(`
          <div style="font-family: sans-serif; min-width: 170px;">
            <strong style="font-size: 15px;">${name}</strong><br />
            <span>${type}</span><br />
            <small>Данни: OpenStreetMap</small>
          </div>
        `);
      }

      trailConfigs.forEach((config) => {
        const entry: MapLayerEntry = {
          layer: L.layerGroup(),
          loaded: false,
          loading: false,
        };

        entry.load = async () => {
          if (entry.loaded || entry.loading) return;

          entry.loading = true;
          setLoadingLayers((current) => ({
            ...current,
            [config.key]: true,
          }));

          try {
            await Promise.all(
              config.files.map(async (filePath) => {
                const response = await fetch(filePath);

                if (!response.ok) {
                  throw new Error(`Не е намерен файл: ${filePath}`);
                }

                const geoJsonData = await response.json();

                L.geoJSON(geoJsonData, {
                  style: getTrailStyle,
                  onEachFeature: addTrailPopup,
                }).addTo(entry.layer);
              })
            );

            entry.loaded = true;
          } catch (error) {
            entry.layer.clearLayers();
            throw error;
          } finally {
            entry.loading = false;
            setLoadingLayers((current) => ({
              ...current,
              [config.key]: false,
            }));
          }
        };

        overlayLayersRef.current[config.key] = entry;
      });
    }

    loadMap();

    return () => {
      if (map) {
        map.remove();
      }

      mapInstanceRef.current = null;
      baseMapsRef.current = null;
      overlayLayersRef.current = {};

      if (mapRef.current) {
        delete mapRef.current.dataset.loaded;
      }
    };
  }, []);

  const activeLayerCount = Object.values(visibleLayers).filter(Boolean).length;

  return (
    <div>
      <div className="mb-4 w-full max-w-[360px]">
        <button
          onClick={showMyLocation}
          className="mb-3 rounded-full bg-[#3b2416] px-6 py-3 font-semibold text-[#f3eadb] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#51331e]"
        >
          Покажи къде съм
        </button>

        <button
          type="button"
          onClick={() => setIsLayersOpen((current) => !current)}
          className="flex w-full items-center justify-between rounded-2xl border border-[#cfbea5] bg-[#fffaf1] px-4 py-3 text-left shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
        >
          <span>
            <span className="block font-bold text-[#3b2416]">
              Карта и слоеве
            </span>
            <span className="block text-xs text-[#80664f]">
              {activeLayerCount} активни слоя
            </span>
          </span>

          <span className="text-xl font-bold text-[#3b2416]">
            {isLayersOpen ? "−" : "+"}
          </span>
        </button>

        {isLayersOpen && (
          <div className="mt-2 max-h-[430px] overflow-y-auto rounded-2xl border border-[#cfbea5] bg-[#fffaf1] p-3 shadow-xl">
            <p className="mb-2 px-2 text-xs font-bold uppercase tracking-[0.18em] text-[#96775b]">
              Вид карта
            </p>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => changeBaseMap("standard")}
                className={`w-full rounded-xl px-3 py-3 text-left transition ${
                  selectedBaseMap === "standard"
                    ? "bg-[#3b2416] text-[#f3eadb]"
                    : "bg-[#f1e5d3] text-[#3b2416] hover:bg-[#ead9c0]"
                }`}
              >
                <span className="block font-semibold">Стандартна карта</span>
                <span className="block text-xs opacity-75">
                  Пътища, градове и села
                </span>
              </button>

              <button
                type="button"
                onClick={() => changeBaseMap("topo")}
                className={`w-full rounded-xl px-3 py-3 text-left transition ${
                  selectedBaseMap === "topo"
                    ? "bg-[#3b2416] text-[#f3eadb]"
                    : "bg-[#f1e5d3] text-[#3b2416] hover:bg-[#ead9c0]"
                }`}
              >
                <span className="block font-semibold">Топографска карта</span>
                <span className="block text-xs opacity-75">
                  Релеф, височини и хоризонтали
                </span>
              </button>
            </div>

            <div className="my-4 border-t border-[#dbc9b1]" />

            <p className="mb-2 px-2 text-xs font-bold uppercase tracking-[0.18em] text-[#96775b]">
              Основни слоеве
            </p>

            {([
              ["hiking", "Маркирани маршрути", "Туристически трасета"],
              ["markers", "Планински маркери", "Връзки към планините"],
            ] as const).map(([key, title, description]) => (
              <button
                key={key}
                type="button"
                onClick={() => toggleOverlay(key)}
                className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-[#f1e5d3]"
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-md border text-xs font-bold ${
                    visibleLayers[key]
                      ? "border-[#3b2416] bg-[#3b2416] text-[#f3eadb]"
                      : "border-[#a48667] text-transparent"
                  }`}
                >
                  ✓
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#3b2416]">
                    {title}
                  </span>
                  <span className="block text-xs text-[#87694f]">
                    {description}
                  </span>
                </span>
              </button>
            ))}

            <div className="my-4 border-t border-[#dbc9b1]" />

            <p className="mb-2 px-2 text-xs font-bold uppercase tracking-[0.18em] text-[#96775b]">
              Пътеки и горски пътища
            </p>

            {trailConfigs.map((config) => (
              <button
                key={config.key}
                type="button"
                onClick={() => toggleOverlay(config.key)}
                className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-[#f1e5d3]"
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-md border text-xs font-bold ${
                    visibleLayers[config.key]
                      ? "border-[#3b2416] bg-[#3b2416] text-[#f3eadb]"
                      : "border-[#a48667] text-transparent"
                  }`}
                >
                  ✓
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#3b2416]">
                    {config.name}
                  </span>
                  <span className="block text-xs text-[#87694f]">
                    {loadingLayers[config.key]
                      ? "Зареждане..."
                      : "Пътеки и горски пътища"}
                  </span>
                </span>
              </button>
            ))}

            <div className="mt-3 rounded-xl bg-[#efe1ca] px-3 py-2 text-xs leading-relaxed text-[#75563d]">
              Зелените линии са пътеки. Кафявите прекъснати линии са горски
              пътища.
            </div>
          </div>
        )}
      </div>

      <div
        ref={mapRef}
        className="relative z-0 h-[520px] w-full overflow-hidden rounded-[2rem]"
      />
    </div>
  );
}
