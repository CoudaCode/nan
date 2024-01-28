
import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./Profile.css";

import img from "../../assets/images/img-profile.jpg";

import "./Profile.css";
import { CgProfile } from "react-icons/cg";


import { DeleteCookies } from "../../outils/IsCookie";
import {  useState } from "react";
function Profile() {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleLogout = () => {
    DeleteCookies();
    setConfirmationModalOpen(false);
    setTimeout(() => window.location.reload(), 1500);
  };

  return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
          <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
            <div className="flex items-center"> Messages </div>
            <div>
              <button onClick={() => setConfirmationModalOpen(true)} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">Déconnexion</button>
            </div>
            {isConfirmationModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

                <div className="rounded-lg bg-purple-900 p-8 shadow-2xl z-10 w-[40rem]">
                  <p className="text-xl text-center text-color-purple font-semibold mb-4">Êtes-vous sûr de vouloir vous déconnecter ?</p>

                  <div className="flex justify-end">
                    <button onClick={() => setConfirmationModalOpen(false)} className="mr-4 bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-700" > Annuler </button>
                    <button onClick={handleLogout} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"> Oui, déconnectez-moi. </button>
                  </div>
                </div>
              </div>
            )}
          </div>
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
