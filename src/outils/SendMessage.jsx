import axios from "axios";
import { IsCookies } from "./IsCookie";
import { ApiUrl } from "./URL";
import { toast } from "react-toastify";


export function SendMessageByEmail(data){
    
    const { canal, contact, groupe, contenu } = data;
    let addresse = [];
    if(canal == 'email'){
        if(contact && contact.length) addresse = contact.map(item => item[canal]);
        else if(groupe && groupe.length) addresse = groupe.flatMap(item => item.contact).map(item => item[canal]);
        const body = {canal, contenu, contact: addresse};

        axios.post(ApiUrl+'message/email', body, {headers: {Authorization: `token ${IsCookies()}`}})
        .then(response => toast.success(response.data.message))
        .catch(error => console.log(error))

    } 
}


export function SendMessageBySms(){

}


export function SendMessageByWhatsApp(){

}