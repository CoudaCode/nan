import React from "react";
import img1 from "./../../assets/images/Message.png";
import img2 from "./../../assets/images/callCenter.jpeg";
import imgauto from "../../assets/images/imag_automa.png"
import imgauto2 from "../../assets/images/imag_automa2.jpg"
import "./Automatisation.css";
function Automatisation() {
  return (
    <div className="Automatisation">
        <div className="supervisor">
          <div className="separe">
            <div className="carre">
              <img src={imgauto2} alt="" />
            </div>
            <div className="carre">
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="tire">
            <h1>
              Tableau de bord <span className="barre">du superviseur</span>
            </h1>
            <br />
            <div className="loi">
              <div className="par">
                <p>
                  Un tableau de bord quotidien permettant aux managers de
                  détecter en un coup d'œil les anomalies des conversations ou
                  des agents. Identifiez les conversations en attente ou non
                  résolues depuis trop longtemps et surveillez les performances
                  et la charge de travail des agents en temps réel.
                </p>
              </div>
            </div>
          </div>

          <div className="separe">
            <div className="carre">
              <img src={imgauto} alt="" />
            </div>
            <div className="carre">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Automatisation;
