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
          <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input
                class="peer sr-only"
                id="option1"
                type="radio"
                tabindex="-1"
                name="option"
              />

              <label
                for="option1"
                class="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabindex="0"
              >
                <span class="text-sm"><img src={whatsap} alt="" /></span>
              </label>
            </div>

            <div>
              <input
                class="peer sr-only"
                id="option2"
                type="radio"
                tabindex="-1"
                name="option"
              />

              <label
                for="option2"
                class="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabindex="0"
              >
                <span class="text-sm"><img src={Mail} alt="" /></span>
              </label>
            </div>

            <div>
              <input
                class="peer sr-only"
                id="option3"
                type="radio"
                tabindex="-1"
                name="option"
              />

              <label
                for="option3"
                class="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabindex="0"
              >
                <span class="text-sm"><img src={sms} alt="" /></span>
              </label>
            </div>
          </div>
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
