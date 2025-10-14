import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const roseIcon = new L.Icon({
    iconUrl: '/icon.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35], 
    popupAnchor: [0, -35],
});

export default function CarteOctobreRose() {
    const lieux = [
        // 🌸 MÉTROPOLE - FLANDRES
        {
            nom: "CHU de Lille",
            description: "Stands, marche et soirée Octobre Rose (1–14 oct)",
            coords: [50.62925, 3.057256],
        },
        {
            nom: "Cie La Belle Histoire",
            description: "Spectacle-débat le 9 oct à 19h30",
            coords: [50.62925, 3.057256],
        },
        {
            nom: "Bus du Cœur des Femmes",
            description: "Dépistage gratuit du 6 au 8 oct, place Rihour (Lille)",
            coords: [50.637, 3.063],
        },
        {
            nom: "CH Tourcoing",
            description: "Animations Octobre Rose tout le mois",
            coords: [50.716, 3.162],
        },

        // 🌸 HAINAUT
        {
            nom: "Complexe aquatique Caudry",
            description: "Ateliers bien-être le 14 oct (13h–20h30)",
            coords: [50.128, 3.411],
        },

        // 🌸 PAS-DE-CALAIS
        {
            nom: "ERC du Béthunois PREVART",
            description: "Actions et partenariats Octobre Rose",
            coords: [50.530, 2.640],
        },
        {
            nom: "Clinique des 2 Caps (Calais)",
            description: "Journées info les 11, 18 et 24 oct",
            coords: [50.9513, 1.8587],
        },
        {
            nom: "MCO Côte d’Opale",
            description: "Sensibilisation et prévention en octobre",
            coords: [50.720, 1.613],
        },
        {
            nom: "CH Boulogne-sur-Mer",
            description: "Marche, expo, ventes et ciné tout le mois",
            coords: [50.726, 1.611],
        },
        {
            nom: "CH Calais",
            description: "Chaîne humaine, ciné-débat et stands",
            coords: [50.948, 1.855],
        },

        // 🌸 AISNE
        {
            nom: "CH Saint-Quentin",
            description: "Stands prévention et journée mammographie",
            coords: [49.848, 3.287],
        },

        // 🌸 SOMME
        {
            nom: "CH Abbeville",
            description: "Concerts, stands et visites en octobre",
            coords: [50.105, 1.833],
        },

        // 🌸 OISE
        {
            nom: "CH Compiègne-Noyon",
            description: "Journées d’info les 9 et 23 oct + collecte",
            coords: [49.417, 2.826],
        },


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
