import React, { useState } from "react";
import "./Footer.css";
import logo from "/LOGO.png";

export default function Footer() {
  const [activeForm, setActiveForm] = useState("don");

  return (
    <div className="footer-section">
      <section className="story-section">
        <h2>Histoire Octobre rose</h2>
        <p>
          Depuis plus de 30 ans, Octobre Rose sensibilise à la lutte contre le
          cancer du sein. Des événements sont organisés partout en France pour
          encourager le dépistage précoce et soutenir la recherche.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-text">
            <h2>Ensemble, faisons la différence</h2>
            <p>
              Rejoignez notre mission pour sensibiliser, soutenir et sauver des
              vies. Chaque action compte.
            </p>

            <div className="contact-buttons">
              <button
                className={`btn-ct ${activeForm === "don" ? "active" : ""}`}
                onClick={() => setActiveForm("don")}
              >
                Dons
              </button>
              <button
                className={`btn-ct ${activeForm === "rejoindre" ? "active" : ""}`}
                onClick={() => setActiveForm("rejoindre")}
              >
                Rejoins-nous
              </button>
            </div>
          </div>
        </div>

        {activeForm === "don" && (
          <div className="contact-form">
            <h3>Faire un don</h3>
            <p>Chaque contribution aide la recherche et le soutien des malades.</p>
            <form>
              <input type="number" placeholder="Montant (€)" required />
              <input type="text" placeholder="Nom" required />
              <input type="email" placeholder="Adresse Mail" required />
              <button className="join" type="submit">
                Faire un don
              </button>
            </form>
          </div>
        )}

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

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="RoseMap Logo" />
            <h3>RoseMap</h3>
            <p>
              Ensemble, soutenons la recherche et la prévention contre le cancer
              du sein.
            </p>
          </div>

          <div className="footer-links">
            <h4>Liens rapides</h4>
            <ul>
              <li>Accueil</li>
              <li>Nos événements</li>
              <li>Faire un don</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Suivez-nous</h4>
            <div className="icons">
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
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
