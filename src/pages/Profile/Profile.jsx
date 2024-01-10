
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./Profile.css"
import { CgProfile } from "react-icons/cg";

import img from "../../assets/images/img-profile.jpg"

function Profile() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/*<Topbar />*/}
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
        


        <div className="profile">
{/*PREMIERE PARTIE*/}
 <div className="profileBar">
<div className="profileImage">
  <img src={img} alt="" />
</div>

<div className="profilName">
  <h3>Franck Olivier KOUAME</h3>
  <p>Developpeur Web</p>
</div>

<div className="profilButton">
  <div className="profilPart">
    <h4>Statuts</h4>
    <div className="profilStatus"></div>
  </div>
  <br />
  <div className="profilPart">
  <h4>Message</h4>
  <div className="profilMessage">
    <p>1</p>
  </div>
  </div>
  <br />
  <div className="profilPart">
  <h4>Contacts</h4>
  <div className="profilMessage">
    <p>1</p>
  </div>
  </div>
</div>
 </div>



 <div className="profileBar2">

<div className="profileTitle">
  <h1>Information Profil</h1>
</div>

<div className="profilePourInput">
  <div className="profilGrandInput">
    <div className="inputUn">
    <label htmlFor="">Nom</label>
    <input type="text" placeholder="KOUAME"/>
    </div>
    <div className="inputUn">
    <label htmlFor="">Prenom</label>
    <input type="text" placeholder="Franck Olivier"/>
    </div>
  
  </div>
<br />
  <div className="profilGrandInput">
    <div className="inputUn">
    <label htmlFor="">N° Telephone</label>
    <input type="text" placeholder="KOUAME"/>
    </div>
    <div className="inputUn">
    <label htmlFor="">Email</label>
    <input type="text" placeholder="kouamefranckolivier45@gmail.com"/>
    </div>
  
  </div>

<br />
  <div className="profilGrandInput">
    <div className="inputUn">
    <label htmlFor="">Pays</label>
    <input type="text" placeholder="Ivory Coast"/>
    </div>
    <div className="inputUn">
    <label htmlFor="">Ville</label>
    <input type="text" placeholder="Abidjan"/>
    </div>
  
  </div>

<br />
  <div className="profilGrandInput">
    <div className="inputUn">
    <label htmlFor="">Postcode</label>
    <input type="text" placeholder="3331"/>
    </div>
    <div className="inputUn">
    <label htmlFor="">Nom</label>
    <input type="text" placeholder="KOUAME"/>
    </div>
  
  </div>
</div>

<div className="profileButton">
  <button type="submit">Modifiez</button>
</div>
 </div>
</div>




    

          </div>
      </div>
    </div>
);
}

export default Profile;
