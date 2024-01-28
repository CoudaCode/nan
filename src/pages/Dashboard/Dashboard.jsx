import Sidebar from "../../components/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";

// import "./dashboard.css";
import { useEffect, useState } from "react";
import { DeleteCookies, IsCookies } from "../../outils/IsCookie";
import { toast } from "react-toastify";

function Dashboard() {
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
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
      <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
          <div className="flex items-center"> Dashboard </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4 overflow-Y-auto">

          <div className="h-52 bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 rounded-lg bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105 ">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 rounded-lg bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105 ">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 rounded-lg bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105 ">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 rounded-lg bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105 ">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 rounded-lg bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105 ">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 rounded-lg bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105 ">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 rounded-lg bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105 ">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 rounded-lg bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105 ">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 rounded-lg bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105 ">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 rounded-lg bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105 ">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 rounded-lg bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105">
            <div className="p-4">
              <h1>Teams</h1>
              <h2 className="my-8">2000</h2>
              <div className="text-right text-violet-700">
                <i className="fa-solid fa-users text-white"></i>
              </div>
            </div>
            <div className="p-2 bg-white text-black font-extrabold text-right">
              <Link>
                <h1>Voir</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
