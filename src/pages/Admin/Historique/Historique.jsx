<<<<<<< HEAD
import AdminSidebar from "../AdminSideBar/AdminSideBar";
import { Link } from "react-router-dom";
import "./Historique.css";
function Historique() {

  return (
    <>
      <AdminSidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
        <div className="overflow-y-none p-4  bg-[#1E2029]">Historique</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4 overflow-Y-auto">
        <div className=" overflow-y-none p-4 bg-[#1E2029]">Rapports</div>
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
    </>
=======

import { Link, useNavigate } from "react-router-dom";
import AdminSideBar from "../AdminSideBar/AdminSideBar";

// import "./dashboard.css";
import { useEffect, useState } from "react";
import { IsCookies, DeleteCookies } from "../../../outils/IsCookie";
import { toast } from "react-toastify";

function Historique() {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!IsCookies()){
      toast.error('Session expirée, veuillez vous connecter !');
      navigate('/connexion');
    }
  }, []);

  const handleLogout = () => {
    DeleteCookies();
    setConfirmationModalOpen(false);
    setTimeout(() => window.location.reload(), 1500);
  };

  return (
    <>
      <AdminSideBar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
        <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
          <div className="flex items-center"> Historique</div>
          
        </div>
     

    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Entreprise</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Heure</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 text-center  font-medium text-gray-900">John Doe</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center ">24/05/1995</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center ">11:22</td>
            <td className="whitespace-nowrap text-center  px-4 py-2">
              <a
                href="/detail"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                Détails
              </a>
              <a
                href="#"
                className="inline-block rounded bg-red-600 mx-2 px-4 py-2 text-xs font-medium text-white"
              >
                Supprimer
              </a>
              <a
                href="#"
                className="inline-block rounded bg-gray-900 px-4 py-2 text-xs font-medium text-white"
              >
                Bloquer
              </a>
            </td>
          </tr>

          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center ">Jane Doe</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center ">04/11/1980</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center ">12:11</td>
            <td className="whitespace-nowrap text-center  px-4 py-2">
              <a
                href="/detail"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                Détails
              </a>
              <a
                href="#"
                className="inline-block rounded bg-red-600 mx-2 px-4 py-2 text-xs font-medium text-white"
              >
                Supprimer
              </a>
              <a
                href="#"
                className="inline-block rounded bg-gray-900 px-4 py-2 text-xs font-medium text-white"
              >
                Bloquer
              </a>
            </td>
          </tr>

          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center ">Gary Barlow</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center ">24/05/1995</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center ">14:14</td>
            <td className="whitespace-nowrap text-center  px-4 py-2">
              <a
                href="/detail"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                Détails
              </a>
              <a
                href="#"
                className="inline-block rounded bg-red-600 mx-2 px-4 py-2 text-xs font-medium text-white"
              >
                Supprimer
              </a>
              <a
                href="#"
                className="inline-block rounded bg-gray-900 px-4 py-2 text-xs font-medium text-white"
              >
                Bloquer
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

<ol class="flex justify-center gap-1 mt-3 text-xs font-medium">
  <li>
    <a
      href="#"
      class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span class="sr-only">Prev Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>

  <li>
    <a
      href="#"
      class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
    >
      1
    </a>
  </li>

  <li>
    <a
      href="#"
      class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span class="sr-only">Next Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>
</ol>
    </div>
  </>
>>>>>>> 158f5fe6e1e0aca1a1a64827438f1ba4f26f911f
  );
}

export default Historique;
