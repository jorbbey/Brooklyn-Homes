import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 
const Map = ({lat, lon, text}) => {
  const position = [lat, lon]; // Your latitude and longitude
  return (
    <MapContainer
      center={position}
      zoom={15} 
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{text}</Popup>{" "}
        {/* Add a popup to show when clicking the marker */}
      </Marker>
    </MapContainer>
  );
}

export default Map

