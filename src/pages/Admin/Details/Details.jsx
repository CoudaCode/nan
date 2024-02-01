import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminSideBar from "../AdminSideBar/AdminSideBar";

// import "./dashboard.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DeleteCookies, IsCookies } from "../../../outils/IsCookie";
import { ApiUrl } from "../../../outils/URL";

function Details() {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [entreprise, setEntreprise] = useState({});
  console.log(entreprise);
  const navigate = useNavigate();
  const { id } = useParams();
  const token = IsCookies();
  console.log(id);
  useEffect(() => {
    if (!token) {
      toast.error("Session expirée, veuillez vous connecter !");
      navigate("/connexion");
    } else {
      axios
        .get(ApiUrl + `entreprise/getById/${id}`, {
          headers: { Authorization: `token ${token}` },
        })
        .then((success) => {
          console.log("les informations de l'entreprise...", success.data.data);
          setEntreprise(success.data.data);
        })
        .catch((err) => {
          console.log(
            "impossible de charger les informations de l'entreprise !",
            err
          );
        });
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
      <div className="flex flex-col flex-1 p-4 overflow-y-auto main" id="main">
        <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
          <div className="flex items-center"> Information sur l'entreprise</div>
        </div>
        <div className="mt-3 text-end">
          <a
            href="/admin/entreprise"
            className="inline-block px-4 py-2 text-xs font-medium bg-gray-100 rounded text-slate-600 hover:text-white hover:bg-indigo-700"
          >
            Retour
          </a>
        </div>
        <div className="p-5">
          <div className="px-8 mt-24 bg-white shadow">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative">
                <div className="absolute inset-x-0 top-0 flex items-center justify-center w-48 h-48 mx-auto -mt-24 text-indigo-500 bg-gray-100 rounded-full shadow-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 h-24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div></div>
              </div>
            </div>
            {/* <div className="mt-3 font-medium text-gray-700 text-end">
                <a href="">
                    Retour
                </a>
            </div>            */}
            <div className="pb-12 mt-20 text-center border-b">
              <h1 className="text-4xl font-medium text-gray-700">
                {entreprise.raisonSociale} , {entreprise.pays}
              </h1>
              <h2 className="mt-3 text-2xl font-light text-gray-700">
                {entreprise.adresse}
              </h2>
              <h4 className="mt-3 text-2xl font-light text-gray-700"> </h4>
              <h1 className="mt-8 font-light text-gray-600">
                E-mail Créateur de compte
              </h1>
              <h2 className="mt-3 text-2xl font-light text-gray-700">
                {entreprise.email}
              </h2>
              <h4 className="mt-3 text-2xl font-light text-gray-700">
                {entreprise.smsAdresse}
              </h4>
              <p className="mt-8 font-light text-gray-600">
                Type d'entreprise :
                <span className="mt-3 font-medium text-gray-800">
                  {entreprise.type}
                </span>
              </p>
              <p className="mt-2 font-light text-gray-600">
                Cannaux de diffusion : WhatsApp , E-mail , SMS
              </p>
            </div>
            <div className="grid order-last grid-cols-3 mt-20 text-center md:order-first md:mt-0">
              <div>
                <p className="text-xl font-bold text-gray-700">22</p>
                <p className="text-gray-400">Groupes</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-700">10</p>
                <p className="text-gray-400">Contacts</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-700">89</p>
                <p className="text-gray-400">Membres</p>
              </div>
            </div>
            <div className="flex flex-col justify-center mt-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
