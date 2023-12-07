
import Navbar from "./../../components/Navbar/Navbar";
import Banner from "./../../components/Banner/Banner";
import Prix from "./../../components/Prix/Prix";
import Footer from "./../../components/Footer/Footer";
import Map from "./../../components/Map/Map";
import SendMessage from "./../../components/SendMessage/SendMessage";
import Diffusion from "./../../components/Diffusion/Diffusion";
import Automatisation from "./../../components/Automatisation/Automatisation";
import "./Acceuil.css"
import Apropos from "../../components/Apropos/Apropos";
import Service from "../../components/Service/Service";
import SectionViolet from "../../components/Section_Violet/Section_Violet";
function Acceuil() {
  return (
    <>
      <Navbar />
      <Banner />
      <Apropos/>
      <SendMessage />
      <Service/>
      <Automatisation />
      <Prix />
      <SectionViolet />
      <Map />
      <Footer />
    </>
  );
}

export default Acceuil;
