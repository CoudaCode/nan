import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ApiUrl from "../../components/ApiUrl/ApiUrl";


function ListGroupe(){
    
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    const [DataGroupe, setDataGroupe] = useState([]);
    useEffect(()=>{
        axios.get(ApiUrl+'/api/groupe/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allGroupe => {
            if(allGroupe.data.status) setDataGroupe(allGroupe.data.data);
        });
    }, [])



    return(
        <div className="recentOrders">
            <div className="cardHeader">
                <h2>Groupe de Difusion Recents</h2>
                <a href="/groupe" className="btn">Voir Tout</a>
            </div>
            <table>
                <thead>
                    <tr>
                        <td><input type="checkbox" className="all" name="all" id="all"/></td>
                        <td>Nom</td>
                        <td>Canal de Difusion</td>
                        <td>Description</td>
                    </tr>
                </thead>

                <tbody className="tbody">
                    {
                        DataGroupe.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 10).sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)).map((item, index) =>(
                            <tr key={index}>
                                <td><input type="checkbox"  name="" className="input-checkbox" id={index}/></td>
                                <td>{item.name}</td>
                                <td>{item.canal}</td>
                                <td>{item.description.split(' ').slice(0, 5).join(' ')}...</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListGroupe;