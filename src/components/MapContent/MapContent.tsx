import  {useEffect,useState} from  'react';
import {  Marker,Popup,useMap,useMapEvents} from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Marker {
  lat: number;
  lng: number;
}

const MapContent =()=>{
  const [markers, setMarkers] = useState<Marker[]>([]);
  const map = useMap();
  const mapEvent = useMapEvents({
     click: (locat) => {
       map.locate()
       setMarkers((markers) => [...markers, { lat: locat.latlng.lat, lng: locat.latlng.lng } as Marker]);
     },
   });

 
    return (
      <div>
        {markers.map((marker) => (
          <Marker position={[marker.lat, marker.lng]} >
            <Popup>
              Marker
            </Popup>
          </Marker>
        ))}
      </div>
    );
}
export default MapContent;