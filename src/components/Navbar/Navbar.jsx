import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/images/Nan-Send.png";

function Navbar() {

  const handleScroll = (nav) => {
        console.log("test", nav.classList);
        return () => {
          if (window.pageYOffset > 0) {
            nav.classList.add("scrolled");
          } else {
            nav.classList.remove("scrolled");
          }
        };
      };
    
      useEffect(() => {
        const nav = document.querySelector(".maNav");
    
        window.addEventListener("scroll", handleScroll(nav));
        return () => {
          window.removeEventListener("scroll", handleScroll(nav));
        };
      }, []);

  const nav = useRef(null);
  const toglle = (event) => {
    const close = document.getElementById("close");
    close.style.display = "block";
    close.addEventListener("click", (ev) => {  
      nav.current.classList.remove("active");
      event.target.style.display = "block";
      ev.target.style.display = "none";
    });

    event.target.style.display = "none";

    nav.current.classList.toggle("active");
  };

  return (
    <header className="maNav">
      <a href="#" className="logo">
        <img src={logo} />
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar" ref={nav}>
        <li>
          <Link href="#" className="Acceuil-active">
            Acceuil
          </Link>
        </li>
        <li>
          <Link to="">A propos</Link>
        </li>
        <li>
          <Link to="">Nos services</Link>
        </li>
        <li>
          <Link to="">Nos Prix</Link>
        </li>
        <li>
          <Link to="">Contacts</Link>
        </li>
      </ul>
      <span
        // onClick={() => {
        //   toglle();
        // }}
        onClick={toglle}
        className="material-symbols-outlined"
        id="burger"
      >
        lists
      </span>
      <span className="material-symbols-outlined" id="close">
        close
      </span>
    </header>
  );
}

export default Navbar;


// import { BiSolidMessageRoundedDots } from "react-icons/bi";
// 
// import { Link } from "react-router-dom";
//
// function Navbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const handleScroll = (nav) => {
//     console.log("test", nav.classList);
//     return () => {
//       if (window.pageYOffset > 0) {
//         nav.classList.add("scrolled");
//       } else {
//         nav.classList.remove("scrolled");
//       }
//     };
//   };

//   useEffect(() => {
//     const nav = document.querySelector(".maNav");

//     window.addEventListener("scroll", handleScroll(nav));
//     return () => {
//       window.removeEventListener("scroll", handleScroll(nav));
//     };
//   }, []);

//   return (
//     <header className="main-header">
//       <div className="container-fluid maNav">
//         <nav className="navbar navbar-expand-lg main-nav">
//           <div className="card-logo">
//             <a href="#" className="logo">
//               <img src={logo} alt="notreLogo" />
//             </a>
//           </div>
          
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={toggleMenu}
//             aria-controls="mainMenu"
//             aria-expanded={isMenuOpen}
//             aria-label="Toggle navigation">
//             <span className="icon-bar icon-bar-1"></span>
//             <span className="icon-bar icon-bar-2"></span>
//             <span className="icon-bar icon-bar-3"></span>
//           </button>
//           <div
//             className={`collapse justify-content-center navbar-collapse ${
//               isMenuOpen ? "show" : ""
//             }`}
//             id="mainMenu">
//            <ul className="navbar-nav ms-5 text-uppercase f1">
//               <li>
//                 <Link to="#home" className="active active-first meslinks">
//                   Accueil
//                 </Link>
//               </li>
//               <li>
//                 <Link to="#about" className="meslinks">À propos</Link>
//               </li>
//               <li>
//                 <Link to="#service" className="meslinks">Services</Link>
//               </li>
//               <li>
//                 <Link to="#service" className="meslinks">Prix</Link>
//               </li>
//               <li>
//                 <Link to="#project" className="meslinks">Contact</Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

