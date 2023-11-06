import React from "react";
import { useEffect, useState } from "react";
import imagEcobanck from "./../../assets/images/ecobank.jpeg";
import imagOrange from "./../../assets/images/Orange-Couleur.jpeg";
import imagMtn from "./../../assets/images/MTN-Logo.png";
import imagMoov from "./../../assets/images/moov-africa.jpeg";
import imagAtlantic from "./../../assets/images/atlantic.png";
import imagCIE from "./../../assets/images/Logo_CIE.jpeg";
import imagNaN from "./../../assets/images/NaN.png";
import { GrValidate } from "react-icons/gr";
import imagUba from "./../../assets/images/uba.jpeg";
import canalDiff1 from "./../../assets/images/canalDiff1.jpg";
import statistique from "./../../assets/images/statistiq.jpg";
import msgillimit from "./../../assets/images/msgillimit.jpg";
import msgGroupe2 from "./../../assets/images/msgGroupé2.jpg";
import principaleimg from "./../../assets/images/message.jpg";
import { Link } from "react-router-dom";
import imgslid1 from "./../../assets/images/slid1.jpg";
import imgslid2 from "./../../assets/images/slid2.jpg";
import imgslid3 from "./../../assets/images/slid3.jpg";
import imgslid4 from "./../../assets/images/slid4.jpg";
import imgslid5 from "./../../assets/images/slid5.jpg";
import imgslid6 from "./../../assets/images/slid6.jpg";
import imgslid7 from "./../../assets/images/slid7.jpg";
import "./Banner.css";

function Banner() {
  // const [slidIndex, setSlidIndex] = useState(0);

  // useEffect(() => {
  //   const fonctionSlid = () => {
  //     const slid = document.querySelectorAll(".slid");
  //     for (let i = 0; i < slid.length; i++) {
  //       slid[i].style.display = "none";
  //     }

  //     setSlidIndex((slidIndex) => {
  //       let nextIndex = slidIndex + 1;
  //       if (nextIndex >= slid.length) {
  //         nextIndex = 0;
  //       }
  //       slid[nextIndex].style.display = "block";
  //       return nextIndex;
  //     });
  //   };

  //   const intervalId = setInterval(fonctionSlid, 2000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  return (
    <div className="Banner">
      {/* <div className="article">
        <div className="partieBienvenu">
          <div className="bienvenu1">
            <h2>
              Se retrouver, échanger et discuter avec la principale plateforme
              de messagerie <span className="spanNan">NaN-SEND</span>
            </h2>
            <div className="bienvenu2">
              <h4>
                Une plateforme de messagerie professionnelle qui unifie la
                communication client pour les organisations à la pointe de la
                technologie et prennent en charge via la messagerie instantanée,
                le chat Web et le courrier électronique.
              </h4>
            </div>
          </div>
          <div className="btn-part">
            <button className="button type1">
              <span className="btn-txt">
                <Link to="/inscription" className="btnblanche">
                  S'inscrire gratuitement
                </Link>
              </span>
            </button>
            <button className="button2">
              <Link to="/connexion" className="btncouleur">
                Se Connecter
              </Link>
            </button>
          </div>
          <div className="noterBien">
            <p>Pas de carte de crédit nécessaire</p>
            <p>Sécurité garantie</p>
          </div>
        </div>
        <div className="partieSlid">
          <div className="moncadreslid">
            <div className="slid">
              {" "}
              <img src={imgslid1} alt="" width="100%" height="70%" />
            </div>
            <div className="slid">
              {" "}
              <img src={imgslid2} alt="" width="100%" height="70%" />
            </div>
            <div className="slid">
              {" "}
              <img src={imgslid3} alt="" width="100%" height="70%" />
            </div>
            <div className="slid">
              {" "}
              <img src={imgslid7} alt="" width="100%" height="70%" />
            </div>
            <div className="slid">
              {" "}
              <img src={imgslid5} alt="" width="100%" height="70%" />
            </div>
            <div className="slid">
              {" "}
              <img src={imgslid6} alt="" width="100%" height="70%" />
            </div>
          </div>
        </div>
      </div>
      <div className="titleCentral">
        <h3>CONFIANCE PAR +10 000 ENTREPRISES</h3>
        <div className="logo-patenaire">
          <img src={imagEcobanck} alt="" />
          <img src={imagOrange} alt="" />
          <img src={imagMtn} alt="" />
          <img src={imagMoov} alt="" />
          <img src={imagAtlantic} alt="" />
          <img src={imagCIE} alt="" />
          <img src={imagNaN} alt="" />
          <img src={imagUba} alt="" />
        </div>
      </div>
      <div className="apropos">
        <h1>
          Une plateforme de messagerie unique pour l’envoie de vos messages{" "}
          <br />
          groupés, entre entreprises ou organisations
        </h1>
        <h3 className="apropos-title">
          Plus besoin de jongler entre les équipes et les plateformes. Un
          ensemble de chaînes, une plateforme.
        </h3>
        <div className="ligne-cardre">
          <div className="ligne-cardre1">
            <div className="cardre-photo">
              <img src={msgGroupe2} alt="" />
            </div>
            <div className="cardre-descrip">
              <h3>MESSAGE GROUPE</h3>
              <h4>
                Avec NAN-SEND vous pouvez envoyer des messages à un groupe de
                personnes sans avoir a ecrire plusieurs fois le message
              </h4>
            </div>
            <button className="cta">
              <div className="links">
                <div className="fleche">
                  <span>
                    {" "}
                    <Link className="lien-voirplus ">Voir plus</Link>
                  </span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <div className="ligne-cardre1">
            <div className="cardre-photo">
              <img src={statistique} alt="" />
            </div>
            <div className="cardre-descrip">
              <h3>STATISTIQUE D’ENVOI</h3>
              <h4>
                Avec NAN-SEND vous pouvez voir les statistiques de tout vos
                messages envoyés comme reçu, quel que soit le canaux de
                communication.
              </h4>
            </div>
            <button className="cta">
              <div className="links">
                <div className="fleche">
                  <span>
                    {" "}
                    <Link className="lien-voirplus ">Voir plus</Link>
                  </span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <div className="ligne-cardre1">
            <div className="cardre-photo">
              <img src={canalDiff1} alt="" />
            </div>
            <div className="cardre-descrip">
              <h3>CANAL DE DIFFUSION</h3>
              <h4>
                Avec NAN-SEND vous pouvez choisir le canal de diffusion qui vous
                est favorables pour faciliter vos échanges et discussion,
                notamment WhatsApp, Message ou par Email.
              </h4>
            </div>
            <button className="cta">
              <div className="links">
                <div className="fleche">
                  <span>
                    {" "}
                    <Link className="lien-voirplus ">Voir plus</Link>
                  </span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <div className="ligne-cardre1">
            <div className="cardre-photo">
              <img src={msgillimit} alt="" />
            </div>
            <div className="cardre-descrip">
              <h3>MESSAGE ILLIMITE</h3>
              <h4>
                Avec NAN-SEND vous pouvez envoie des messages a un nombre
                illimité de personnes ou d’entreprise, en toute facilité et
                sécurité via tous nos canaux de diffusion.
              </h4>
            </div>
            <button className="cta">
              <div className="links">
                <div className="fleche">
                  <span>
                    {" "}
                    <Link className="lien-voirplus ">Voir plus</Link>
                  </span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div> */}
      <Link to={"/dashboard"} className="p-2 bg-violet-700 text-center text-white text-3xl">Vers Dashboard</Link>
    </div>
  );
}

export default Banner;
