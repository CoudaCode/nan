
import { Link, useNavigate } from "react-router-dom";
import AdminSideBar from "../AdminSideBar/AdminSideBar";

// import "./dashboard.css";
import { useEffect, useState } from "react";
import { IsCookies, DeleteCookies } from "../../../outils/IsCookie";
import { toast } from "react-toastify";

function Details() {
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
                <div className="flex items-center"> Information sur l'entreprise</div>
            </div>
            <div class="mt-3 text-end">
            <a
                href="#"
                className="inline-block rounded bg-gray-100 text-slate-600 hover:text-white px-4 py-2 text-xs font-medium hover:bg-indigo-700"
              >
                Retour
              </a>
            </div>           
            <div class="p-5">
                <div class="px-8 bg-white shadow mt-24">
                    <div class="grid grid-cols-1 md:grid-cols-3">
                        <div class="relative">
                            <div class="w-48 h-48 bg-gray-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            
                        <div>
                    </div>
                </div> 
            </div>
            {/* <div class="font-medium text-gray-700 mt-3 text-end">
                <a href="">
                    Retour
                </a>
            </div>            */}
            <div class="mt-20 text-center border-b pb-12">          
                <h1 class="text-4xl font-medium text-gray-700">Jessica Jones</h1>
                <h2 class="text-2xl font-light text-gray-700 mt-3">Jessica.jones@gmail.com</h2>
                <h4 class="text-2xl font-light text-gray-700 mt-3">+2250702030105</h4>
                <p class="font-light text-gray-600 mt-3">Créateur de compte</p>
                <p class="mt-8 font-light text-gray-600">Type d'entreprise : <span class="font-medium text-gray-800 mt-3">Privé</span></p>
                <p class="mt-2 font-light text-gray-600">Cannaux de diffusion : </p>
            </div>
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div> 
                    <p class="font-bold text-gray-700 text-xl">22</p>
                    <p class="text-gray-400">Groupes</p>
                </div>
                <div>
                    <p class="font-bold text-gray-700 text-xl">10</p>
                    <p class="text-gray-400">Contacts</p>     
                </div>
                <div>
                    <p class="font-bold text-gray-700 text-xl">89</p>
                    <p class="text-gray-400">Membres</p>      
                </div>    
            </div>
            <div class="mt-12 flex flex-col justify-center">
            </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default Details;