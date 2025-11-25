// Footer.jsx
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./Footer.css";
// NOTE: Remplacez par le chemin correct vers votre logo.
import logo from "/LOGO.png"; 


const AvanceesData = [
  {
    year: "2022",
    title: "Thérapie ciblée appelée « inhibiteurs de PARP »",
    description: "Contre certains cancers du sein en cas de mutations héréditaires BRCA1 ou BRCA2.",
    imageUrl: "/PARP.jpg"
  },
  {
    year: "2021",
    title: "1ᵉʳ anticorps conjugué anti-HER2",
    description: "Un anticorps monoclonal anti-HER2 lié à une molécule de chimiothérapie, contre les cancers du sein HER2+.",
    imageUrl: "/anticorps.jpeg"
  },
  {
    year: "2019",
    title: "Immunothérapie",
    description: "L’utilisation des propres défenses immunitaires du patient pour attaquer les cellules cancéreuses.",
    imageUrl: "/pic.jpg"
  },
  {
    year: "2015",
    title: "Thérapies ciblées",
    description: "Développement de médicaments qui bloquent la croissance des cellules cancéreuses en interférant avec des molécules spécifiques.",
    imageUrl: "/tc.png"
  },
  {
    year: "1985",
    title: "Hormonothérapie",
    description: "Un des premiers traitements efficaces ciblant les cancers hormonodépendants.",
    imageUrl: "/h.jpg"
  },
];

const TemoignagesData = [
  {
    name: "Blandine",
    type: "video",
    youtubeId: "vpnAbrcP2eY",
  },
  {
    name: "Florence",
    type: "quote",
    quote: "Quand vous donnez, vous permettez à des femmes comme moi de garder espoir. En 2020 on m’a diagnostiqué un cancer du sein... Aujourd'hui, grâce à la recherche, je suis en vie. **Faire un don c’est un acte concret de solidarité, ça permet de sauver des vies.**",
    imageFile: "/chauve.jpg"
  },
  {
    name: "Isabelle",
    type: "video",
    youtubeId: "8hdlSlPzj8o",
  },
];


