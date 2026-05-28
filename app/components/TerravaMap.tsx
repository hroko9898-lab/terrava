"use client";

import { useEffect, useRef } from "react";

export default function TerravaMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    let map: any;

    async function loadMap() {
      const L = await import("leaflet");

      if (!mapRef.current || mapRef.current.dataset.loaded === "true") return;

      mapRef.current.dataset.loaded = "true";

      map = L.map(mapRef.current).setView([42.7339, 25.4858], 7);

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

      L.control
        .layers(
          {
            "Нормална карта": normalMap,
            "Топографска карта": topoMap,
          },
          {
            "Пешеходни маршрути": hikingRoutes,
          }
        )
        .addTo(map);

      const mountains = [
        {
          name: "Рила",
          position: [42.17, 23.58],
          link: "/mountains/rila",
        },
        {
          name: "Пирин",
          position: [41.76, 23.42],
          link: "/mountains/pirin",
        },
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
          .addTo(map)
          .bindPopup(
            `
              <div style="font-family: sans-serif; min-width: 140px;">
                <strong style="font-size: 16px;">${mountain.name}</strong>
                <br />
                <a href="${mountain.link}" style="color: #3b2416; font-weight: 700;">
                  Отвори страницата
                </a>
              </div>
            `
          );
      });
    }

    loadMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="relative z-0 h-[520px] w-full overflow-hidden rounded-[2rem]"
    />
  );
}