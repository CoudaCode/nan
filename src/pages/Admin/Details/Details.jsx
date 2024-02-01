
import {  Link, useNavigate } from "react-router-dom";
import AdminSideBar from "../AdminSideBar/AdminSideBar";


// import "./dashboard.css";
import { useEffect,  } from "react";
import { IsCookies,  } from "../../../outils/IsCookie";
import { toast } from "react-toastify";
import Deconnexion from "../../Deconnexion/Deconnexion";


function Details() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!IsCookies()){
      toast.error('Session expirée, veuillez vous connecter !');
      navigate('/connexion');
    }
  }, []);

  

  return (
    <>
      <AdminSideBar />
        <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
            <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
                <div className="flex items-center"> <Link to={'/admin/entreprises'}><span className="text-gray-400 hover:text-white"> Entreprise </span></Link>&nbsp; &gt;&nbsp; <span>Détail</span> </div>
                
                <Deconnexion />
            </div>
                      
            <div className="Contact mt-5">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="px-8 bg-white shadow mt-24">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="relative">
                                <div className="w-48 h-48 bg-gray-100 mx-auto rounded-full absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                
                            <div>
                        </div>
                    </div> 
                </div>
                {/* <div className="font-medium text-gray-700 mt-3 text-end">
                    <a href="">
                        Retour
                    </a>
                </div> */}
                <div className="mt-20 text-center border-b pb-12">          
                    <h1 className="text-4xl font-medium text-gray-700">Jessica Jones</h1>
                    <h2 className="text-2xl font-light text-gray-700 mt-3">Jessica.jones@gmail.com</h2>
                    <h4 className="text-2xl font-light text-gray-700 mt-3">+2250702030105</h4>
                    <p className="font-light text-gray-600 mt-3">Créateur de compte</p>
                    <p className="mt-8 font-light text-gray-600">Type d&apos;entreprise : <span className="font-medium text-gray-800 mt-3">Privé</span></p>
                    <p className="mt-2 font-light text-gray-600">Cannaux de diffusion : </p>
                </div>
                <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                    <div> 
                        <p className="font-bold text-gray-700 text-xl">22</p>
                        <p className="text-gray-400">Groupes</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700 text-xl">10</p>
                        <p className="text-gray-400">Contacts</p>     
                    </div>
                    <div>
                        <p className="font-bold text-gray-700 text-xl">89</p>
                        <p className="text-gray-400">Membres</p>      
                    </div>    
                </div>
                <div className="mt-12 flex flex-col justify-center">
                </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Details;
