import React from "react";
import { useEffect, useState } from "react";
import imagEcobanck from "./../../assets/images/ecobank.jpeg";
import imagOrange from "./../../assets/images/Orange-Couleur.jpeg";
import imagMtn from "./../../assets/images/MTN-Logo.png";
import imagMoov from "./../../assets/images/moov-africa.jpeg";
import imagAtlantic from "./../../assets/images/atlantic.png";
import imagCIE from "./../../assets/images/Logo_CIE.jpeg";
import imagNaN from "./../../assets/images/NaN.png";
import imagUba from "./../../assets/images/uba.jpeg";
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
  const [slidIndex, setSlidIndex] = useState(0);

  useEffect(() => {
    const fonctionSlid = () => {
      const slid = document.querySelectorAll(".slid");
      for (let i = 0; i < slid.length; i++) {
        slid[i].style.display = "none";
      }

      setSlidIndex((slidIndex) => {
        let nextIndex = slidIndex + 1;
        if (nextIndex >= slid.length) {
          nextIndex = 0;
        }
        slid[nextIndex].style.display = "block";
        return nextIndex;
      });
    };

    const intervalId = setInterval(fonctionSlid, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="Banner">
      <div className="article">
        <div className="partieBienvenu">
          <div className="bienvenu1">
            <h1>
              Se Retrouver, Echanger et Discuter avec la Principale Plateforme
              de Messagerie NaN-SEND
            </h1>
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
            <button className="bouton1">
              <Link to="/inscription">S'inscrire</Link>
            </button>
            <button className="bouton2">
              <Link to="/connexion">Se connecter</Link>
            </button>
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
        <h3>Confiance Par Plusieurs Entreprises</h3>
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
    </div>
  );
}

export default Banner;
