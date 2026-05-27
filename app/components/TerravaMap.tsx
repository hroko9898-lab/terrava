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
      className="h-[520px] w-full overflow-hidden rounded-[2rem]"
    />
  );
}