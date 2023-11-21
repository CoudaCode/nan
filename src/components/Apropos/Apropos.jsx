import React from "react";
import "./Apropos.css";
import { Link } from "react-router-dom";

import canalDiff1 from "./../../assets/images/canalDiff1.jpg";
import statistique from "./../../assets/images/statistiq.jpg";
import msgillimit from "./../../assets/images/msgillimit.jpg";
import msgGroupe2 from "./../../assets/images/msgGroupé2.jpg";
import principaleimg from "./../../assets/images/message.jpg";

function Apropos() {
    return(
        <div className="apropos">
            <h2 className="apropos-title">* A propos de nous ...</h2>
            <h3>
            Une plateforme de messagerie unique pour l’envoie de vos messages{" "}
            <br />
            groupés, entre entreprises ou organisations.
            </h3>
            <div className="ligne-cardre">
                <div className="ligne-cardre1">
                    <div className="cardre-photo">
                    <img src={msgGroupe2} alt="" />
                    </div>
                    <div className="cardre-descrip">
                    <h3>MESSAGE GROUPE</h3>
                    <p>
                        Avec NAN-SEND vous pouvez envoyer des messages à un groupe de
                        personnes en même temps sans avoir à écrire plusieurs fois le message
                    </p>
                    </div>
                    <button>
                    <Link to="/login">Voir plus</Link> 
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                    </button>
                </div>
                <div className="ligne-cardre1">
                    <div className="cardre-photo">
                    <img src={statistique} alt="" />
                    </div>
                    <div className="cardre-descrip">
                    <h3>STATISTIQUE D’ENVOI</h3>
                    <p>
                        Avec NAN-SEND vous pouvez voir les statistiques de tout vos
                        messages envoyés comme reçu, quelque soit le canal de
                        communication utilisé.
                    </p>
                    </div>
                    <button>
                   <Link to="/login">Voir plus</Link> 
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                    </button>
                </div>
                <div className="ligne-cardre1">
                    <div className="cardre-photo">
                    <img src={canalDiff1} alt="" />
                    </div>
                    <div className="cardre-descrip">
                    <h3>CANAL DE DIFFUSION</h3>
                    <p>
                        Avec NAN-SEND choisissez le canal de diffusion qui vous
                        est favorable pour faciliter vos échanges et discussions,
                        notamment WhatsApp, Message ou par Email.
                    </p>
                    </div>
                    <button>
                    <Link to="/login">Voir plus</Link> 
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                    </button>
                
                </div>
                <div className="ligne-cardre1">
                    <div className="cardre-photo">
                    <img src={msgillimit} alt="" />
                    </div>
                    <div className="cardre-descrip">
                    <h3>MESSAGE ILLIMITE</h3>
                    <p>
                        Avec NAN-SEND vous pouvez envoie des messages a un nombre
                        illimité de personnes ou d’entreprise, en toute facilité et
                        sécurité via tous nos canaux de diffusion.
                    </p>
                    </div>
                    <button>
                    <Link to="/login">Voir plus</Link> 
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                    </button>
                    
                </div>
            </div>
            
        </div>
    )
}
export default Apropos;