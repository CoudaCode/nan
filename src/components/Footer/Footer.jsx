import imgLogo from "./../../assets/images/log.png";
import {
  FaCheck,
  FaFacebook,
  FaLinkedinIn,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <footer className="text-center">
          <div className="container mx-auto">
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-1/2">
                <h1 className="text-3xl font-semibold">Prêt à commencer?</h1>
                <p>
                  Libérez la puissance de NaN-Send pour faciliter <br /> vos
                  conversation avec vos clients.
                </p>
              </div>
              <div className="lg:w-1/2 lg:flex lg:justify-center lg:space-x-4 mt-4">
                <div className="text-center lg:text-left">
                  <p className="mb-2">
                    <FaCheck />
                    14 Jours d’essais
                  </p>
                  <p className="mb-2">
                    <FaCheck />
                    Pas de carte de crédit
                  </p>
                  <p>
                    <FaCheck />
                    Annuler à tout moment
                  </p>
                  <button className="btn-card">Abonnement</button>
                </div>
                <hr className="lg:hidden my-3 w-full border-t border-gray-300" />
                <div className="text-center lg:text-left mt-4 lg:mt-0">
                  <p className="mb-2">
                    <FaCheck />
                    Chattez plus facilement
                  </p>
                  <p className="mb-2">
                    <FaCheck /> Avantages de NaN-Send
                  </p>
                  <p>
                    <FaCheck />
                    Annuler à tout moment
                  </p>
                  <button className="btn-card">Réservation</button>
                </div>
              </div>
            </div>
            <hr className="my-3 border-t border-gray-300" />

            <div className="lg:flex lg:justify-between">
              <div className="lg:w-1/2 lg:flex lg:items-center">
                <h3 className="text-3xl font-semibold">
                  NaN-
                  <span className=" font-bold text-3xl">SEND</span>
                </h3>
                <img src={imgLogo} alt="Logo" className="w-20 ml-4" />
              </div>
              <hr className="lg:hidden my-3 w-full border-t border-gray-300" />
              <div className="lg:w-1/2 lg:flex lg:justify-between">
                <div className="lg:w-1/4">
                  <h5 className="mb-2">Apropos</h5>
                  <p>
                    <a href="#" className="text-white">
                      Blog
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Carrière
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      À propos de nous
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Feuille de route Affiliés
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Programme de partenariat
                    </a>
                  </p>
                </div>
                <div className="lg:w-1/4">
                  <h5 className="mb-2">Support</h5>
                  <p>
                    <a href="#" className="text-white">
                      Accueil
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      A propos
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Services
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Contacts
                    </a>
                  </p>
                </div>
                <div className="lg:w-1/4">
                  <h5 className="mb-2">WhatsApp Guides</h5>
                  <p>
                    <a href="#" className="text-white">
                      Entreprise WhatsApp
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      API WhatsApp
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Tarifs API WhatsApp
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      WhatsApp plusieurs utilisateurs
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      WhatsApp CRM
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Diffusion WhatsApp
                    </a>
                  </p>
                </div>
                <div className="lg:w-1/4">
                  <h5 className="mb-2">Bulletin</h5>
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-700 text-white p-2 rounded"
                  />
                  <button className="bg-blue-600 text-white p-2 rounded mt-2">
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-3 border-t border-gray-300" />

            <div className="py-3">
              <div className="lg:flex lg:justify-between">
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="p-3">
                    {" "}
                    NaN-
                    <span className="text-#6870e0">SEND</span>
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-right mt-4 lg:mt-0 float-right  Icon">
                  <a className="mr-3 " role="button">
                    <FaLinkedinIn className="animate-bounce w-6 h-6" />
                  </a>

                  <a className="mr-3" role="button">
                    <FaTelegram className="animate-bounce w-6 h-6 " />
                  </a>
                  <a className="mr-3" role="button">
                    <FaYoutube className="animate-bounce w-6 h-6 " />
                  </a>
                  <a className="mr-3" role="button">
                    <FaTiktok className="animate-bounce w-6 h-6 " />
                  </a>
                  <a className="mr-3" role="button">
                    <FaWhatsapp className="animate-bounce w-6 h-6 " />
                  </a>
                  <a role="button">
                    <FaFacebook className="animate-bounce w-6 h-6 " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
