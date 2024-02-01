
import { Link, useNavigate } from "react-router-dom";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import axios from "axios"
import { ApiUrl } from "../../../outils/URL";
// import "./dashboard.css";
import { useEffect, useState } from "react";
import { IsCookies, DeleteCookies } from "../../../outils/IsCookie";
import { toast } from "react-toastify";

function Historique() {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const navigate = useNavigate();
  const [ allEntreprise ,  setAllEntreprise] = useState([])

  const token = IsCookies()
  useEffect(()=>{
    if(!token){
      toast.error('Session expirée, veuillez vous connecter !');
      navigate('/connexion');
    }else{
      axios.get(ApiUrl + "entreprise/getAll", {
        headers: { Authorization: ` token ${token}` },
      })
      .then((success) => {
        console.log(
          " la liste de tout les entreprise inscrit",
          success.data.data
        );
        setAllEntreprise(success.data.data)
        console.log(allEntreprise)
      })
      .catch((err) => {
        console.log("une erreur est survenue lors du traitement...", err);
      });
    }
  }, []);

  const handleDelete = (id) => {
    console.log(id)
    axios.delete(ApiUrl + `entreprise/delete/${id}` ,{
      headers : { Authorization : ` token ${token}`}
    })
    .then(success =>{
      console.log("cette entreprise à bien été supprimée" ,success)
      toast.success('cette entreprise à bien été supprimée !');
    })
    .catch(err => {
      console.log('impossible de supprimer cette entreprise...' , err)
    })
  }

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
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Domaine</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Type</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {allEntreprise.map(entreprise =>{
            return(
              <>
              <tr>
            <td className="whitespace-nowrap px-4 py-2 text-center  font-medium text-gray-900">{entreprise.raisonSociale}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center ">{entreprise.domaineDActivite
}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center ">{entreprise.type
}</td>
            <td className="whitespace-nowrap text-center  px-4 py-2">
              <a
                href={`/detail/${entreprise.id}`}
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                Détails
              </a>
              <a
                href="#"
                onClick={()=>{handleDelete(entreprise.id)}}
                className="inline-block rounded bg-red-600 mx-2 px-4 py-2 text-xs font-medium text-white"
              >
                Supprimer
              </a>
              {/* <a
                href="#"
                className="inline-block rounded bg-gray-900 px-4 py-2 text-xs font-medium text-white"
              >
                Bloquer
              </a> */}
            </td>
          </tr>
              </>
            )
          })}
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
  );
}

export default Historique;