export default function Footer() {
  const [activeForm, setActiveForm] = useState("rejoindre"); 
  const [activeYear, setActiveYear] = useState(AvanceesData[0].year);
  const activeAvancee = AvanceesData.find(d => d.year === activeYear) || AvanceesData[0];
  const contactSectionRef = useRef(null);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  
  const navigate = useNavigate(); 

  // Fonction pour naviguer vers la page Don
  const navigateToDonPage = () => {
    navigate("/don");
  };
  
  // Fonction pour gérer le clic sur une carte vidéo
  const handleVideoCardClick = (youtubeId) => {
    setPlayingVideoId(youtubeId);
  };
  
  return (
    <div className="page-sections-container">

      {/* SECTION TÉMOIGNAGES */}
      <section className="temoignages-section-container">
        <h2 className="temoignages-title">
          PROTÉGEZ TOUTES LES FEMMES QUE VOUS AIMEZ
        </h2>

        <div className="temoignages-grid">
          {TemoignagesData.map((temoignage) => (
            <div
              key={temoignage.name}
              className={`temoignage-card ${temoignage.type}-card ${playingVideoId === temoignage.youtubeId ? 'playing-large' : ''}`}
              onClick={temoignage.type === 'video' && playingVideoId !== temoignage.youtubeId ? () => handleVideoCardClick(temoignage.youtubeId) : undefined}
            >
              {temoignage.type === 'quote' ? (
                <div className="quote-content-wrapper">
                  {temoignage.imageFile && (
                    <div className="quote-image-container">
                      <img src={temoignage.imageFile} alt={`Portrait de ${temoignage.name}`} className="quote-person-image" />
                    </div>
                  )}
                  <div className="quote-text-content">
                    <span className="quote-mark">“</span>
                    <p className="quote-text" dangerouslySetInnerHTML={{ __html: temoignage.quote }} />
                    <span className="quote-name">{temoignage.name}</span>
                  </div>
                  <div className="quote-background-placeholder" />
                </div>
              ) : (
                playingVideoId === temoignage.youtubeId ? (
                  <div className="video-player-container">
                    <button
                      className="video-close-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingVideoId(null);
                      }}
                    >
                      ×
                    </button>
                    <iframe
                      src={`https://www.youtube.com/embed/${temoignage.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=0`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Témoignage de ${temoignage.name}`}
                    ></iframe>
                  </div>
                ) : (
                  <div className="video-card-preview"
                    style={{ backgroundImage: `url(https://img.youtube.com/vi/${temoignage.youtubeId}/hqdefault.jpg)` }}
                  >
                    <div className="card-overlay">
                      <span className="name-tag">{temoignage.name}</span>
                      <div className="play-icon">▶</div>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION AVANCÉES */}
      <section className="avancees-section-container">
        <h2 className="avancees-title">
          <span role="img" aria-label="cœur">❤️</span> PLUS DE 25 ANS D'AVANCÉES DÉCISIVES POUR LES MALADES ! <span role="img" aria-label="cœur">❤️</span>
        </h2>

        <div className="timeline-content-wrapper">
          <div className="timeline-card">
            <div
              className="card-image-placeholder"
              style={{ backgroundImage: `url(${activeAvancee.imageUrl})` }}
            >
              <span className="year-overlay">{activeAvancee.year}</span>
              <div className="image-overlay-gradient"></div>
            </div>
            <div className="card-text-content">

              <h3 className="card-title">{activeAvancee.title}</h3>
              <p className="card-description">{activeAvancee.description}</p>
            </div>
          </div>
        </div>

        <div className="timeline-nav">
          {AvanceesData.map((data) => (
            <button
              key={data.year}
              className={`year-button ${data.year === activeYear ? "active" : ""}`}
              onClick={() => setActiveYear(data.year)}
            >
              {data.year}
            </button>
          ))}
        </div>

        {/* BOUTON DANS AVANCÉES -> PAGE DON (Utilisation de useNavigate) */}
        <button
          className="soutien-button"
          onClick={navigateToDonPage} 
        >
          <span role="img" aria-label="ruban rose">🎗️</span> JE SOUTIENS LA RECHERCHE
        </button>
      </section>

      {/* SECTION HISTOIRE */}
      <section className="story-section">
        <h2>Histoire d'Octobre Rose</h2>
        <p>
          Depuis plus de 30 ans, Octobre Rose sensibilise à la lutte contre le
          cancer du sein. Des événements sont organisés partout en France pour
          encourager le dépistage précoce et soutenir la recherche.
        </p>
        <p>
            Tout a commencé en 1985 aux États-Unis, lorsque l'American Cancer Society et la société pharmaceutique Imperial Chemical Industries ont lancé une campagne pour promouvoir la mammographie. Depuis, le symbole du ruban rose, adopté en 1991, est devenu universel. Ce mouvement a permis non seulement de collecter des fonds essentiels, mais aussi de **briser le silence** et de faire progresser significativement les traitements. Le combat ne fait que commencer, mais l'histoire d'Octobre Rose est celle d'une solidarité mondiale en action.
        </p>
        <div className="story-cta">
            {/* Lien vers page histoire détaillée */}
            <Link to="/histoire" className="btn-story">
              En savoir plus sur l'histoire complète
            </Link>
            {/* Lien vers la carte */}
            <Link to="/carte-octobre-rose" className="btn-story map-link">
              Voir la Carte des Événements
            </Link>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section className="contact-section" ref={contactSectionRef}>
        <div className="contact-container">
          <div className="contact-text">
            <h2>Ensemble, faisons la différence</h2>
            <p>
              Rejoignez notre mission pour sensibiliser, soutenir et sauver des
              vies. Chaque action compte.
            </p>

            <div className="contact-buttons">
              {/* BOUTON DON SUPPRIMÉ ET DÉPLACÉ CI-DESSOUS */}
              <button
                className={`btn-ct ${activeForm === "rejoindre" ? "active" : ""}`}
                onClick={() => setActiveForm("rejoindre")}
              >
                Rejoins-nous
              </button>
            </div>
          </div>
        </div>

        {activeForm === "rejoindre" && (
          <div className="contact-form">
            <h3>Impliquez-vous</h3>
            <p>Devenez bénévole avec nous 💪</p>
            <form>
              <input type="text" placeholder="Nom" required />
              <input type="email" placeholder="Adresse Mail" required />
              <textarea placeholder="Message" rows="3"></textarea>
              <button className="join" type="submit">
                Rejoins-nous
              </button>
            </form>
          </div>
        )}
      </section>

      {/* NOUVELLE SECTION DÉDIÉE AU DON (Centré et large) */}
      <section className="donation-cta-section">
        <div className="donation-cta-content">
          <p className="cta-text">Chaque geste compte. Votre soutien est vital pour la recherche.</p>
          <Link to="/don" className="btn-donate-large">
            <span role="img" aria-label="cœur">💖</span> FAITES UN DON MAINTENANT
          </Link>
        </div>
      </section>

      {/* PIED DE PAGE (FOOTER) */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="RoseMap Logo" />
            <p>Ensemble, soutenons la recherche et la prévention contre le cancer du sein.</p>
          </div>

          <div className="footer-links">
            <h4>Liens rapides</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/evenements">Nos événements</Link></li>
              {/* LIEN RAPIDE DANS FOOTER -> PAGE DON */}
              <li><Link to="/don">Faire un don</Link></li> 
              <li><Link to="/carte-octobre-rose">La Carte Octobre Rose</Link></li> 
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Suivez-nous</h4>
            <div className="icons">
              {/* Ces classes utilisent les images de fond CSS que nous avons définies */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-icon" aria-label="Facebook"></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-icon" aria-label="Instagram"></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter-icon" aria-label="Twitter / X"></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 RoseMap. Tous droits réservés. Ensemble pour une vie en rose.
        </div>
      </footer>
    </div>
  );
}