// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importez vos composants
import Footer from './components/Footer'; // ⬅️ Le contenu de votre page d'accueil (qui inclut aussi son propre footer final)
import DonationPage from './components/DonPage'; // La page complète du don

export default function App() {
  return (
    <Router>
      {/* 1. NAV.JSX S'AFFICHE TOUJOURS */}
      {/* On le place en dehors des Routes pour qu'il ne disparaisse jamais */}
      
      <main>
          <Routes>
              
              {/* La page d'accueil : Affiche Footer.jsx (qui contient toutes vos sections + le pied de page final) */}
              <Route path="/" element={<Footer />} />
              
              {/* La page de don s'affiche seule lorsque l'URL est /don */}
              <Route path="/don" element={<DonationPage />} />
              
              {/* N'oubliez pas de définir les autres routes */}
              <Route path="/histoire" element={<div>Page Histoire détaillée...</div>} />
              <Route path="/evenements" element={<div>Page Événements...</div>} />
              <Route path="/contact" element={<div>Page Contact...</div>} />
              <Route path="/carte-octobre-rose" element={<div>Page Carte des Événements...</div>} />
              
          </Routes>
      </main>
      
      {/* Si vous aviez un footer universel, il irait ici. 
          Mais comme il est dans Footer.jsx, nous nous arrêtons là pour App.jsx. */}
    </Router>
  );
}