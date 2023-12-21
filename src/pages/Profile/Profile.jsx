
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
  <div className="profilPart"></div>
  <br />
  <div className="profilPart"></div>
  <br />
  <div className="profilPart"></div>
</div>
 </div>



 <div className="profileBar2">

<div className="profileTitle">
  <h1>Information Profil</h1>
</div>

<div className="profilePourInput">
  .profilGrandI
    <div className="inputUn">
    <label htmlFor="">Nom</label>
    <input type="text" placeholder="KOUAME"/>

    <label htmlFor="">Nom</label>
    <input type="text" placeholder="KOUAME"/>
  </div>
</div>

 </div>
</div>




    

          </div>
      </div>
    </div>
    
  );
}

export default Profile;