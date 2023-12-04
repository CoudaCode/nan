
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./Profile.css"
import { CgProfile } from "react-icons/cg";

import img from "../../assets/images/img-profile.jpg"
import poinVert from "../../assets/images/pointVerts.png"
function Profile() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/*<Topbar />*/}
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
        


        <div className="profile">
  <div className="cardsPro">
    <div className="cardsDiviso">
    <CgProfile className="icon"/>
    <p>Mon Profil</p>
    </div>
  </div>

  <div className="cardsProie">
    <div className="profileglobal">
      
     <div className="profilImage">
<img src={img} alt="" />
      </div>

<div className="profilePremier">
  <div className="profileSepo">
    <div className="sepa">
  <label htmlFor="">Nom</label>
  <input type="text" placeholder="KOUAME"/>
  </div>
  <div className="sepa">
  <label htmlFor="">Prenom</label>
  <input type="text" placeholder="Franck Olivier"/>
  </div>
  </div>
<br />
  <div className="profileSepo">
    <div className="sepa">
  <label htmlFor="">Téléphone (10 chiffres)</label>
  <input type="text" placeholder="0789105791"/>
  </div>
  <div className="sepa">
  <label htmlFor="">Pays</label>
  <input type="text" placeholder="Cote D'ivoire"/>
  </div>
  </div>

  <div className="sepaPeofil">
  <label htmlFor="">E-mail</label>
  <input type="text" placeholder="kouamefranckolivier45@gmail.com"/>
  </div>

  
</div>
    </div>

    <div className="profileButton">
      <button>Mettre a jour</button>
    </div>

  </div>
</div>




      {/*  <div className="profile">


  <div className="cardsPofit">
<div className="profileEspace">
<div className="profilImage">
<img src={img} alt="" />
</div>
<div className="profilOffline">
<div className="pointVer">
  <img src={poinVert} alt="" />
</div>
<p>En Ligne</p>
</div>
</div>
<div className="profileTitle">
  <div className="proTitre">
  <h2>Informations Utilisateurs</h2>
  </div>
  <div className="profilInfos">

    <div className="profilDetail">
      <h4>Nom:</h4>
      <input type="text" placeholder="KOUAME"/>
    </div>
<br />
    <div className="profilDetail">
      <h4>Prenoms:</h4>
      <input type="text" placeholder="KOUAME KONAN FRANCK OLIVIER"/>
    </div>

<br />
    <div className="profilDetail">
      <h4>Telephone:</h4>
      <input type="text" placeholder="0789105791"/>
    </div>
<br />
    <div className="profilDetail">
      <h4>E-mail:</h4>
      <input type="text" placeholder="kouamefranckolivier45@gmail.com"/>
    </div>



  </div>
  <div className="modification">
    <button className="myButtom">Modifier Profile</button>
  </div>
</div>

  </div>

</div>*/}


          </div>
      </div>
    </div>
    
  );
}

export default Profile;