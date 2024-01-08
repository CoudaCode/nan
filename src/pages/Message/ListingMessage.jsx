import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ApiUrl } from '../../outils/URL';
import { IsCookies } from '../../outils/IsCookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SendMessageByEmail } from '../../outils/SendMessage';



export default function ListingMessage() {

    const [AllMessage, SetAllMessage] = useState([]);

    const navigate = useNavigate()
    

    const openModal = event => {
        const id = event.target.id.split('-')[1];
        const modal = document.getElementById('modal-'+id);
        modal.classList.remove('hidden');
    };

    const closeModal = event => {
        const id = event.target.id.split('-')[1];
        const modal = document.getElementById('modal-'+id);
        modal.classList.add('hidden');
    };


    useEffect(()=>{
        axios.get(ApiUrl+'message/getAll', {headers: {Authorization: `token ${IsCookies()}`}})
        .then(success => SetAllMessage(success.data.data))
    }, []);


    const [ pagesNumber, setPagesNumber ] = useState(0);
    const ContactsPerPage = 9;
    const pagesVisited = pagesNumber * ContactsPerPage;
    const pageCount = Math.ceil(AllMessage.length / ContactsPerPage);
    const changePage = ({selected})=>{ setPagesNumber(selected); }

    const deleteMessageDel = event => {
        alert()
        const target = event.target;
        const id = target.id.replace('confirm-delete', '');
        // const btnConfirm = document.getElementById('confirm-delete'+id);
        const btnDelete = document.getElementById('closeModal-delete'+id);
        target.disabled = true;
        btnDelete.disabled = true;
        // axios.delete(ApiUrl+`message/delete/${id}`, {headers: {Authorization: `token ${IsCookies()}`}})
        // .then(response => {
        //     toast.success(response.data.message);
        //     setTimeout(() => {
        //         navigate('/message')
        //     }, 3000);
            
        // })
        // .catch(error => {
        //     toast.error(error.resonse.data.message);
        //     target.disabled = false;
        //     btnDelete.disabled = false;
        // })
    }

    const openModalDel = event => {
        const id = event.target.id.split('-')[1];
        const modal = document.getElementById('modal-'+id);
        modal.classList.remove('hidden');
    };

    const closeModalDel = event => {
        const id = event.target.id.split('-')[1];
        const modal = document.getElementById('modal-'+id);
        modal.classList.add('hidden');
    };
    

    const displayMessage = AllMessage.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(pagesVisited, pagesVisited + ContactsPerPage).map( message => {
        return(
            <>
                <tr key={message.id}>
                     <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                         { message.object }
                     </td>
                     <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                         { message.contact && message.contact.length ? 'Individuel' : message.groupe && message.groupe.length ?   'Groupe' : 'Aucun' }
                     </td>
                     <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                         { message.groupe.length || message.contact.length  }
                     </td>
                     <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                         
                         <button className="bg-purple-700 hover:bg-purple-905 text-white font-bold p-2 m-2  rounded focus:outline-none focus:shadow-outline" id={'openModal-'+message.id} onClick={openModal}>
                         Lire
                         </button>

                        <div className="fixed inset-0 overflow-y-auto  hidden" id={'modal-'+message.id}>
                        <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
                            <div className="flex items-center justify-center min-h-screen">
                                <div className="relative bg-white w-[95%] p-6 rounded shadow-md">
                                    
                                    <h2 className="text-2xl font-bold mb-4">Contenu</h2>
                                    <p className="whitespace-pre-line text-justify font-bold"> { message.contenu } </p>

                                    <button className="mt-4 bg-red-600 hover:bg-red-900 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" id={'closeModal-'+message.id} onClick={closeModal}>
                                    Fermer
                                    </button>
                                </div>
                            </div>
                        </div>
                     </td>
                     <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                         { message.canal }
                     </td>
                     <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                         {
                            message.sendingDate ? 
                            <button className="inline-block rounded bg-indigo-600 p-2 m-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">En attente...</button> :
                            <>
                                
                                <button onClick={openModalDel} id={"openModal-send"+message.id} className="inline-block rounded bg-indigo-600 p-2 m-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                                    Transférer <i className='bx bxs-send m-1' id={"openModal-send"+message.id}></i>
                                    {/* <i className='bx bxs-trash m-1' id={"openModal-send"+message.id}></i> */}
                                </button>
                                <div className="fixed inset-0 overflow-y-auto hidden" id={'modal-send'+message.id}>
                                    <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
                                    <div className="flex items-center justify-center min-h-screen">
                                        <div className="relative bg-white w-[50%] flex flex-col justify-center items-center text-center p-6 rounded shadow-md">
                                            <h2 className="text-2xl text-black font-bold mb-4">Voulez-vous vraiment transferer ce courrier ?</h2>

                                            <div className="flex gap-4"> {/* Ajout de la classe flex et gap-4 pour l'espacement entre les boutons */}
                                                <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" id={'confirm-send'+message.id} onClick={() => SendMessageByEmail(message)}>
                                                    Confirmer
                                                </button>

                                                <button className="bg-red-600 hover:bg-red-900 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" id={'closeModal-send'+message.id} onClick={closeModalDel}>
                                                    Annuler
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>





                         }
                     </td>
                     <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        <button onClick={()=>navigate(`/message/${message.id}/show`)} className="inline-block rounded bg-indigo-600 p-2 m-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                            <i className='bx bxs-show m-1'></i>
                        </button>
                        <button onClick={()=>navigate(`/message/${message.id}/edit`)} className="inline-block rounded bg-green-600 p-2 m-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                            <i className='bx bxs-edit m-1'></i>
                        </button>

                        <button onClick={openModalDel} id={"openModal-delete"+message.id} className="inline-block rounded bg-red-600 p-2 m-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                            <i className='bx bxs-trash m-1' id={"openModal-delete"+message.id}></i>
                        </button>
                        <div className="fixed inset-0 overflow-y-auto hidden" id={'modal-delete'+message.id}>
                            <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
                            <div className="flex items-center justify-center min-h-screen">
                                <div className="relative bg-white w-[50%] flex flex-col justify-center items-center text-center p-6 rounded shadow-md">
                                    <h2 className="text-2xl text-black font-bold mb-4">Voulez-vous vraiment supprimer ce message ?</h2>

                                    <div className="flex gap-4"> {/* Ajout de la classe flex et gap-4 pour l'espacement entre les boutons */}
                                        <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" id={'confirm-delete'+message.id} onClick={deleteMessageDel}>
                                            Confirmer
                                        </button>

                                        <button className="bg-red-600 hover:bg-red-900 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" id={'closeModal-delete'+message.id} onClick={closeModalDel}>
                                            Annuler
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </>
          )
        }
    )



  return (
    <div className="container flex mx-auto m-4">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <div className="rounded-lg border border-gray-200">
                <h1 className='font-bold text-center p-3'>Liste des Messages en attente ou non programmés</h1>
                <div className="overflow-x-none rounded-t-lg">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                            Destinataire
                            </th>
                            <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                            Membre
                            </th>
                            <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                            N membre
                            </th>
                            <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                            Contenu
                            </th>
                            <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                            Canal
                            </th>

                            <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                            Decision
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200"> {displayMessage} </tbody>
                    </table>
                
                </div>
                <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
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
    
    )
}