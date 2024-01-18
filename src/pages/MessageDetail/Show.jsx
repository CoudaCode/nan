import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ApiUrl } from "../../outils/URL";
import { IsCookies } from "../../outils/IsCookie";
import { toast } from "react-toastify";

export default function Show() {
    const [message, SetMessage] = useState({});
    const [ContactsOrGroupes, SetContactsOrGroupes] = useState([]);
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    const detailPathname = pathname.split('/');
    useEffect(()=>{
        axios.get(ApiUrl+`message/getById/${detailPathname[detailPathname.length-2]}`, {headers: {Authorization: `token ${IsCookies()}`}})
        .then(response => {
            const adress = response.data.data.contact.length ? response.data.data.contact : response.data.data.groupe;
            const mipping = adress.map(element => {
                return(
                    <>
                        {
                            element.contact ? 
                                element.contact.map(itemContact => {
                                return(
                                    <div key={itemContact.id} className="bg-white p-4 rounded-md shadow-md">
                                        <p className="font-bold text-blue-500">{itemContact.fullname}</p>
                                        <p className="text-gray-600">{itemContact[response.data.data.canal]}</p>
                                    </div>
                                )
                            }) :
                            <div key={element.id} className="bg-white p-4 rounded-md shadow-md">
                                <p className="font-bold text-blue-500">{element.fullname}</p>
                                <p className="text-gray-600">{element[response.data.data.canal]}</p>
                            </div>
                        }
                    </>
                )
            });
            
            SetMessage(response.data.data);
            SetContactsOrGroupes(mipping);
        });
    }, [])
    

    const deleteMessage = id => {
        const btnConfirm = document.getElementById('confirm-delete'+id);
        const btnDelete = document.getElementById('closeModal-delete'+id);
        btnConfirm.disabled = true;
        btnDelete.disabled = true;
        axios.delete(ApiUrl+`message/delete/${id}`, {headers: {Authorization: `token ${IsCookies()}`}})
        .then(response => {
            toast.success(response.data.message);
            setTimeout(() => {
                navigate('/message')
            }, 3000);
            
        })
        .catch(error => {
            toast.error(error.resonse.data.message);
            btnConfirm.disabled = false;
            btnDelete.disabled = false;
        })
    }

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

    return (

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-5 overflow-Y-auto">
            <div className="bg-white rounded-md shadow-md text-justify">
                <div className=" mx-auto p-4 rounded-md">
                    <p className="mb-2 text-gray-700">
                        <strong>{
                        message.contact && message.contact.length ? 
                        'Nombre de destinataire ' : 
                        message.groupe && message.groupe.length ?
                        'Nombre de groupes ' : 'Contacts' } : 
                        </strong> 
                        {
                            message.contact && message.contact.length ?
                            <div className="inline-block">
                                <button  className="bg-blue-700 text-white p-2 m-2 rounded w-[110px]" id={'openModal-'+message.id} onClick={openModal}><i className="bx bxs-show m-1"></i> {message.contact.length} Voir</button>
                                <div className="fixed inset-0 overflow-y-auto  hidden" id={'modal-'+message.id}>
                                    <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
                                    <div className="flex items-center justify-center min-h-screen">
                                        <div className="relative bg-white w-[95%] p-6 rounded shadow-md">
                                            
                                            <h2 className="text-2xl font-bold mb-4">Les contacts à recevoir le message</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> { ContactsOrGroupes } </div>

                                            <button className="mt-4 bg-red-600 hover:bg-red-900 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" id={'closeModal-'+message.id} onClick={closeModal}>
                                            Fermer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>: 
                            message.groupe && message.groupe.length ? 
                            <div className="inline-block">
                                <button  className="bg-blue-700 text-white p-2 m-2 rounded w-[110px]" id={'openModal-'+message.id} onClick={openModal}><i className="bx bxs-show m-1"></i> {message.groupe.length} Voir</button>
                                <div className="fixed inset-0 overflow-y-auto  hidden" id={'modal-'+message.id}>
                                    <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
                                    <div className="flex items-center justify-center min-h-screen">
                                        <div className="relative bg-white w-[95%] p-6 rounded shadow-md">
                                            
                                            <h2 className="text-2xl font-bold mb-4">Les groupe de diffusion à recevoir le message</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> { ContactsOrGroupes } </div>

                                            <button className="mt-4 bg-red-600 hover:bg-red-900 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" id={'closeModal-'+message.id} onClick={closeModal}>
                                            Fermer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> : 
                            'Aucun'  
                        } 
                    </p>
                    <p className="mb-2 text-gray-700"><strong>Canal:</strong> { message.canal||'Chargement en cours...' }</p>
                    <p className="mb-2 text-gray-700"><strong>Nombre de Pièces Jointes:</strong> { message.piecesJointes ? message.piecesJointes.length : 'Chargement en cours...' }</p>
                    {/* <p className="mb-2 text-gray-700"><strong>Date d&apos;envoi:</strong> { message?.sendDate }</p> */}
                    {message.sendingDate ? <p className="mb-2 text-gray-700"><strong>Date d&apos;envoi:</strong>  ${message.sendingDate} </p> : ''}
                    <p className="mb-2 text-gray-700 break-all"><strong>Objet:</strong> { message.object || 'Chargement en cours...' } </p>
                    <p className="text-gray-700 text-justify break-all"><strong>Contenu: </strong>
                        { message.contenu || 'Chargement en cours...' }
                    </p>
                </div>
                <div className="m-5 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
                    <button onClick={() => navigate('/message')} className="bg-blue-700 text-white p-2 m-2 rounded w-[150px]"><i className="bx bx-arrow-back"></i> Retour</button>
                    <button onClick={() => navigate(`/message/${detailPathname[detailPathname.length-2]}/edit`)} className="bg-green-700 text-white p-2 m-2 rounded w-[150px]"><i className="bx bx-edit"></i> Editer</button>
                    {/* onClick={() => deleteMessage(detailPathname[detailPathname.length-2])} */}
                    <button onClick={openModal} id={"openModal-delete"+message.id} className="bg-red-700 text-white p-2 m-2 rounded w-[150px]"><i className="bx bx-trash"></i> Supprimer</button>
                    <div className="fixed inset-0 overflow-y-auto hidden" id={'modal-delete'+message.id}>
                        <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="relative bg-white w-[50%] flex flex-col justify-center items-center text-center p-6 rounded shadow-md">
                                <h2 className="text-2xl text-black font-bold mb-4">Voulez-vous vraiment supprimer ce message ?</h2>

                                <div className="flex gap-4"> {/* Ajout de la classe flex et gap-4 pour l'espacement entre les boutons */}
                                    <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" id={'confirm-delete'+message.id} onClick={() => deleteMessage(detailPathname[detailPathname.length-2])}>
                                        Supprimer
                                    </button>

                                    <button className="bg-red-600 hover:bg-red-900 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" id={'closeModal-delete'+message.id} onClick={closeModal}>
                                        Annuler
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}