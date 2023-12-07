import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Broadcast.css";
function Broadcast() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [modalLogOut, setModalLogOut] = useState(false);

  const toggleLogOut = () => {
    setModalLogOut(!modal);
    console.log("ouvert");
  };
  const closeToggle = () => {
    setModalLogOut(modal);
    console.log("fermé");
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const tableData = [
    { team: "nan", members: "couda , diom , nfcdjobo", channel: "email" },
    {
      team: "codeur 4",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 3",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 2",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 1",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 8",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 7",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 6",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 5",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 9",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 10",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 11",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 12",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 13",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 14",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 16",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 15",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    {
      team: "codeur 17",
      members: "konany , mariam , marie",
      channel: "sms , whatsapp",
    },
    // Add other data objects as needed
  ];
  const itemsPerPage = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = tableData.length; // Total number of items (replace with the actual total)

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = tableData.slice(startIndex, endIndex);

  return (
    <div className="flex h-screen">
      <div
        className={`bg-[#1E2029] ${
          isSidebarOpen ? "sm:w-60" : "w-14"
        }  min-h-screen pt-4 transition-all`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
          <div className="create_diffusion" onClick={toggleModal}>
            <p>+ CREER UNE DIFFUSION</p>
          </div>

          <div className="broadcast_table">
            <table>
              <thead>
                <tr>
                  <th>TEAM</th>
                  <th>MEMBRES</th>
                  <th>CANAL</th>
                </tr>
              </thead>
              <tbody>
                {displayedData.map((rowData, index) => (
                  <tr key={index}>
                    <td>{rowData.team}</td>
                    <td>{rowData.members}</td>
                    <td>{rowData.channel}</td>
                    <td className="action">
                      <button className="edit_field">Modifier</button>
                      <button className="delete_field" onClick={toggleLogOut}>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
              <ol className="flex justify-center gap-1 text-xs font-medium">
                <a
                  onClick={handlePreviousPage}
                  className={`${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  } inline-block rounded-full border border-indigo-600 p-2 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500`}>
                  <span className="sr-only"> Précédent </span>
                  <svg
                    className={`h-5 w-5 rtl:rotate-180 ${
                      currentPage === 1 ? "text-gray-300" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <li>
                  <a
                    href="#"
                    className="block h-8 w-8 mt-1 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
                    {currentPage}
                  </a>
                </li>

                <a
                  onClick={handleNextPage}
                  className={`${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  } inline-block rounded-full border border-indigo-600 p-2 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500`}>
                  <span className="sr-only"> Suivant </span>
                  <svg
                    className={`h-5 w-5 rtl:rotate-180 ${
                      currentPage === totalPages ? "text-gray-300" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </ol>
            </div>
          </div>

          {modalLogOut && (
            <div className="overlay">
              <div className="notifications-container">
                <div className="success">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="succes-svg">
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="success-prompt-wrap">
                      <p className="success-prompt-heading">
                        Cette action va supprimer cette diffusion
                      </p>
                      <div className="success-prompt-prompt">
                        <p>En êtes-vous sûre ?</p>
                      </div>
                      <div className="success-button-container">
                        <button
                          className="success-button-main"
                          type="button"
                          onClick={closeToggle}>
                          Annuler
                        </button>
                        <button
                          className="success-button-secondary"
                          type="button">
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {modal && (
            <div className="modal">
              <div className="overlay" onClick={toggleModal}></div>
              <div className="container-projet">
                <div className="modal-content container-projet">
                  <div className="modal__header">
                    <span className="modal__title">Nouvelle diffusion</span>
                    <button
                      className="button button--icon"
                      onClick={toggleModal}>
                      <svg
                        width="24"
                        viewBox="0 0 24 24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="modal__body">
                    <div className="input">
                      <label className="input__label">Nom de la team</label>
                      <input className="input__field" type="text" />
                      <p className="input__description"></p>
                    </div>

                    <div className="input">
                      <label className="input__label">Membres de la team</label>
                      <input className="input__field" type="text" />
                      <p className="input__description"></p>
                    </div>

                    <div className="input">
                      <label className="input__label">
                        Canal/canaux de diffusion
                      </label>
                      <input className="input__field" type="text" />
                      <p className="input__description"></p>
                    </div>
                  </div>

                  <div className="modal__footer">
                    <button className="button button--primary close-modal">
                      Créer la diffusion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Broadcast;
