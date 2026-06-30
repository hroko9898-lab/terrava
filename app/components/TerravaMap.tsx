"use client";

import { useEffect, useRef } from "react";

type TrailLayerConfig = {
  label: string;
  files: string[];
};

export default function TerravaMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const userMarkerRef = useRef<any>(null);

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

  useEffect(() => {
    if (!mapRef.current) return;

    let map: any;

    async function loadMap() {
      const L = await import("leaflet");

      if (!mapRef.current || mapRef.current.dataset.loaded === "true") return;

      mapRef.current.dataset.loaded = "true";

      map = L.map(mapRef.current).setView([42.7339, 25.4858], 7);
      mapInstanceRef.current = map;

      const normalMap = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution: "© OpenStreetMap contributors",
        }
      );

      const topoMap = L.tileLayer(
        "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
        {
          attribution: "© OpenTopoMap contributors",
        }
      );

      const hikingRoutes = L.tileLayer(
        "https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png",
        {
          attribution: "© Waymarked Trails",
        }
      );

      normalMap.addTo(map);
      hikingRoutes.addTo(map);

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
              <strong style="font-size: 16px;">${mountain.name}</strong>
              <br />
              <a href="${mountain.link}" style="color: #3b2416; font-weight: 700;">
                Отвори страницата
              </a>
            </div>
          `)
          .addTo(mountainMarkers);
      });

      mountainMarkers.addTo(map);

      const layersControl = L.control
        .layers(
          {
            "Стандартна карта": normalMap,
            "Топографска карта": topoMap,
          },
          {
            "Маркирани туристически маршрути": hikingRoutes,
            "Планински маркери": mountainMarkers,
          },
          {
            collapsed: false,
          }
        )
        .addTo(map);

      const trailConfigs: TrailLayerConfig[] = [
        {
          label: "Горски пътища и пътеки — Рила",
          files: ["/map-data/osm/rila-trails.geojson"],
        },
        {
          label: "Горски пътища и пътеки — Пирин",
          files: ["/map-data/osm/pirin-trails.geojson"],
        },
        {
          label: "Горски пътища и пътеки — Витоша",
          files: ["/map-data/osm/vitosha-trails.geojson"],
        },
        {
          label: "Горски пътища и пътеки — Родопи",
          files: [
            "/map-data/osm/rodopi-west-trails.geojson",
            "/map-data/osm/rodopi-central-trails.geojson",
            "/map-data/osm/rodopi-east-north-trails.geojson",
            "/map-data/osm/rodopi-east-south-trails.geojson",
          ],
        },
        {
          label: "Горски пътища и пътеки — Стара планина",
          files: [
            "/map-data/osm/stara-planina-west-trails.geojson",
            "/map-data/osm/stara-planina-central-trails.geojson",
            "/map-data/osm/stara-planina-east-west-trails.geojson",
            "/map-data/osm/stara-planina-east-east-trails.geojson",
          ],
        },
        {
          label: "Горски пътища и пътеки — Странджа",
          files: [
            "/map-data/osm/strandzha-west-trails.geojson",
            "/map-data/osm/strandzha-east-trails.geojson",
          ],
        },
      ];

      const trailLayers = trailConfigs.map((config) => ({
        ...config,
        group: L.layerGroup(),
        loaded: false,
        loading: false,
      }));

      function getTrailStyle(feature: any) {
        const tags = feature?.properties?.tags ?? feature?.properties ?? {};
        const roadType = tags.highway;

        if (roadType === "track") {
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

      function addPopup(feature: any, layer: any) {
        const tags = feature?.properties?.tags ?? feature?.properties ?? {};

        const type =
          tags.highway === "track" ? "Горски път" : "Планинска пътека";

        const name = tags.name ?? "Маршрут без име";

        layer.bindPopup(`
          <div style="font-family: sans-serif; min-width: 170px;">
            <strong style="font-size: 15px;">${name}</strong>
            <br />
            <span>${type}</span>
            <br />
            <small>Данни: OpenStreetMap</small>
          </div>
        `);
      }

      async function loadTrailLayer(trailLayer: any) {
        if (trailLayer.loaded || trailLayer.loading) return;

        trailLayer.loading = true;

        try {
          await Promise.all(
            trailLayer.files.map(async (filePath: string) => {
              const response = await fetch(filePath);

              if (!response.ok) {
                throw new Error(`Не е намерен файл: ${filePath}`);
              }

              const geoJsonData = await response.json();

              L.geoJSON(geoJsonData, {
                style: getTrailStyle,
                onEachFeature: addPopup,
              }).addTo(trailLayer.group);
            })
          );

          trailLayer.loaded = true;
        } catch (error) {
          console.error("Проблем при зареждане на слой:", error);
          alert(
            "Един от файловете с пътеки не можа да се зареди. Провери имената на GeoJSON файловете."
          );
        } finally {
          trailLayer.loading = false;
        }
      }

      trailLayers.forEach((trailLayer) => {
        layersControl.addOverlay(trailLayer.group, trailLayer.label);
      });

      map.on("overlayadd", (event: any) => {
        const selectedLayer = trailLayers.find(
          (trailLayer) => trailLayer.group === event.layer
        );

        if (selectedLayer) {
          loadTrailLayer(selectedLayer);
        }
      });
    }

    loadMap();

    return () => {
      if (map) {
        map.remove();
      }

      if (mapRef.current) {
        delete mapRef.current.dataset.loaded;
      }
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={showMyLocation}
        className="mb-4 rounded-full bg-[#3b2416] px-6 py-3 font-semibold text-[#f3eadb] shadow-lg"
      >
        Покажи къде съм
      </button>

      <div
        ref={mapRef}
        className="relative z-0 h-[520px] w-full overflow-hidden rounded-[2rem]"
      />
    </div>
  );
}