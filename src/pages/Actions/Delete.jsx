import axios from "axios";
import { toast } from "react-toastify";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import Cookies from "js-cookie";

const Delete = async function(event, model){
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    const ligne = event.target.closest('tr');
    ligne.disabled = true;
    const buttonActive = event.target.closest('button');
    const _id = buttonActive.id;
    buttonActive.disabled = true;
    axios.delete(ApiUrl+'/api/'+model+'/delete/'+_id, { headers: { Authorization: `token ${token}`}})
    .then(response => {
        ligne.classList.add('deleted-succes')
        if(response.data){
            toast.success(response.data.message);
        }
        setTimeout(() => {
            ligne.remove();
        }, 2000);
    })
    .catch(error=>{
        buttonActive.disabled = false;
        toast.error(error.response.data.message);
    });
}

export default Delete;