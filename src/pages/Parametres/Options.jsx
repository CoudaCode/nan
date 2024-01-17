import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import Cookies from "js-cookie";

function Options(){
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    const [stateCollaborateur, setStateCollaborateur] = useState(0);
    const [stateContac, setStateContac] = useState(0);
    const [stateGroupo, setStateGroupo] = useState(0);
    const [stateMessage, setStateMessage] = useState(0);
    const path = useLocation().pathname;
    const validePath = ['/parametres/collaborateur', '/parametres/contact', '/parametres/groupe', '/parametres/message'];
    if(!validePath.includes(path)) window.location.href = "/parametres/collaborateur";
    
    useEffect(()=>{
        const activation = () => { 
            const allDetail = [...document.querySelectorAll('.details')];
            const isOption = document.getElementById('card-'+path.split('/')[2]);
            allDetail.map(item => {
                if(item.id.includes(isOption.id.split('-')[1])){
                    item.style.display = 'grid';
                    isOption.setAttribute('active', 'active');
                }
                else item.style.display = 'none';
                
            });
        }
        activation();

        axios.get(ApiUrl+'/api/agent/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allCollabo => {
            if(allCollabo.data.status) setStateCollaborateur(allCollabo.data.data.length);
        });

        axios.get(ApiUrl+'/api/contact/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allCollabo => {
            if(allCollabo.data.status) setStateContac(allCollabo.data.data.length);
        });

        axios.get(ApiUrl+'/api/groupe/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allCollabo => {
            if(allCollabo.data.status) setStateGroupo(allCollabo.data.data.length);
        })

        axios.get(ApiUrl+'/api/message/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allCollabo => {
            if(allCollabo.data.status) setStateMessage(allCollabo.data.data.length);
        })
    }, []);


    return(
        <div className="cardBox">
            <div className="card" id="card-collaborateur" >
                <a href="/parametres/collaborateur">
                    <div>
                        <div className="numbers">{stateCollaborateur}</div>
                        <div className="cardName">Créer Collaborateurs</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name="bookmarks-outline"></ion-icon>
                    </div>
                </a>
            </div>

            <div className="card" id="card-contact" >
                <a href="/parametres/contact">
                <div>
                    <div className="numbers">{stateContac}</div>
                    <div className="cardName">Créer Contacts</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="call-outline"></ion-icon>
                </div>
                </a>
            </div>

            <div className="card" id="card-groupe" >
                <a href="/parametres/groupe">
                <div>
                    <div className="numbers">{stateGroupo}</div>
                    <div className="cardName">Créer Groupes</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="people-outline"></ion-icon>
                </div>
                </a>
            </div>

            <div className="card" id="card-message" >
                <a href="/parametres/message">
                <div>
                    <div className="numbers">{stateMessage}</div>
                    <div className="cardName">Créer Messages</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="mail-outline"></ion-icon>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Options;