
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./Profile.css"

import img from "../../assets/images/img-profile.jpg"
function Profile() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/*<Topbar />*/}
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
        Profile



<div className="profile">


  <div className="cardsPofit">
<div className="profileEspace">
<div className="profilImage">
<img src={img} alt="" />
</div>
<div className="profilOffline">

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
</div>
  </div>

</div>



          </div>
      </div>
    </div>
    
  );
}

export default Profile;