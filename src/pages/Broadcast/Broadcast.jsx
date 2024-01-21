import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ApiUrl } from "../../outils/URL";
import "./Contact.css";
import { useEffect, useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DeleteCookies, IsCookies } from "../../outils/IsCookie";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import ModifyConfirmationModal from "./ModifyConfirmationModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import FormBroadcastModal from "./FormBroadcastModal";
// import ModalContact from "./ModalContact";

function Broadcast() {
  const token = IsCookies();
  const navigate = useNavigate();
  const [AllGroupe, SetAllGroupe] = useState([]);
  useEffect(()=>{
    if(!token){
      toast.error('Session expirée, veuillez vous connecter !');
      navigate('/connexion');
    }
  }, []);
  
  const [selectedContact, setSelectedContact] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [contactToModify, setContactToModify] = useState(null);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);

  const [isFormModalOpen, ] = useState(false);
  const [, setIsFormModalClose] = useState(null);

  const [openAddForm, setIsOpenAddForm] = useState(null);

  // const [openImportForm, setIsOpenImportForm] = useState(null);
  
  useEffect(()=>{
    axios.get(ApiUrl + 'groupe/getAll', { headers: { Authorization: `token ${token}`} })
    .then(success => {
      SetAllGroupe(success.data.data.sort((a, b) => a.name.localeCompare(b.name)))
    })
    .catch(error => {
      if(error.response.data.message === 'Expired token'){
        DeleteCookies();
        toast.error('Session expirée, veuillez vous connecter !');
        navigate('/connexion');
      }
    })
  }, []);

  const [ pagesNumber, setPagesNumber ] = useState(0);
  const GroupePerPage = 9;
  const pagesVisited = pagesNumber * GroupePerPage;
  const displayGroupe = AllGroupe.slice(pagesVisited, pagesVisited + GroupePerPage).map( item => {
    return(
      <>
      
        <tr id={'ligne-'+item.id} key={item.id} data={item}>
          <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
            {item.name}
          </td>
          <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
            <a>
              {item.contact.length}
            </a>
            
          </td>
          <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
            {item.canal}
          </td>
          <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
            {item.description}
          </td>
          <td className="whitespace-nowrap flex gap-2 text-center px-4 py-2 text-gray-700" style={{ justifyContent:'center'}}>
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
      </>
    )
  })

  const pageCount = Math.ceil(AllGroupe.length / GroupePerPage);
  const changePage = ({selected})=>{ setPagesNumber(selected); }

  const handleDelete = (contactId) => {
    const contact = AllGroupe.find(c => c.id === contactId);
    setSelectedContact(contact);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsFormModalClose(false);
    setSelectedContact(null);
  };

  const handleCloseModifyModal = () => {
    setIsModifyModalOpen(false);
    setContactToModify(null);
  };

  // const handleCloseFormModal = () => {
  //   setIsDeleteModalOpen(false);
  //   setSelectedContact(null);
  // };



  const handleModify = (contactId) => {
    const contact = AllGroupe.find(c => c.id === contactId);
    setContactToModify(contact);
    setIsModifyModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const handleSaveContact = () => {
    setIsOpenAddForm(true)
  };

  const handleCloseContact = () => {
    setIsOpenAddForm(false)
  };

  // const handleImportContact = (e) => {
  //   setIsOpenImportForm(true)
  // };

  // const handleCloseImportContact = (e) => {
  //   setIsOpenImportForm(false)
  // };

  return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
        <div className=" overflow-y-none p-4   bg-[#1E2029]">Broadcast</div>
          <div className="relative overflow-x-auto m-4 shadow-md sm:rounded-lg">
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
                  className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 data-modal-toggle=authentication-modal"
                  type="button"
                  onClick={() => handleSaveContact(true)}>
                  <FaPlus style={{ margin: "8px " }} />
                  Créer Liste de Difusion
                </button>
              </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="rounded-lg border border-gray-200">
                <div className="overflow-x-none rounded-t-lg">
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          GROUPE
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          NOMBRE DE MEMBRE
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          CANAL DE DIFUSION
                        </th>
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          DESCRIPTION
                        </th>
                        {/* <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          SMS
                        </th> */}
                        <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    
                    <tbody className="divide-y divide-gray-200">
                      { displayGroupe }
                    </tbody>
                  </table>
                  
                </div>
                <div className="rounded-b-lg w-full border-t border-gray-200 px-3 py-2">
                  <ol className="flex justify-center gap-1 text-xs font-medium">
                    <ReactPaginate
                      previousLabel={'Précedent'}
                      nextLabel={'Suivant'}
                      pageCount={pageCount}
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
      {/* </div> */}

      <FormBroadcastModal
        isOpen={handleSaveContact}
        onClose={handleCloseContact}
        isFormModalOpen={isFormModalOpen}
        contact={openAddForm}
        statusForm = {handleSaveContact}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        contact={selectedContact}
      />

      <ModifyConfirmationModal
        isOpen={isModifyModalOpen}
        onClose={handleCloseModifyModal}
        groupeData={contactToModify}
      />
    </>
  );
}
export default Broadcast;
