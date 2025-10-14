import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const roseIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  iconSize: [35, 35],
});

export default function CarteOctobreRose() {
  const lieux = [
    { nom: "CHU de Lille", description: "Marche solidaire Octobre Rose", coords: [50.62925, 3.057256] },
    { nom: "Hôpital d’Amiens", description: "Stand d’information & dépistage", coords: [49.894067, 2.295753] },
    { nom: "Calais – Centre sportif", description: "Course pour la vie", coords: [50.9513, 1.8587] },
    { nom: "Dunkerque – Place Jean Bart", description: "Village santé Octobre Rose", coords: [51.0344, 2.377] },
    { nom: "Arras – Hôtel de Ville", description: "Illumination du beffroi", coords: [50.291, 2.777] },
  ];

  return (
    <MapContainer center={[50.3, 2.8]} zoom={8} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {lieux.map((lieu, i) => (
        <Marker key={i} position={lieu.coords} icon={roseIcon}>
          <Popup>
            <b>{lieu.nom}</b>
            <br />
            {lieu.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
