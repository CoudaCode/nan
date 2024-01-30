import { useState } from "react";
import { DeleteCookies } from "../../outils/IsCookie";


export default function Deconnexion() {
    const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const handleLogout = () => {
    DeleteCookies();
    setConfirmationModalOpen(false);
    setTimeout(() => window.location.reload(), 1500);
    };
    return (
        <>
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
        </>
    )
}