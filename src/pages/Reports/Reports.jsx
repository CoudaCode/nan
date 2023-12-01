import "./Reports.css";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
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
          <div className="container mb-9">
            <h2 className="text-center text-white mb-5 text-2xl font-extrabold">
              Contact Supprimés
            </h2>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Rechercher..."
                className="p-2 rounded-md bg-white-800 text-black mb-2 outline-none"
              />

              <p className="text-center font-extrabold">
                <button className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                  Tout Restaurer
                </button>
              </p>
            </div>
            <div className="rounded-lg border border-gray-200">
              <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className="divide-y">
                    <tr>
                      <th className="whitespace-nowrap break-words px-4 py-2 font-extrabold text-gray-900">
                        Nom et Prenom
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-extrabold text-gray-900">
                        email
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-extrabold text-gray-900">
                        Phone
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-extrabold text-gray-900">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {contacts.map((item) => (
                      <tr key={item.id}>
                        <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          {item.nom}
                        </td>
                        <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                          {item.email}
                        </td>
                        <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                          {item.phone}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                          <button
                            onClick={() => handleRestore(item)}
                            className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                            Restaurer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                <ol className="flex justify-center gap-1 text-xs font-medium">
                  <li>
                    <a className="inline-block rounded-full border border-violet-600 bg-violet-600 p-3 text-white hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring active:text-violet-500">
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

            {isOpen && (
              <PopupExample
                isOpen={isOpen}
                selectedItem={selectedItem}
                onClose={handleClosePopup}
              />
            )}
          </div>
          <div className="container mb-9">
            <h2 className="text-center text-white mb-5 text-2xl font-extrabold">
              Teams Supprimés
            </h2>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Rechercher..."
                className="p-2 rounded-md bg-white-800 text-black mb-2 outline-none"
              />
              <p className="text-center font-extrabold">
                <button className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                  Tout Restaurer
                </button>
              </p>
            </div>
            <div className="rounded-lg border border-gray-200">
              <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className="divide-y">
                    <tr>
                      <th className="whitespace-nowrap break-words px-4 py-2 font-extrabold text-gray-900">
                        Nom de la Teams
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-extrabold text-gray-900">
                        Canal
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-extrabold text-gray-900">
                        Membres
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-extrabold text-gray-900">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {Teams.map((item) => (
                      <tr key={item.id}>
                        <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          {item.nomTeams}
                        </td>
                        <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                          {item.Chanels}
                        </td>
                        <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                          {item.numberMembers}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                          <button className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                            Restaurer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                <ol className="flex justify-center gap-1 text-xs font-medium">
                  <li>
                    <a className="inline-block rounded-full border border-violet-600 bg-violet-600 p-3 text-white hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring active:text-violet-500">
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
      </div>
    </div>
  );
}

export default Reports;
