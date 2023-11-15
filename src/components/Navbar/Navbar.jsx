import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  // const [isMenuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  // const handleScroll = (nav) => {
  //   return () => {
  //     if (window.pageYOffset > 0) {
  //       nav.classList.add("scrolled");
  //     } else {
  //       nav.classList.remove("scrolled");
  //     }
  //   };
  // };

  // useEffect(() => {
  //   const nav = document.querySelector(".maNav");

  //   window.addEventListener("scroll", handleScroll(nav));
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll(nav));
  //   };
  // }, []);

  return (
    <header className="main-header">
      {/* <div className="container-fluid maNav">
        <nav className="navbar navbar-expand-lg main-nav">
          <a href="#" className="logo">
            <span className="log-msg">{<BiSolidMessageRoundedDots />}</span>
            <span className="log1">NaN-</span>
            <span className="log2">SEND</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="mainMenu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation">
            <span className="icon-bar icon-bar-1"></span>
            <span className="icon-bar icon-bar-2"></span>
            <span className="icon-bar icon-bar-3"></span>
          </button>
          <div
            className={`collapse justify-content-center navbar-collapse ${
              isMenuOpen ? "show" : ""
            }`}
            id="mainMenu">
           <ul className="navbar-nav ms-5 text-uppercase f1">
              <li>
                <Link to="#home" className="active active-first meslinks">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="#about" className="meslinks">À propos</Link>
              </li>
              <li>
                <Link to="#service" className="meslinks">Services</Link>
              </li>
              <li>
                <Link to="#service" className="meslinks">Prix</Link>
              </li>
              <li>
                <Link to="#project" className="meslinks">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
    </header>
  );
}

export default Navbar;
