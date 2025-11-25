import './Nav.css';

export default function nav() {
    return (
        // Fragment React pour contenir tous les éléments
        <>
            {/* Nav Bar (Élément qui pourrait être dans un composant séparé) */}
            <header className="header">
                <div className="logo"> <img src="LOGO.png"></img></div>
            </header>

            {/* Section Héro */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        {/* Styles en objet JS (camelCase) */}
                        <p style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '5px', color:"white", left : "10rem"}}>Octobre Rose</p>
                        <h1>Tous mobilisés contre le cancer.</h1>
                        <p style={{color : "white"}}> Rejoignez-nous afin de continuer la lutte contre le cancer du sein ! </p>
                        <div className="hero-buttons">
                            <a href="#" className="btn btn-primary">Événements</a>
                            <a href="#" className="btn btn-secondary">Bénévolat</a>
                        </div>
                    </div>
                    
                    <div className="hero-image-container"> 
                        {/* Style en objet JS avec URL */}
                        <div 
                            className="hero-image" 
                            style={{ backgroundImage: "url('photo_course.png')" }}
                        ></div>
                        <div className="impact-box"> 
                            <div className="icon">
                                {/* Utilisez 'className' pour l'icône Font Awesome */}
                                <i className="fa-solid fa-ribbon"></i> 
                            </div>
                            <div className="text">
                                <strong>+ 50 000</strong>
                                <span>Vies impactées</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Statistiques */}
            <section className="container stats-section"> 
                <div className="stat-item">
                    {/* Utilisation de 'className' */}
                    <span className="icon"><i className="fa-solid fa-users"></i></span>
                    <strong>+ 15 000</strong>
                    <span>participants</span>
                </div>
                <div className="stat-item">
                    <span className="icon"><i className="fa-solid fa-box-open"></i></span>
                    <strong>+ 120</strong>
                    <span>Événements</span>
                </div>
                <div className="stat-item">
                    <span className="icon"><i className="fa-solid fa-heart"></i></span>
                    <strong>+ 167 000€</strong>
                    <span>récoltés</span>
                </div>
            </section>
            
            {/* Section Événements */}
            <section className="container events-section">
                <div className="section-header">
                    <h2>Événements à venir</h2>
                </div>
                <div className="event-grid"> 
                    
                    {/* Carte 1 */}
                    <div className="event-card">
                        <div 
                            className="event-card-image" 
                            style={{ backgroundImage: "url('photo_course2.png')" }}
                        ></div>
                        <div className="event-card-content">
                            <h3>Course de la citadelle</h3>
                            <span className="location">Lille, Citadelle</span>
                            <p> Rejoignez-nous, et venez courir pour soutenir le lutte contre le cancer du sein ! </p>
                            <a href="https://challengedurubanrose.fr/lille/" className="btn-register"> Rejoindre maintenant ! </a>
                        </div>
                    </div>
                    
                    {/* Carte 2 */}
                    <div className="event-card">
                        <div 
                            className="event-card-image" 
                            style={{ backgroundImage: "url('photo_yoga.png')" }}
                        ></div>
                        <div className="event-card-content">
                            <h3>Yoga</h3>
                            <span className="location">Orchies</span>
                            <p> Venez vous détendre et assistez au cours de Yoga à profit d'Octobre Rose. </p>
                            <a href="https://www.celinerichou-yoga.fr/cours-yoga-orchies" className="btn-register"> Rejoindre maintenant ! </a>
                        </div>
                    </div>
                    
                    {/* Carte 3 */}
                    <div className="event-card">
                        <div 
                            className="event-card-image" 
                            style={{ backgroundImage: "url('photo_landasienne.jpg')" }}
                        ></div>
                        <div className="event-card-content">
                            <h3> La Landasienne </h3>
                            <span className="location"> Landas </span>
                            <p> Rendez-vous à Landas pour une Landasienne aussi culte que les années précédentes ! </p>
                            <a href="https://www.la-landasienne.com/" className="btn-register"> Rejoindre maintenant ! </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}