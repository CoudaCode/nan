
import { Link, useNavigate } from "react-router-dom";
import AdminSideBar from "../AdminSideBar/AdminSideBar";

// import "./dashboard.css";
import { useEffect, useState } from "react";
import { IsCookies } from "../../../outils/IsCookie";
import { toast } from "react-toastify";
import Deconnexion from "../../Deconnexion/Deconnexion";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { ApiUrl } from "../../../outils/URL";




function Historique() {
  const [AllDelete, SetDelete] = useState([]);
  const [ pagesNumber, setPagesNumber ] = useState(0);
  
  const navigate = useNavigate();
  useEffect(()=>{
    if(!IsCookies()){
      toast.error('Session expirée, veuillez vous connecter !');
      navigate('/connexion');
    }
  }, [navigate]);
    
    useEffect(() => {
        axios.get(ApiUrl+'entreprise/getAll', {headers: {Authorization: `token ${IsCookies()}`}})
        .then(success => {
          console.log(success.data.data)
          SetDelete(success.data.data)
        })
        .catch(()=>{
          // 
        })
    }, [])

    
    const ContactsPerPage = 9;
    const pagesVisited = pagesNumber * ContactsPerPage;
    const displayContact = AllDelete.slice(pagesVisited, pagesVisited + ContactsPerPage).map((item) => {
        return(
            <tr key={item.id}>
                <td className="whitespace-nowrap text-center font-medium text-gray-900">
                    {item.raisonSociale}
                </td>
                <td className="whitespace-nowrap text-center text-gray-700">
                    {item.domaineDActivite}
                </td>
                <td className="whitespace-nowrap text-center text-gray-700">
                    {item.adresse}
                </td>
                <td className="whitespace-nowrap text-center text-gray-700">
                    {item.pays }
                </td>

                <td className="whitespace-nowrap text-center text-gray-700">
                  <Link to={`/admin/contacts/${item.id}`} className="text-[blue] hover:underline transition hover:scale-110 hover:shadow-xl">
                  {item.user.fullname }
                  </Link>
                    
                </td>
                <td className="whitespace-nowrap text-center text-gray-700">
                    {item.type }
                </td>

                <td className="whitespace-nowrap flex gap-2 text-center px-4 py-2 text-gray-700" style={{ justifyContent:'center'}}>
                  <Link to={`/admin/entreprises/${item.id}`}  id={'deleteNew'+item.id} className="inline-block rounded bg-indigo-600 p-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                    Détail
                  </Link>
                </td>
            </tr>
        )
    });

    const countPage = Math.ceil(AllDelete.length / ContactsPerPage);

    const changePage = ({selected})=>{
        setPagesNumber(selected);
    }


  return (
    <>
      <AdminSideBar />
      <div className="flex flex-col flex-1 p-4 overflow-y-auto main" id="main">
        <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
          <div className="flex items-center"> Entreprise </div>
          <Deconnexion />
        </div>

        <div className="Contact mt-5">
        
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="rounded-lg border border-gray-200">
                <div className="overflow-x-none rounded-t-lg">
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Raison Sociale
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Domaine Activité
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Adresse
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Pays
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Propriétaire
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Statut
                        </th>
                      </tr>
                    </thead>
                    
                    <tbody className="divide-y divide-gray-200">
                      { displayContact }
                    </tbody>
                  </table>
                  
                </div>
                <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                  <ol className="flex justify-center gap-1 text-xs font-medium">
                    <ReactPaginate
                      previousLabel={'<< Précédent'}
                      nextLabel={'Suivant >>'}
                      pageCount={countPage}
                      onPageChange={changePage}
                      containerClassName={'paginationBttns'}
                      previousLinkClassName={'previousBttn'}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </ol> 
                </div>
              </div>
            </div>




            






              
              
        </div>
      </div>
    </>
  )
}

export default Historique;
