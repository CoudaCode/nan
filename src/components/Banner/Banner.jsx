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
  const myImages = [imgslid1, imgslid2, imgslid3, imgslid4, imgslid5, imgslid6, imgslid7];
  

  useEffect(() => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");

    let currentIndex = 0;

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }

    function updateSlider() {
      const translateValue = -currentIndex * 100 + "%";
      slider.style.transform = "translateX(" + translateValue + ")";
    }

    setInterval(nextSlide, 5000); // Change slide every 3 seconds



  }, []);

  return (
    <div className="Banner">
      <div className="article">
        <div className="partieBienvenu">
          <div className="bienvenu1">
            <h1> Se Retrouver, Echanger et Discuter avec la Principale Plateforme de Messagerie NaN-SEND </h1>
            <div className="bienvenu2">
              <p>
                Une plateforme de messagerie professionnelle qui unifie la
                communication client pour les organisations à la pointe de la
                technologie et prennent en charge via la messagerie instantanée,
                le chat Web et le courrier électronique.
              </p>
            </div>
          </div>
          <div className="btn-part">
            <button className="bouton">
              <Link to="/inscription">S&apos;inscrire</Link>
            </button>
            <button className="bouton">
              <Link to="/connexion">Se connecter</Link>
            </button>
          </div>
        </div>
        {/* <div className="partieSlid"> */}
        <div className="partieBienvenu">
          {/* <div className="slider">
            <div className="moncadreslid">
              {myImages.map((item, indice) => <div key={indice} className={classImage}> <img src={item} style={{width}}/></div>)}
            </div>
          </div> */}
          <div className="slider-container">
          <div className="slider">
            {myImages.map((item, indice) => <div key={indice} className={'slide'}> <img src={item}/></div>)}   
            {/* <div className="slide">
              <img src="image1.jpg" alt="Image 1"/>
            </div>
            <div className="slide">
              <img src="image2.jpg" alt="Image 2"/>
            </div>
            <div className="slide">
              <img src="image3.jpg" alt="Image 3"/>
            </div> */}
          </div>
        </div>
          
        </div>
      </div>

      
      <div className="titleCentral">
      {/* <div className="article"> */}
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
