// Footer.jsx
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./Footer.css";
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

  const navigateToDonPage = () => {
    navigate("/don");
  };
  
  const handleVideoCardClick = (youtubeId) => {
    setPlayingVideoId(youtubeId);
  };
  
  return (
    <div className="page-sections-container">

      <div className="map-cta-section">
        <Link to="/carte-octobre-rose" className="btn-map-large">
          <span role="img" aria-label="carte">📍</span> CONSULTER LA CARTE DES ÉVÉNEMENTS
        </Link>
      </div>
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
    <h2>💖 Histoire Complète d'Octobre Rose</h2>
    
    <div className="story-content">
        
        {/* --- I. Les Origines et la Naissance du Mouvement --- */}
        <section className="story-part">
            <h3>I. 🚀 Les Origines et la Naissance du Mouvement</h3>
            <p>
                L'initiative **Octobre Rose** (Breast Cancer Awareness Month - BCAM) est née aux **États-Unis** en **octobre 1985**.
            </p>
            <p>
                Initialement, cette campagne fut lancée par l'**American Cancer Society** en partenariat avec l'entreprise pharmaceutique Imperial Chemical Industries (aujourd'hui AstraZeneca). L'objectif premier était de **promouvoir la mammographie** comme outil de dépistage précoce essentiel pour la détection du cancer du sein.
            </p>
            <p>
                Le mouvement a pris son essor grâce à un symbole devenu universel : le **ruban rose**. Si le premier ruban (pêche) est apparu en 1990 pour le cancer du côlon, c'est en **1991** que la fondation Susan G. Komen for the Cure a distribué des **rubans roses** aux participantes de sa course à New York, ancrant définitivement cette couleur comme emblème de la lutte contre le cancer du sein.
            </p>
        </section>
        
        <hr/>

        {/* --- II. Le Mouvement en France et l'Association --- */}
        <section className="story-part">
            <h3>II. 🇫🇷 Le Mouvement en France et l'Association "Le Cancer du Sein, Parlons-en !"</h3>
            <p>
                En France, le mouvement a été officiellement initié en **1994** par le groupe Estée Lauder Companies France et le magazine <em>Marie Claire</em> en créant l'association **"Le Cancer du Sein, Parlons-en !"** (renommée plus tard <em>Breast Cancer Awareness</em>).
            </p>
            <p>
                Chaque année, durant tout le mois d'octobre, des **événements de sensibilisation et de collecte de fonds** sont organisés partout dans le pays. Ces actions, allant des courses solidaires aux **illuminations de monuments emblématiques**, visent à :
            </p>
            <ul>
                <li>**Encourager le dépistage précoce :** Rappeler aux femmes (particulièrement celles âgées de 50 à 74 ans) l'importance d'une surveillance régulière.</li>
                <li>**Briser le tabou et le silence :** Offrir un espace de dialogue et de soutien aux patientes et à leurs proches.</li>
                <li>**Financer la recherche :** Collecter des fonds essentiels pour faire progresser les traitements et améliorer la qualité de vie des personnes atteintes.</li>
            </ul>
        </section>
        
        <hr/>

        {/* --- III. L'Impact et l'Héritage --- */}
        <section className="story-part">
            <h3>III. ✨ L'Impact et l'Héritage d'une Solidarité Mondiale</h3>
            <p>
                Depuis plus de **30 ans**, le mouvement Octobre Rose est devenu bien plus qu'une simple campagne de sensibilisation. Il est le symbole d'une **solidarité mondiale** en action, démontrant que l'union fait la force face à la maladie.
            </p>
            <p>
                L'impact est mesurable :
            </p>
            <ul>
                <li>**Hausse du dépistage :** Les campagnes ont significativement augmenté la participation aux mammographies, permettant de diagnostiquer la maladie à un stade précoce, où le taux de guérison est le plus élevé.</li>
                <li>**Progression des traitements :** Les fonds collectés ont soutenu des innovations majeures, menant à des traitements moins invasifs et plus efficaces.</li>
                <li>**Évolution des mentalités :** Le combat a été sorti de la sphère privée pour devenir une conversation publique et collective, réduisant l'isolement des personnes touchées.</li>
            </ul>
            <p>
                Le combat contre le cancer du sein est continu, mais l'histoire d'Octobre Rose est celle d'une **victoire de la mobilisation et de l'espoir**, nous rappelant que chaque geste de soutien et chaque discussion compte.
            </p>
        </section>

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

      <section className="donation-cta-section">
        <div className="donation-cta-content">
          <p className="cta-text">Chaque geste compte. Votre soutien est vital pour la recherche.</p>
          <Link to="/don" className="btn-donate-large">
            <span role="img" aria-label="cœur">💖</span> FAITES UN DON MAINTENANT
          </Link>
        </div>
      </section>

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