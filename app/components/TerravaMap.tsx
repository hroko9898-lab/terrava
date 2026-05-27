"use client";

import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function TerravaMap() {
  return (
    <div className="h-[520px] w-full overflow-hidden rounded-[2rem]">
      <MapContainer
        center={[42.7339, 25.4858]}
        zoom={7}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Нормална карта">
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Топографска карта">
            <TileLayer
              attribution="&copy; OpenTopoMap contributors"
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.Overlay checked name="Пешеходни маршрути">
            <TileLayer
              attribution="&copy; Waymarked Trails"
              url="https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png"
            />
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}