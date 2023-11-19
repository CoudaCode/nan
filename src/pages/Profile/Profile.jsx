
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./Profile.css"
function Profile() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/*<Topbar />*/}
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
        Profile


        <div className="Profil">
          <div className="cardsProfil">
            <div className="cardsimage">
              <div className="cardsIcons">

              </div>
              <div className="offLine">
                
              </div>
            </div>
            <div className="textProfil">
              <div className="pourTexte">
              <h2>Profils Utilisateur</h2>
              </div>

              <div className="pouLreste">
                <div className="name">
                  <h3>NOM :</h3>
                  <div className="carrelage">

                  </div>
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