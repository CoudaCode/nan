
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Profile.css";
import { CgProfile } from "react-icons/cg";

import img from "../../assets/images/img-profile.jpg";
function Profile() {

  return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
          <div className=" overflow-y-none p-4  bg-[#1E2029]">Profile</div>
            <div className="container mb-9">
              <div className="profile m-4">
              <div className="cardsPro">
                <div className="cardsDiviso">
                  <CgProfile className="icon" />
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
                        <input type="text" placeholder="KOUAME" />
                      </div>
                      <div className="sepa">
                        <label htmlFor="">Prenom</label>
                        <input type="text" placeholder="Franck Olivier" />
                      </div>
                    </div>
                    <br />
                    <div className="profileSepo">
                      <div className="sepa">
                        <label htmlFor="">Téléphone (10 chiffres)</label>
                        <input type="text" placeholder="0789105791" />
                      </div>
                      <div className="sepa">
                        <label htmlFor="">Pays</label>
                        <input type="text" placeholder="Cote D'ivoire" />
                      </div>
                    </div>

                    <div className="sepaPeofil">
                      <label htmlFor="">E-mail</label>
                      <input
                        type="text"
                        placeholder="kouamefranckolivier45@gmail.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="profileButton">
                  <button>Mettre a jour</button>
                </div>
              </div>
              </div>
            </div>
          </div>
      </>
  );
}

export default Profile;
