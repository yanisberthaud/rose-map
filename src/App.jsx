// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Nav from './components/Nav';      
import Footer from './components/Footer'; 
import DonPage from './components/DonPage';
import CarteOctobreRose from './components/CarteOctobreRose';

function Home() {
    return (
        <>
        </>
    );
}

function AppContent() {
    const location = useLocation();
    
    // 🌸 NOUVEL ÉTAT : Gérer l'affichage de la carte
    const [isMapVisible, setIsMapVisible] = useState(false); 

    // Logique pour le bouton d'ouverture/fermeture de la carte
    const toggleMapVisibility = () => {
        // On ne permet l'ouverture que sur la page d'accueil (si nécessaire)
        // Si vous voulez la carte partout, vous pouvez ignorer la vérification de pathname.
        if (location.pathname === '/') {
            setIsMapVisible(!isMapVisible);
        } else {
            // Optionnel : si on clique hors de la home, on navigue d'abord vers la home
            // (Nécessiterait 'useNavigate' ou un lien dans le bouton)
            setIsMapVisible(!isMapVisible); // On l'ouvre quand même pour l'exemple
        }
    };

    // Détecte si l'URL est /don
    const isDonationModalOpen = location.pathname === '/don'; 
    
    return (
        <>
            {/* 💡 Nav et Footer sont ici pour être visibles sur toutes les routes. 
               Pensez à adapter votre composant 'Home' en conséquence (retirer l'appel à Nav/Footer) */}
            <Nav /> 

            <main>
                <Routes>
                    {/* La route d'accueil charge le contenu de la page d'accueil */}
                    <Route path="/" element={<Home />} />
                    
                    {/* Autres routes non modales */}
                    <Route path="/histoire" element={<div>Page Histoire détaillée...</div>} />
                    <Route path="/evenements" element={<div>Page Événements...</div>} />
                    <Route path="/contact" element={<div>Page Contact...</div>} />
                    <Route path="/don" element={null} /> 
                </Routes>
            </main>

            {/* ======================================================= */}
            {/* 📍 BOUTON D'ACCÈS FIXE / GLOBAL 📍 */}
            {/* Le bouton est placé ici pour être visible sur toutes les routes, 
               grâce à sa position fixe définie dans le CSS. */}
            <button 
                className="carte-toggle-button" // Utilisez le CSS que je vous ai donné précédemment
                onClick={toggleMapVisibility}
            >
                {/* Icône et texte du bouton */}
                <img src="/icon.png" alt="Carte Octobre Rose" className="button-icon" /> 
                <span className="button-text">
                    {isMapVisible ? 'Fermer' : 'Carte Événements'}
                </span>
            </button>
            {/* ======================================================= */}


            <Footer /> {/* Le Footer est aussi ici pour être global */}


            {/* 🛑 AFFICHAGE CONDITIONNEL DES OVERLAYS (Cartes et Modales) 🛑 */}
            
            {/* 1. Modale de Don (via l'URL) */}
            {isDonationModalOpen && <DonPage />} 

            {/* 2. Carte Interactive (via l'état local) */}
            {isMapVisible && (
                <div className="global-map-overlay">
                    {/* On passe isVisible pour forcer le re-rendu de Leaflet via la prop 'key' */}
                    <CarteOctobreRose isVisible={isMapVisible} />
                </div>
            )}
        </>
    );
}

// Le composant racine qui fournit le Router
export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}