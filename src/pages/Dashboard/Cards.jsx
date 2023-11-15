import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import ApiUrl from "../../components/ApiUrl/ApiUrl.jsx";

function Cards(){
    const [contacts, setContacts] = useState([]);
    const [messages, setmessages] = useState([]);
    const [messageSned, setmessageSned] = useState([]);
    const [messagesPro, setmessagesPro] = useState([]);
    const [contactsFavo, setcontactsFavo] = useState([]);
    const [stockes, setstockes] = useState([]);
    const [Collaborateurs, setCollaborateurs] = useState([]);
    const token = Cookies.get("token");
    const headers = { Authorization: `token ${token}`}
    

    // useEffect(async ()=>{
    //     const fetchContacts = await axios.get(ApiUrl+'/api/contact/getAll', {headers});
    //     // const fetchMessages = await axios.get(ApiUrl+'/api/message/getAll', {headers});
    //     const fetchCollaborateurs = await axios.get(ApiUrl+'/api/agent/getAll', {headers});
    //     const fetchStockes = await axios.get(ApiUrl+'/api/stocke/getAll', {headers});
    //     // console.log('fetchContacts',fetchContacts);
    //     console.log('fetchCollaborateurs',fetchCollaborateurs);
    //     // console.log('fetchStockes',fetchStockes);
    //     // setContacts(fetchContacts.data);
    //     // setmessages(fetchMessages.data);
    //     // setstockes(fetchStockes.data);
    //     // setCollaborateurs(fetchCollaborateurs.data);

    // }, [])

    return(
        <div className="cardBox">
            <div className="card">
                <a href="">
                    <div>
                        <div className="numbers">8230</div>
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
                    <div className="numbers">6321</div>
                    <div className="cardName">Contacts Favoris</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                <div>
                    <div className="numbers">15</div>
                    <div className="cardName">Messages en attentes</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="send-sharp-outline"></ion-icon>
                </div>
                </a>
            </div>

            <div className="card">
                <a href="">
                <div>
                    <div className="numbers">1472</div>
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
                    <div className="numbers">97</div>
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
                    <div className="numbers">15</div>
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
                    <div className="numbers">120</div>
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
                    <div className="numbers">120</div>
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