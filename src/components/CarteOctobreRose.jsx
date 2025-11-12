import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster'
import './CarteOctobreRose.css'

const roseIcon = new L.Icon({
  iconUrl: '/icon.png',
  iconSize: [25, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
})

function MarkerCluster({ lieux, icon }) {
  const map = useMap()

  useEffect(() => {
    const markers = L.markerClusterGroup()
    lieux.forEach((lieu) => {
      const marker = L.marker(lieu.coords, { icon })
      marker.bindPopup(`<b>${lieu.nom}</b><br>${lieu.description}`)
      markers.addLayer(marker)
    })
    map.addLayer(markers)

    return () => map.removeLayer(markers)
  }, [lieux, icon, map])

  return null
}

export default function CarteOctobreRose() {
  const lieux = [
    // 🌸 MÉTROPOLE - FLANDRES
    { nom: "CHU de Lille", description: "Stands, marche et soirée (1–14 oct)", coords: [50.62925, 3.057256] },
    { nom: "Cie La Belle Histoire", description: "Spectacle-débat 9 oct", coords: [50.62925, 3.057256] },
    { nom: "Bus du Cœur des Femmes", description: "Dépistage 6–8 oct, Lille", coords: [50.637, 3.063] },
    { nom: "CH Tourcoing", description: "Animations tout le mois", coords: [50.716, 3.162] },

    // 🌸 HAINAUT
    { nom: "Complexe aquatique Caudry", description: "Ateliers bien-être 14 oct", coords: [50.128, 3.411] },

    // 🌸 PAS-DE-CALAIS
    { nom: "ERC du Béthunois PREVART", description: "Partenariats Octobre Rose", coords: [50.530, 2.640] },
    { nom: "Clinique des 2 Caps", description: "Journées info 11, 18, 24 oct", coords: [50.9513, 1.8587] },
    { nom: "MCO Côte d’Opale", description: "Sensibilisation en octobre", coords: [50.720, 1.613] },
    { nom: "CH Boulogne-sur-Mer", description: "Marche, expo et ventes", coords: [50.726, 1.611] },
    { nom: "CH Calais", description: "Chaîne humaine et ciné-débat", coords: [50.948, 1.855] },

    // 🌸 AISNE
    { nom: "CH Saint-Quentin", description: "Stands prévention et mammographie", coords: [49.848, 3.287] },

    // 🌸 SOMME
    { nom: "CH Abbeville", description: "Concerts et stands tout le mois", coords: [50.105, 1.833] },

    // 🌸 OISE
    { nom: "CH Compiègne-Noyon", description: "Journées info 9 et 23 oct + collecte", coords: [49.417, 2.826] },
  ]

  return (
    <div className="carte-section">
      <div className="carte-wrapper">
        <div className="carte-map">
          <MapContainer
            center={[50.3, 2.8]}
            zoom={8}
            style={{ height: '600px', width: '100%', borderRadius: '12px' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerCluster lieux={lieux} icon={roseIcon} />
          </MapContainer>
        </div>
        <div className="carte-text">
          <h2>Découvrez les actions Octobre Rose</h2>
          <p>
            Cette carte interactive vous permet de visualiser tous les événements,
            stands et actions de sensibilisation organisés dans la région.
            Cliquez sur les marqueurs pour obtenir plus d’informations sur
            chaque lieu.
          </p>
          <p>
            Chaque point sur la carte représente un lieu où Octobre Rose agit
            pour soutenir la prévention, le dépistage et la recherche contre le cancer du sein.
          </p>
        </div>
      </div>
    </div>
  )
}