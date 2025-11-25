import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Nav from './components/Nav';      
import Footer from './components/Footer'; 
import DonPage from './components/DonPage';
import CarteOctobreRose from './components/CarteOctobreRose';

// 🛑 MODIFICATION CLÉ 1 : Home rend maintenant uniquement le contenu de la page d'accueil.
// Le Nav et le Footer sont gérés dans AppContent pour être masqués sur la page carte.
function Home() {
    return (
        <>
        </>
    );
}

function AppContent() {
    const location = useLocation();
    
    // 🛑 MODIFICATION CLÉ 2 : Suppression de l'état local isMapVisible et de la fonction toggleMapVisibility.
    // La navigation vers la carte est maintenant gérée uniquement par React Router.

    // Détecte si l'URL est /don pour le modal
    const isDonationModalOpen = location.pathname === '/don'; 
    
    // Détecte si nous sommes sur la page carte pour conditionner l'affichage du Nav/Footer
    const isMapPage = location.pathname === '/carte-octobre-rose';
    
    return (
        <>
            {/* On affiche la navigation partout sauf sur la page carte si elle doit être plein écran */}
            {!isMapPage && <Nav />} 

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/histoire" element={<div>Page Histoire détaillée...</div>} />
                    <Route path="/evenements" element={<div>Page Événements...</div>} />
                    <Route path="/contact" element={<div>Page Contact...</div>} />
                    <Route path="/don" element={null} /> 
                    
                    {/* 🗺️ ROUTE DE LA CARTE 🗺️ */}
                    <Route 
                        path="/carte-octobre-rose" 
                        // On passe isVisible={true} et isPage={true} pour forcer l'affichage 
                        // de la carte en mode page dans le composant CarteOctobreRose.
                        element={<CarteOctobreRose isVisible={true} isPage={true} />} 
                    />
                </Routes>
            </main>
            
            {/* 🛑 Suppression du bouton flottant pour la carte (il utilisait l'état isMapVisible) 🛑 */}
            
            {/* On affiche le Footer partout sauf sur la page carte */}
            {!isMapPage && <Footer />} 
            
            {isDonationModalOpen && <DonPage />} 

            {/* 🛑 Suppression de l'overlay de carte d'origine 🛑 */}

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