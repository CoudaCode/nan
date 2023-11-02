import whatsap from "./../../assets/images/whatsapp.jpeg";
import Mail from "./../../assets/images/Mail.png";
import sms from "./../../assets/images/sms.png";

import "./Verification.css";
function Verification() {
  return (
    <div className="Verification">
      <div className="ensemble">
        <div className="form">
          <div className="code">
            <label htmlFor="name" style={{ color: "#6870e0" }}>
              Créons votre organisation, XXXXXXXXXXXX !
            </label>
            <input
              required=""
              autoComplete="off"
              type="text"
              placeholder="********************"
            />
          </div>

          <div className="input">
            <p>
              <p>Complétez vos coordonnées pour commencer.</p>
              <br />
              <p>Complétez vos coordonnées pour commencer.</p>
            </p>
          </div>

          <div className="cannaux">
            <ul className="lien">
              <li>
                <a href="">
                  <img src={whatsap} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Mail} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={sms} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="container choix">
            <div>
              <input type="checkbox" />
              <label htmlFor="">dd</label>
            </div>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <div className="input">
            <button>Etape suivante →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
