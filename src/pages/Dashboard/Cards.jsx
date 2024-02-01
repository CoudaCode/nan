import axios from "axios";
import { useEffect, useState } from "react";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import Cookies from "js-cookie";

function Cards(){
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    const [stateCollaborateur, setStateCollaborateur] = useState(0);
    const [stateContac, setStateContac] = useState(0);
    const [stateGroupo, setStateGroupo] = useState(0);
    const [stateMessage, setStateMessage] = useState(0);

    const [stateStocke, setStateStocke] = useState(0);

    useEffect(()=>{
        axios.get(ApiUrl+'api/agent/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allCollabo => {
            if(allCollabo.data.status){
                setStateCollaborateur(allCollabo.data.data.length)
            }
        });

        axios.get(ApiUrl+'api/contact/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allContact => {
            if(allContact.data.status){
                setStateContac(allContact.data.data.length)
            }
        });

        axios.get(ApiUrl+'api/groupe/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allGroupe => {
            if(allGroupe.data.status){
                setStateGroupo(allGroupe.data.data.length)
            }
        })

        axios.get(ApiUrl+'api/message/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allMessage => {
            if(allMessage.data.status){
                setStateMessage(allMessage.data.data.length)
            }
        })


        axios.get(ApiUrl+'api/stocke/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allStocke => {
            if(allStocke.data.status){
                setStateStocke(allStocke.data.data.length)
            }
        })
    }, [token])

    return(
        <div className="cardBox">
            <div className="card">
                <a href="">
                    <div>
                        <div className="numbers">{stateContac}</div>
                        <div className="cardName">Contacts</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                    <div>
                        <div className="numbers">{stateMessage}</div>
                        <div className="cardName">Messages Difusions</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                <div>
                    <div className="numbers">undefined</div>
                    <div className="cardName">Messages en attentes</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                <div>
                    <div className="numbers">undefined</div>
                    <div className="cardName">Messages Envoyés</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                <div>
                    <div className="numbers">{stateStocke}</div>
                    <div className="cardName">Stockes Enregistrés</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                <div>
                    <div className="numbers">{stateCollaborateur}</div>
                    <div className="cardName">Collaborateurs</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                <div>
                    <div className="numbers">{stateGroupo}</div>
                    <div className="cardName">Groupes de Difusions</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                <div>
                    <div className="numbers">3</div>
                    <div className="cardName">Canaux de Difusions</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Cards;