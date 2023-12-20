import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ApiUrl from "../../components/ApiUrl/ApiUrl";

function ListContact(){
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    const [DataContact, setDataContact] = useState([]);
    useEffect(()=>{
        axios.get(ApiUrl+'/api/contact/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allCollabo => {
            if(allCollabo.data.status) setDataContact(allCollabo.data.data);
        });
    }, [])

    return(
        <div className="recentOrders">
            <div className="cardHeader">
                <h2>Contacts Recents</h2>
                <a href="/contact" className="btn">Voir Tout</a>
            </div>
            <table>
                <thead>
                    <tr>
                        <td><input type="checkbox" className="all" name="all" id="all"/></td>
                        <td>Nom & Prénom(s)</td>
                        <td>Adresse Email</td>
                        <td>Adresse Phone</td>
                        <td>Adresse WhatsApp</td>
                    </tr>
                </thead>

                <tbody className="tbody">
                    {
                        DataContact.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 11).sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)).map((item, index) =>(
                            <tr key={index}>
                                <td><input type="checkbox"  name="" className="input-checkbox" id={index}/></td>
                                <td>{item.fullname}</td>
                                <td>{item.email ? item.email : 'Vide'}</td>
                                <td>{item.sms ? item.sms : 'Vide'}</td>
                                <td>{item.whatsapp ? item.whatsapp : 'Vide'}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListContact;