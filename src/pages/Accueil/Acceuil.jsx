
// import Navbar from "./../../components/Navbar/Navbar";
import Banner from "./../../components/Banner/Banner";
import Prix from "./../../components/Prix/Prix";
import Footer from "./../../components/Footer/Footer";
import Map from "./../../components/Map/Map";
import SendMessage from "./../../components/SendMessage/SendMessage";
import Diffusion from "./../../components/Diffusion/Diffusion";
import Automatisation from "./../../components/Automatisation/Automatisation";
import "./Acceuil.css"
function Acceuil() {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <Prix />
      <SendMessage />
      <Diffusion />
      <Automatisation />
      <Map />
      <Footer />
    </>
  );
}

export default Acceuil;
