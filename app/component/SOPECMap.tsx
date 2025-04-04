"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker issue in Leaflet (important for Next.js)
import markerIconSrc from "leaflet/dist/images/marker-icon.png";
import markerShadowSrc from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIconSrc.src, // 🔥 use .src
  shadowUrl: markerShadowSrc.src, // 🔥 use .src
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});


const locations = [
  { name: "SOPEC Headquarters", lat: 40.167880, lng: -82.561717 },
  { name: "Athens, OH Office", lat: 39.3292, lng: -82.1013 },
  { name: "Dayton, OH Office", lat: 39.7589, lng: -84.1916 },
  { name: "Cleveland, OH Office", lat: 41.4993, lng: -81.6944 },
];

export default function SOPECMap() {
  return (
    <MapContainer
      center={[40.167880, -82.561717]}
      zoom={6}
      className="h-[400px] w-full rounded-md shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {locations.map((loc, index) => (
        <Marker key={index} position={[loc.lat, loc.lng]} icon={customIcon}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
