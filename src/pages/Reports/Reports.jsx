import "./Reports.css";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Deconnexion from "../Deconnexion/Deconnexion";
import DeleteContacts from "./DeleteContacts";
import DeleteGroupes from "./DeleteGroupes";
import DeleteMessages from "./DeleteMessages";
import MessageSending from "./MessageSending";


const PopupExample = ({ isOpen, selectedItem, onClose }) => {
 
  
  const [showPopup, setShowPopup] = useState(isOpen);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    onClose(); // Appeler la fonction onClose pour réinitialiser l'état dans le composant parent
  };

  

  return (
    <div
      className={`${showPopup ? "fixed" : "hidden"} inset-0 overflow-y-auto`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-violet-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-2xl font-bold mb-4">{`Restaurer ${selectedItem?.nom}`}</h2>
            {/* Autres détails de l'élément sélectionné */}
          </div>
          <div className="bg-violet-200 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={togglePopup}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Reports() {
  const contacts = [
    {
      id: 1,
      nom: "Couda couda",
      phone: "123-456-7890",
      email: "john@example.com",
    },
    {
      id: 2,
      nom: "Jane Smith",
      phone: "987-654-3210",
      email: "jane@example.com",
    },
    // Ajoutez davantage de données ici
  ];

  const Teams = [
    {
      id: 1,
      nomTeams: "John Doe",
      numberMembers: "123-456-7890",
      Chanels: "john@example.com",
    },
    {
      id: 2,
      nomTeams: "John Doe",
      numberMembers: "123-456-7890",
      Chanels: "john@example.com",
    },
    {
      id: 3,
      nomTeams: "John Doe",
      numberMembers: "123-456-7890",
      Chanels: "john@example.com",
    },
    {
      id: 4,
      nomTeams: "John Dohn",
      numberMembers: "123-456-7890",
      Chanels: "john@example.com",
    },
    {
      id: 5,
      nomTeams: "John Doe",
      numberMembers: "123-456-7890",
      Chanels: "john@example.com",
    },
  ];
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleRestore = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };
  const handleClosePopup = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };
  
  
  return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
          <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
            <div className="flex items-center"> Rapports </div>
            <Deconnexion />
          </div>
          <DeleteContacts />

          <DeleteMessages />

<<<<<<< HEAD
                      <svg
                        className="h-2 w-2 rtl:rotate-180"
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
                  </li>
                  <li className="block h-8 w-8 rounded border-blue-600 bg-white text-center leading-8 text-black font-extrabold">
                    1
                  </li>
                  <li>
                    <a className="inline-block rounded-full border border-violet-600 p-3 text-violet-600 hover:bg-violet-600 hover:text-white focus:outline-none focus:ring active:bg-violet-500">
                      <span className="sr-only"> Download </span>
                      <svg
                        className="h-2 w-2 rtl:rotate-180"
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
                  </li>
                </ol>
              </div>
            </div>
          </div>
      </div>
=======
          

          <DeleteGroupes />

          <MessageSending />
          
          


          
        </div>
>>>>>>> 158f5fe6e1e0aca1a1a64827438f1ba4f26f911f
      </>
  );
}
export default Reports;