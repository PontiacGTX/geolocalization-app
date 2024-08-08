import { Point, point } from 'leaflet';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import './ViewMap.css';
import MapContent from '../MapContent/MapContent';

const ViewMap = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <MapContainer center={[position.latitude, position.longitude]} zoom={13} style={{ height: "100vh" }}>
          <TileLayer
            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapContent />
        </MapContainer>
      )}
    </div>
  );
};

export default ViewMap;