// DonPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonPage.css';

export default function DonPage() {
    const navigate = useNavigate(); 
    
    // Fonction pour fermer la modale et revenir à la page d'accueil (/)
    const handleClose = () => {
        navigate('/'); 
    };
    
    const [amount, setAmount] = useState(50);
    const [frequency, setFrequency] = useState('unique');
    const [step, setStep] = useState(1); 
    const fixedAmounts = [20, 50, 100, 200];
    const estimatedTax = amount * 0.66;
    const finalCost = amount - estimatedTax;

    const handleAmountChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setAmount(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (amount > 0 && step < 3) {
            setStep(step + 1);
        } else if (step === 3) {
            alert("Paiement simulé réussi ! Merci pour votre don.");
            handleClose(); 
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <h3 className="form-title">1. Choisissez votre montant et fréquence</h3>
                        
                        <div className="frequency-options">
                            <button
                                type="button"
                                className={`freq-btn ${frequency === 'unique' ? 'active-inverted' : ''}`}
                                onClick={() => setFrequency('unique')}
                            >
                                Donner une fois
                            </button>
                            <button
                                type="button"
                                className={`freq-btn ${frequency === 'mensuel' ? 'active-inverted' : ''}`}
                                onClick={() => setFrequency('mensuel')}
                            >
                                Donner tous les mois <span role="img" aria-label="cœur">❤️</span>
                            </button>
                        </div>
                        
                        <div className="amount-options">
                            {fixedAmounts.map(a => (
                                <button
                                    key={a}
                                    type="button"
                                    className={`amount-btn ${amount === a ? 'active-inverted' : ''}`}
                                    onClick={() => setAmount(a)}
                                >
                                    {a} €
                                </button>
                            ))}
                            <input
                                type="number"
                                placeholder="Autre Montant (€)"
                                value={fixedAmounts.includes(amount) ? '' : amount}
                                onChange={handleAmountChange}
                                className="custom-amount-input"
                            />
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <h3 className="form-title">2. Vos informations</h3>
                        <div className="input-group">
                            <label htmlFor="name">Nom Complet</label>
                            <input id="name" type="text" placeholder="John Doe" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Adresse Email</label>
                            <input id="email" type="email" placeholder="john.doe@example.com" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="address">Adresse Postale (pour reçu fiscal)</label>
                            <input id="address" type="text" placeholder="10 rue des roses" required />
                        </div>
                        <div className="input-group split-inputs">
                            <div className="input-subgroup">
                                <label htmlFor="zip">Code Postal</label>
                                <input id="zip" type="text" placeholder="75000" required />
                            </div>
                            <div className="input-subgroup">
                                <label htmlFor="city">Ville</label>
                                <input id="city" type="text" placeholder="Paris" required />
                            </div>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <h3 className="form-title">3. Paiement Sécurisé</h3>
                        
                        {/* Champs de carte de crédit */}
                        <div className="input-group">
                            <label htmlFor="card-number">Numéro de Carte</label>
                            <input id="card-number" type="text" placeholder="XXXX XXXX XXXX XXXX" required maxLength="16" />
                        </div>
                        <div className="input-group split-inputs">
                            <div className="input-subgroup">
                                <label htmlFor="expiry">Date d'Expiration</label>
                                <input id="expiry" type="text" placeholder="MM/AA" required maxLength="5" />
                            </div>
                            <div className="input-subgroup">
                                <label htmlFor="cvv">CVV</label>
                                <input id="cvv" type="text" placeholder="123" required maxLength="3" />
                            </div>
                        </div>
                        
                        {/* 🛑 Résumé déplacé ici pour confirmation finale 🛑 */}
                        <div className="payment-summary">
                            <p>Vous allez donner :</p>
                            <p className="summary-amount">
                                **{amount} €** ({frequency === 'mensuel' ? 'Par Mois' : 'Une seule fois'})
                            </p>
                        </div>

                        <div className="security-info">
                            <span role="img" aria-label="cadenas">🔒</span> Paiement 100% sécurisé via Stripe/Paypal.
                        </div>
                    </>
                );
            default:
                return null;
        }
    };
    

    return (
        <div className="donation-modal-overlay"> 
            <div className="donation-page-container">
                
                <button className="modal-close-btn" onClick={handleClose}>
                    × 
                </button>
                
                <header className="donation-header">
                    <button className="btn-return-home" onClick={handleClose}>
                        <span role="img" aria-label="flèche">◀</span> Retour à l'Accueil
                    </button>
                    <h1>Soutenir la Recherche contre le Cancer du Sein</h1>
                    <p>Chaque don est un pas de plus vers la guérison et le soutien des patientes.</p>
                </header>

                <div className="donation-grid">
                    
                    <div className="donation-form-card">
                        <form onSubmit={handleFormSubmit}>
                            <div className="step-indicator">
                                <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Montant</div>
                                <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Infos</div>
                                <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Paiement</div>
                            </div>
                            
                            <div className="form-content">
                                {renderStepContent()}
                            </div>

                            <div className="form-actions">
                                {step > 1 && (
                                    <button type="button" className="btn-back" onClick={() => setStep(step - 1)}>
                                        <span role="img" aria-label="flèche">◀</span> Retour
                                    </button>
                                )}
                                <button type="submit" className="btn-next">
                                    {step === 1 && "Continuer"}
                                    {step === 2 && "Passer au Paiement"}
                                    {step === 3 && `Je donne ${amount} €`}
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    {/* Cette carte reste à droite du formulaire */}
                    <div className="donation-summary-card">
                        <h2>Votre Impact</h2>
                        <div className="impact-box">
                            <p className="impact-label">Montant du Don ({frequency === 'mensuel' ? 'mensuel' : 'unique'}):</p>
                            <p className="impact-value">{amount} €</p>
                        </div>
                        
                        <div className="impact-box tax-deduction">
                            <p className="impact-label">Déduction Fiscale Estimée (66%) :</p>
                            <p className="impact-value red-text">-{estimatedTax.toFixed(2)} €</p>
                        </div>

                        <div className="impact-box total-cost">
                            <p className="impact-label">Coût réel après impôts :</p>
                            {/* Le style 'final-cost' assure le rose et le gros texte */}
                            <p className="impact-value final-cost">{finalCost.toFixed(2)} €</p>
                            <p className="tax-note">Un reçu fiscal vous sera envoyé par email.</p>
                        </div>
                        
                        <div className="trust-badges">
                            <span role="img" aria-label="cadenas">🔒</span> Transaction Sécurisée
                            <span role="img" aria-label="ruban">🎗️</span> Organisation Reconnue d'Utilité Publique
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}