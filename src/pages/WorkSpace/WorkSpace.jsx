import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./WorkSpace.css";
import PropTypes from 'prop-types';

const CreateContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const [contactData, setContactData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    whatsapp: "",
  });

  const handleCreateContact = () => {
    // Handle the create contact logic here
    // Use the 'contactData' state for the contact details
    // ...

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);

  const toggleCreatePopup = () => {
    setIsCreatePopupOpen(!isCreatePopupOpen);
  };

  return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
        <div className=" overflow-y-none p-4  bg-[#1E2029]">Workspace</div>
        <div className="container">
          <p className="text-center font-extrabold mt-4">
            <button
              onClick={toggleCreatePopup}
              className="inline-block rounded bg-indigo-600 hover:bg-indigo-900 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
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
