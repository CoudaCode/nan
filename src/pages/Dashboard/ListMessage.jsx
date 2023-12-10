import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ApiUrl from "../../components/ApiUrl/ApiUrl";

function ListMessage(){
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    const [DataMessage, setDataMessage] = useState([]);
    useEffect(()=>{
        axios.get(ApiUrl+'/api/message/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allMessage => {
            if(allMessage.data.status) setDataMessage(allMessage.data.data);
        });
    }, []);

    return(
        <div className="recentOrders">
            <div className="cardHeader">
                <h2>Messages de Difusion Recents</h2>
                <a href="/message" className="btn">Voir Tout</a>
            </div>
            <table>
                <thead>
                    <tr>
                        <td><input type="checkbox" className="all" name="all" id="all"/></td>
                        <td>Sujet</td>
                        <td>Contenu</td>
                        <td>Canal</td>
                        <td>Type</td>
                        <td>Piéce Jointe</td>
                        <td>Rédacteur</td>
                    </tr>
                </thead>

                <tbody className="tbody">
                    {
                        DataMessage.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 10).sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)).map((item, index) =>(
                            <tr key={index}>
                                <td><input type="checkbox"  name="" className="input-checkbox" id={index}/></td>
                                <td>{item.object.split(' ').slice(0, 3).join(' ')}...</td>
                                <td>{item.contenu.split(' ').slice(0, 3).join(' ')}...</td>
                                <td>{item.Canal}</td>
                                <td>{item.groupe.length ? 'Groupe' : 'Individuel'}</td>
                                <td>{item.piecesJointes.length}</td>
                                <td>{item.user ? item.user.fullname : item.agent.fullname}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListMessage;