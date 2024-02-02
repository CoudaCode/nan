// import axios from "axios";

import { IsCookies } from "./IsCookie";
import { ApiUrl } from "./URL";
import { toast } from "react-toastify";
import axios from "axios";

export function SendMessageByEmail(data, closed){

    const id = closed.target.id.replace('confirm-send', '');
    const IsMustClosed = document.getElementById(closed.target.id.replace('confirm-send', 'modal-send'));
    const { canal, contact, groupe, contenu, object } = data;
    let addresse = [];
    if(canal == 'email'){
        if(contact && contact.length) addresse = contact.map(item => item[canal]);
        else if(groupe && groupe.length) addresse = groupe.flatMap(item => item.contact).map(item => item[canal]);
        const body = {canal, object, contenu, contact: addresse, id: data.id};
        axios.post(ApiUrl+'message/createEmail', body, {headers: {Authorization: `token ${IsCookies()}`}})
        .then(response => {
            toast.success(response.data.message);
            IsMustClosed.classList.add('hidden');
            axios.put(ApiUrl+`message/updateSendingMessage/${id}`, {}, {headers: {Authorization: `token ${IsCookies()}`}})
            .then(() => {
                window.location.href('/message')
            })
        })
        .catch(() => console.log())
    }else if(canal === 'whatsapp'){
        // alert('whatsapp');
    }else if(canal === 'sms'){
        // alert('sms');
    }else{
        // alert('aucn');
    }

    
}


export function SendMessageBySms(){
// 
}


export function SendMessageByWhatsApp(){
// 
}