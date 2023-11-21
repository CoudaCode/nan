import axios from "axios";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import Cookies from "js-cookie";

export const GetElement = async (model, methode, reference) => {
    let response = null;
    await axios.get(ApiUrl+'/api/'+model+'/'+methode+'/'+reference, {headers: {Authorization: 'token '+Cookies.get('NaN_Digit_Sender_Token_Secretly')}})
    .then(res => response = res);
    return response;
} 