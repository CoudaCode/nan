import EditeForm from "./EditeForm";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import './Contact.css';


function EditeContact(){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      
    const pathname = useLocation().pathname;
    const id = pathname.split('/')[3];
    const [myState, setMyState] = useState({});
    useEffect(()=>{
        let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
        axios.get(ApiUrl+'/api/contact/getById/'+id, {headers: {Authorization: 'token '+token}})
        .then(result => {
            console.log(result.data.data);
            setMyState(result.data.data)
        })
    }, [])
    return(
        <>
        <div className="details-edite">
            <div className="recentOrders-info">
                <div className="-info">
                    <div className="cardHeader">
                        <h1>Apperçu Globale de Contact</h1>
                    </div>
                    <div className="title-date">
                        <div className="info"><span className="label">Nom & Prénom / Raison Sociale </span>: <span>{myState.fullname}</span></div>
                        <div className="info"><span className="label">Adresse E-mail </span>: <span>{myState.email}</span></div>
                        <div className="info"><span className="label">Adresse Téléphonqie (SMS) </span>: <span>{myState.sms}</span></div>
                        <div className="info"><span className="label">Adresse WhatsApp </span>: <span>{myState.whatsapp}</span></div>
                        <div className="detail-user">
                            <div className="info-use"><span>Créer par : </span> <span><a href={ myState.agent ? "/profile/"+myState.agent._id : ''}>{myState.user ? myState.user.fullname : myState.agent ? myState.agent.fullname : ''}</a></span> <span>Date :</span> <span>{new Date(myState.createdAt).toLocaleTimeString('fr-FR', options).split(' ')[0].charAt(0).toLocaleUpperCase()+new Date(myState.createdAt).toLocaleTimeString('fr-FR', options).split(' ')[0].slice(1)+ ', '+ new Date(myState.createdAt).toLocaleTimeString('fr-FR', options).split(' ').slice(1).join(' ')}</span> </div>
                            <div className="info-use"><span>Modifier par : </span> <span><a href={ myState.agent ? "/profile/"+myState.agent._id : ''}>{myState.user ? myState.user.fullname : myState.agent ? myState.agent.fullname : ''}</a></span> <span>Date :</span> <span> {new Date(myState.updatedAt).toLocaleTimeString('fr-FR', options).split(' ')[0].charAt(0).toLocaleUpperCase()+new Date(myState.updatedAt).toLocaleTimeString('fr-FR', options).split(' ')[0].slice(1)+ ', '+ new Date(myState.updatedAt).toLocaleTimeString('fr-FR', options).split(' ').slice(1).join(' ')}</span></div>
                        </div>
                    </div>
                </div>
                <div className="-info">
                    <div className="cardHeader">
                    </div>
                    <div className="title-date">
                        <button ><a href="/contact">Voir Tous</a></button>
                    </div>
                </div>
            </div>
            


            
        </div>
        <div className="details-edite" id="details-message">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h1>Modifier Contact</h1>
                </div>
                <EditeForm />
            </div>
        </div>
        </>
    )
}

export default EditeContact;