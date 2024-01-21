// import React from "react";
import "./Service.css"
import { BiTimeFive, BiSearchAlt2 } from 'react-icons/bi';
import {BsPeople} from 'react-icons/bs'
import {TiContacts, TiMessages} from 'react-icons/ti';
import {GrWaypoint} from 'react-icons/gr'

function Service() {
    return (
        <div className="service">
            <h2 className="title">* Nos Services...</h2> 
            <p>Nous sommes une entreprise qui vous propose des services de qualité pour votre entreprise ou votre particulier.</p> 
            <div className="myGrid">
                <div className="grid">
                    <div className="service-icon">
                       <span className="icons"><BsPeople /></span>
                    </div>
                    <h3>Groupes de discussion </h3>
                    <p> Autoriser la création de groupes pour communiquer avec plusieurs personnes en même temps.</p>
                </div>
                <div className="grid">
                    <div className="service-icon">
                        <span className="icons"><BiTimeFive /></span>
                    </div>
                    <h3>Communication en temps réel</h3>
                    <p>Permettre aux utilisateurs d&apos;échanger des messages instantanés pour une communication rapide.</p>
                </div>
                <div className="grid">
                    <div className="service-icon">
                    <span className="icons"><TiContacts /></span>
                    </div>
                    <h3>Gestion des contacts</h3>
                    <p>Les utilisateurs peuvent organiser leur liste de contacts et créer des groupes pour une meilleure gestion.</p>
                </div>
                <div className="grid">
                    <div className="service-icon">
                    <span className="icons"><BiSearchAlt2 /></span>
                    </div>
                    <h3>Fonctions de recherche</h3>
                    <p>Les plateforme de messagerie offrent des outils de recherche pour trouver rapidement d&apos;anciens messages ou des contacts.</p>
                </div>
                <div className="grid">
                    <div className="service-icon">
                    <span className="icons"><TiMessages /></span>
                    </div>
                    <h3>Stockage de messages</h3>
                    <p>La plateforme peut conserver l&apos;historique des messages pour que les utilisateurs puissent consulter d&apos;anciennes conversations.</p>
                </div>
                <div className="grid">
                    <div className="service-icon">
                    <span className="icons"><GrWaypoint /></span>
                    </div>
                    <h3>Canal de diffusion</h3>
                    <p>L&apos;utilisateur a la possibilité de choisir le canal par lequel il veut transmettre son message notamment whatsapp, email et sms. </p>
                </div>
            </div>   
        </div>
    )
}
export default Service;