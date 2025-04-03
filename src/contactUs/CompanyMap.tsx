import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Replace with your company's latitude and longitude
const companyLocation = {
  lat: 40.712776,
  lng: -74.005974,
};

// Custom icon for the marker
const companyIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Replace with a URL of your choice or a local icon file
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const CompanyMap: React.FC = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={[companyLocation.lat, companyLocation.lng]} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[companyLocation.lat, companyLocation.lng]} icon={companyIcon}>
          <Popup>
            <strong>Our Company</strong><br />
            123 Main St, New York, NY
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CompanyMap;
