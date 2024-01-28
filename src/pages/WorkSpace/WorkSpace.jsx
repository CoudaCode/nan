import { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./WorkSpace.css";
import PropTypes from 'prop-types';
import { DeleteCookies } from "../../outils/IsCookie";

const CreateContactModal = (propos) => {
  const isOpen = propos.isOpen;
  const onClose = propos.onClose

  const [, setContactData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    whatsapp: "",
  });

  const handleCreateContact = () => {
    // Clear the form and close the modal
    setContactData({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      whatsapp: "",
    });

    onClose();
  };
  if(!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

      {/* Modal */}
      <div className="mx-auto w-2/4 bg-gray-900 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded-lg shadow-2xl z-10">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl text- font-bold text-white sm:text-3xl">
            Remplissez les champs svp!
          </h1>
        </div>

        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <p>En cours ....</p>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="rounded bg-violet-500  hover:bg-violet-900  px-4 py-2 text-sm font-medium text-white"
              onClick={handleCreateContact}>
              Confirmer l&apos;ajout
            </button>

            <button
              type="button"
              className="rounded bg-red-500 hover:bg-red-900  px-4 py-2 text-sm font-medium text-white"
              onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
function WorkSpace() {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };


  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);

  const toggleCreatePopup = () => {
    setIsCreatePopupOpen(!isCreatePopupOpen);
  };

  

 
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
            <div className="flex items-center"> Workspace </div>
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
        <div className="container">
          <p className="text-center font-extrabold mt-4">
            <button onClick={toggleCreatePopup} className="inline-block rounded bg-indigo-600 hover:bg-indigo-900 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
              Planifier un diffusion
            </button>
          </p>

          <div className="bg-white m-4 rounded text-center justify-center items-center">
            <span className="text-center text-black">Aucune diffusion</span>
          </div>
        
          <CreateContactModal
            isOpen={isCreatePopupOpen}
            onClose={toggleCreatePopup}
          />
        </div>
      </div>
    </>
  );
}

// Validation de type des propriétés avec PropTypes
CreateContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WorkSpace;
