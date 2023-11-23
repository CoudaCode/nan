import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const VerifyCookies = ()=>{
    if(!Cookies.get("NaN_Digit_Sender_Token_Secretly")) {
        toast.error('Session expirée, veuillez-vous authentifier !');
        window.location.href = "/connexion";
    }
}