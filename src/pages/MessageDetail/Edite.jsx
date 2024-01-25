import axios from "axios";
import { useEffect, useState } from "react";
import { ApiUrl } from "../../outils/URL";
import { IsCookies } from "../../outils/IsCookie";
import ContentMessage from '../Message/Content';

export default function Edite(){
  const [message, SetMessage] = useState({});
    const [, SetContactsOrGroupes] = useState([]);
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

    return(
      <ContentMessage
        message={message}
      />
    )

}
