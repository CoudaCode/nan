import { Link } from "react-router-dom";
import { IsCookies } from "../../outils/IsCookie";

export default function NotFound() {
    const handleGoBack = () => {
        window.history.back(); // Revenir à la page précédente
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="mb-4 text-6xl font-semibold text-purple-500">404</h1>
            <p className="mb-4 text-lg text-white font-bold mb-5">Page non trouvée !.</p>
            <div className="animate-bounce">
                <svg className="mx-auto h-16 w-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            </div>
            <p className="mt-4 text-white">Retour à l&apos;<Link to={IsCookies() ? "/dashboard" : "/"} className="text-blue-500">accueil </Link>?</p>
            <p className="mt-2 text-white">Ou page <span className="cursor-pointer text-blue-500" onClick={handleGoBack}>précedente</span> ?</p>
        </div>
    )
}