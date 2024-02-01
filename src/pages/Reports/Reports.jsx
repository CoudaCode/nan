import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IsCookies } from "../../outils/IsCookie";
import { ApiUrl } from "../../outils/URL";
import "./Reports.css";

const PopupExample = ({ isOpen, selectedItem, onClose }) => {
  const [showPopup, setShowPopup] = useState(isOpen);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    onClose(); // Appeler la fonction onClose pour réinitialiser l'état dans le composant parent
  };

  return (
    <div
      className={`${showPopup ? "fixed" : "hidden"} inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 pt-5 pb-4 bg-violet-800 sm:p-6 sm:pb-4">
            <h2 className="mb-4 text-2xl font-bold">{`Restaurer ${selectedItem?.nom}`}</h2>
            {/* Autres détails de l'élément sélectionné */}
          </div>
          <div className="px-4 py-3 bg-violet-200 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={togglePopup}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
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

  const token = IsCookies();
  const navigate = useNavigate();
  const [contactDeleted, setContactDeleted] = useState([]);
  const [teamDeleted, setTeamDeleted] = useState([]);

  

  useEffect(() => {
    if (!token) {
      toast.error("Session expiré , veuillez vous reconnecter !");
      navigate("/connexion");
    } else {
      axios.get(ApiUrl + "contact/getAllDelete", {
          headers: { Authorization: ` token ${token}` },
        })
        .then((success) => {
          console.log(
            " la liste de tout les contat supprimés",
            success.data.data
          );
          setContactDeleted(success.data.data);
          console.log(contactDeleted);
        })
        .catch((err) => {
          console.log("une erreur est survenue lors du traitement...", err);
        });

      axios.get(ApiUrl + "groupe/getAllDeleted", {
          headers: { Authorization: ` token ${token}` },
        })
        .then((success) => {
          console.log("la liste des groupe supprimé", success.data.data);
          setTeamDeleted(success.data.data);
          console.log(teamDeleted);
        })
        .catch((err) => {
          console.log("une erreur s'est produite lors du traitement", err);
        });
    }
  }, []);

  const recover = (id) => {
    axios.put(ApiUrl + `contact/recover/${id}`, {
        headers: { Authorization: ` token  ${token}` },
      })
      .then((success) => {
        console.log("ce contact à bien été restauré", success);
      })
      .catch((err) => {
        console.log("une erreur est survenu lors du traitement", err);
      });
  };
  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-1 p-4 overflow-y-auto main" id="main">
        <div className=" overflow-y-none p-4 bg-[#1E2029]">Rapports</div>
        <div className="container mb-9">
          <h2 className="mb-5 text-2xl font-extrabold text-center text-white">
            Contact Supprimés
          </h2>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Rechercher..."
              className="p-2 mb-2 text-black rounded-md outline-none bg-white-800"
            />

            <p className="font-extrabold text-center">
              <button className="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                Tout Restaurer
              </button>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <div className="overflow-x-auto rounded-t-lg">
              <table className="min-w-full text-sm bg-white divide-y-2 divide-gray-200">
                <thead className="divide-y">
                  <tr>
                    <th className="px-4 py-2 font-extrabold text-gray-900 break-words whitespace-nowrap">
                      Nom et Prenom
                    </th>
                    <th className="px-4 py-2 font-extrabold text-gray-900 whitespace-nowrap">
                      email
                    </th>
                    <th className="px-4 py-2 font-extrabold text-gray-900 whitespace-nowrap">
                      Phone
                    </th>
                    <th className="px-4 py-2 font-extrabold text-gray-900 whitespace-nowrap">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {contactDeleted.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                        {item.fullname}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-700 whitespace-nowrap">
                        {item.email}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-700 whitespace-nowrap">
                        {item.sms}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-700 whitespace-nowrap">
                        <button
                          onClick={() => recover(item.id)}
                          className="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                        >
                          Restaurer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-4 py-2 border-t border-gray-200 rounded-b-lg">
              <ol className="flex justify-center gap-1 text-xs font-medium">
                <li>
                  <a className="inline-block p-3 text-white border rounded-full border-violet-600 bg-violet-600 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring active:text-violet-500">
                    <span className="sr-only"> Download </span>

                    <svg
                      className="w-2 h-2 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </li>
                <li className="block w-8 h-8 font-extrabold leading-8 text-center text-black bg-white border-blue-600 rounded">
                  1
                </li>
                <li>
                  <a className="inline-block p-3 border rounded-full border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white focus:outline-none focus:ring active:bg-violet-500">
                    <span className="sr-only"> Download </span>
                    <svg
                      className="w-2 h-2 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
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
          <h2 className="mb-5 text-2xl font-extrabold text-center text-white">
            Teams Supprimés
          </h2>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Rechercher..."
              className="p-2 mb-2 text-black rounded-md outline-none bg-white-800"
            />
            <p className="font-extrabold text-center">
              <button className="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                Tout Restaurer
              </button>
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <div className="overflow-x-auto rounded-t-lg">
              <table className="min-w-full text-sm bg-white divide-y-2 divide-gray-200">
                <thead className="divide-y">
                  <tr>
                    <th className="px-4 py-2 font-extrabold text-gray-900 break-words whitespace-nowrap">
                      Nom de la Teams
                    </th>
                    <th className="px-4 py-2 font-extrabold text-gray-900 whitespace-nowrap">
                      Description
                    </th>
                    <th className="px-4 py-2 font-extrabold text-gray-900 whitespace-nowrap">
                      Canal
                    </th>
                    <th className="px-4 py-2 font-extrabold text-gray-900 whitespace-nowrap">
                      Membres
                    </th>
                    <th className="px-4 py-2 font-extrabold text-gray-900 whitespace-nowrap">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {teamDeleted.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                        {item.description}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-700 whitespace-nowrap">
                        {item.canal}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-700 whitespace-nowrap">
                        {item.contact.length}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-700 whitespace-nowrap">
                        <button
                          className="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                          onClick={() => recover(item.id)}
                        >
                          Restaurer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-2 border-t border-gray-200 rounded-b-lg">
              <ol className="flex justify-center gap-1 text-xs font-medium">
                <li>
                  <a className="inline-block p-3 text-white border rounded-full border-violet-600 bg-violet-600 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring active:text-violet-500">
                    <span className="sr-only"> Download </span>

                    <svg
                      className="w-2 h-2 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </li>
                <li className="block w-8 h-8 font-extrabold leading-8 text-center text-black bg-white border-blue-600 rounded">
                  1
                </li>
                <li>
                  <a className="inline-block p-3 border rounded-full border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white focus:outline-none focus:ring active:bg-violet-500">
                    <span className="sr-only"> Download </span>
                    <svg
                      className="w-2 h-2 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
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
    </>
  );
}

export default Reports;
