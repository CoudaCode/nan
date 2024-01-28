/*import imgLogo from "./../../assets/images/log.png";*/
import {
  FaCheck,
  /*FaFacebook,*/
  /*FaLinkedinIn,*/
  /*FaTelegram,*/
  /*FaTiktok,*/
  /*FaWhatsapp,*/
  /*FaYoutube,*/
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      
      <div className="container">
        <div className="comment">
        <h1 className="text-3xl font-semibold">Prêt à commencer?</h1>
        <p>
          Libérez la puissance de NaN-Send pour faciliter <br /> vos
          conversations avec vos clients.
       </p>
        </div>
          <div className="cadre2">
          <div className="descrip">
              <div className="flex">
              <p>
                <FaCheck /> 14 Jours d’essais
              </p>
              </div> 
              <div className="flex">
              <p>
                <FaCheck /> Pas de carte de crédit
              </p>
              </div>
              <div className="flex">
              <p>
                <FaCheck /> Annuler à tout moment
              </p>
              </div>
              
              <button className="btn-card">Abonnement</button>
            </div>
          </div>
          <div  className="cadre2">
          <div className="descrip">
              <div className="flex">
              <p>
                <FaCheck /> Experience a personalized demo with us
              </p>
              </div> 
              <div className="flex">
              <p>
                <FaCheck /> Discover why 10,000+ businesses choose us
              </p>
              </div>
              
              <button className="btn-card">Réservation</button>
            </div>
          </div>
   
        </div>
      
        <footer>
            <div className="footerContenair">
            <div className="socialIcons">
                <a href=""><i className="fa-regular fa-envelope"></i></a>
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <div className="footerNav">
            <ul>
                <li> <a href="#">Accueil</a></li>
                <li> <a href="#">A propos</a></li>
                <li> <a href="#">Services</a></li>
                <li> <a href="#">Prix</a></li>
                <li> <a href="#">Contact</a></li>
            </ul>
            </div>
           
            <div className="footerBottom">
                <p>Copyright <span className="span1">NaN-Send</span> &copy;2023 By <span className="span2">Naniens .</span></p>
            </div>
        </div>
        </footer>

    </div>
    
  );
}

export default Footer;