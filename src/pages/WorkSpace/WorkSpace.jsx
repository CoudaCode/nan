import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./WorkSpace.css";
import PropTypes from 'prop-types';
import CreateContactModal  from "./../WorkSpace/workspaceModal"

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
