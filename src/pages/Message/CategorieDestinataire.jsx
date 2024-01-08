import ListingContacts from "./ListingContacts";
import ListingGroupes from "./ListingGroupes";



export default function CategorieDestinataire(propos) {
    if(!propos.isOpen) return null;

    const onClose = propos.onClose;
    const openModalIndividuel = propos.openModalIndividuel;
    
    const handleChange = propos.handleChange;
    const register = propos.register;

    const openModalGroupe = propos.openModalGroupe;
    const modalIsOpenIndividuel = propos.modalIsOpenIndividuel;
    const closeModalIndividuel = propos.closeModalIndividuel;
    const modalIsOpenGroupe = propos.modalIsOpenGroupe;
    const closeModalGroupe = propos.closeModalGroupe;

    return (
        <div className="fixed rounded-lg inset-0 z-50  flex items-center justify-center">
            <div className="bg-gray-800 bg-opacity-75 inset-0">
                <div className="ListingContacts p-8 shadow-2xl checkeding flex flex-wrap">
                    <div className="bg-gray-200 p-2 rounded border border-gray-300 text-center">
                        <h2 className='text-blue-900 font-bold'>Catégorie de Destinataire</h2> 
                        <div className="flex m-5">
                            <button
                                type="button"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
                                onClick={() => openModalIndividuel()}
                            >
                                Individuel
                            </button>
                            <ListingContacts
                                isOpen={modalIsOpenIndividuel}
                                onClose={closeModalIndividuel}
                                handleChange={handleChange}
                                register={register}
                            />
                            <button
                                type="button"
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => openModalGroupe()}
                                >
                                Groupe
                            </button>
                            <ListingGroupes
                                isOpen={modalIsOpenGroupe}
                                onClose={closeModalGroupe}
                                handleChange={handleChange}
                                register={register}
                            />
                        </div>
                        <button type="button"  className='bg-red-500 hover:bg-red-700 rounded' onClick={onClose}>Fermer</button>
                    </div>
                </div>
            </div>
        </div> 
    )
}