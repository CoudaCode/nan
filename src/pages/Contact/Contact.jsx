import Sidebar from "../../components/Sidebar/Sidebar";
import "./Contact.css";
import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, contact }) => {
  if (!isOpen || !contact) {
    return null;
  }

  const handleDelete = () => {
    // Handle the deletion logic here
    // For example, remove the contact from the list
    // ...
    // Close the modal
    onConfirm();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

      <div className="rounded-lg bg-white p-8 shadow-2xl z-10">
        <h2 className="text-lg font-bold">Supprimer le contact</h2>

        <p className="mt-2 text-sm text-gray-500">
          Êtes-vous sûr de vouloir supprimer ce contact?
        </p>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="rounded bg-red-500 px-4 py-2 text-sm font-medium text-white"
            onClick={handleDelete}>
            Oui
          </button>

          <button
            type="button"
            className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
            onClick={onClose}>
            Non
          </button>
        </div>
      </div>
    </div>
  );
};

const ModifyConfirmationModal = ({ isOpen, onClose, contact }) => {
  if (!isOpen || !contact) {
    return null;
  }

  const handleModification = () => {
    // Handle the modification logic here
    // For example, update the contact data in the list
    // ...
    // Close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

      <div className="rounded-lg bg-white p-8 shadow-2xl z-10">
        <h2 className="text-lg font-bold">Modifier le contact</h2>

        <form>
          <label>Nom et Prénom:</label>
          <input
            type="text"
            value={contact.nom}
            onChange={(e) => {
              // Handle the change in the contact data
              // For example, update the contact data in the state
              // e.g., setContactData({ ...contactData, nom: e.target.value });
            }}
            // Add onChange handler to update contact data
          />

          {/* Add other input fields for email, phone, etc. */}

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="rounded bg-green-500 px-4 py-2 text-sm font-medium text-white"
              onClick={handleModification}>
              Confirmer la modification
            </button>

            <button
              type="button"
              className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
              onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function Contact() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [selectedContact, setSelectedContact] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [contactToModify, setContactToModify] = useState(null);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const conatct = [
    {
      id: 16,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 1,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 2,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 3,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 4,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 5,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 15,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 14,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 13,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 12,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 6,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 11,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 10,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 9,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 8,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
    {
      id: 7,
      nom: "couda",
      email: "couda@gmail.com",
      pays: "cote d'ivoire",
      langue: "francais",
      phone: "225 0747185291",
    },
  ];
  const totalPages = Math.ceil(conatct.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = conatct.slice(indexOfFirstItem, indexOfLastItem);

  // Fonction pour aller à la page précédente
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fonction pour aller à la page suivante
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDelete = (contactId) => {
    const contact = conatct.find((c) => c.id === contactId);
    setSelectedContact(contact);
    setIsDeleteModalOpen(true);
  };

  const handleModify = (contactId) => {
    const contact = conatct.find((c) => c.id === contactId);
    setContactToModify(contact);
    setIsModifyModalOpen(true);
  };

  const handleConfirmDelete = () => {
    // Handle the confirmed delete logic here
    // For example, remove the contact from the list
    // ...
    // Close the delete confirmation modal
    setIsDeleteModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedContact(null);
  };

  const handleCloseModifyModal = () => {
    setIsModifyModalOpen(false);
    setContactToModify(null);
  };
  return (
    <>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029] Contact">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between pb-4">
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 focus:outline-none  rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="recherche"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaSearch style={{ color: "#6870e0 " }} />
                </div>
              </div>
              <div>
                <button
                  id="btn"
                  className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button">
                  <FaPlus style={{ margin: "8px " }} />
                  contact d’mportation
                </button>

                <button
                  id="btn"
                  className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 data-modal-toggle=authentication-modal"
                  type="button"
                  onClick={() => setShowModal(true)}>
                  <FaPlus style={{ margin: "8px " }} />
                  ajouter le contact
                </button>
              </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="rounded-lg border border-gray-200">
                <div className="overflow-x-auto rounded-t-lg">
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Nom et Prenom
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Email
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Numéro Whatsapp
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Langue
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Pays
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      {currentItems.map((item) => {
                        return (
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
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                              {item.pays}
                            </td>
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                              {item.langue}
                            </td>
                            <td className="whitespace-nowrap flex gap-2 text-center px-4 py-2 text-gray-700">
                              <a
                                onClick={() => handleModify(item.id)}
                                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                                Modifier
                              </a>
                              <a
                                onClick={() => handleDelete(item.id)}
                                className="inline-block rounded bg-black px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                                Supprimer
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
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
            </div>
          </div>
        </div>
      </div>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        contact={selectedContact}
      />

      <ModifyConfirmationModal
        isOpen={isModifyModalOpen}
        onClose={handleCloseModifyModal}
        contact={contactToModify}
      />
    </>
  );
}
export default Contact;
