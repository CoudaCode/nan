
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import Delete from "../Actions/Delete";


function ListingMessage(){
    const [AllMessage, SetAllGroupe] = useState([]);
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    useEffect(()=>{
        axios.get(ApiUrl+'/api/message/getAll', {headers: { Authorization: `token ${token}`}})
        .then(allGroupe => {
            if(allGroupe.data.status) SetAllGroupe(allGroupe.data.data);
        });
    }, []);

    const deletedElement = async event => Delete(event, 'message')
    
    
    const [pagesNumber, setPagesNumber] = useState(0);
    const MessagePerPage = 10;
    const pagesVisited = pagesNumber * MessagePerPage;
    const displayMessage = AllMessage.sort((a,b)=>a.object.localeCompare(b.object)).slice(pagesVisited, pagesVisited + MessagePerPage).map((item, index) => {
        return(
            <tr key={index}>
                <td><input type="checkbox" name="" className="input-checkbox" id={index}/></td>
                <td>{item.object.split(' ').slice(0, 3).join(' ')}...</td>
                <td>{item.contenu.split(' ').slice(0, 3).join(' ')}...</td>
                <td>{item.canal}</td>
                <td>{item.groupe.length ? 'Groupe' : 'Individuel'}</td>
                <td>{item.piecesJointes.length}</td>
                <td className="action-bttns">
                    <button className="edite" id={item._id}><a href={"/message/edite/"+item._id}><ion-icon name="create-outline"></ion-icon></a></button>
                    <button className="delete" id={item._id} onClick={deletedElement}><ion-icon name="trash-outline"></ion-icon></button>
                </td>
            </tr>
        )
    })

    const pageCount = Math.ceil(AllMessage.length / MessagePerPage);

    const changePage = ({selected})=>{
        setPagesNumber(selected);
    }

    return(
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h1>Messages de Difusions</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td><input type="checkbox" className="all" name="all" id="all"/></td>
                            <td>Sujet</td>
                            <td>Contenu</td>
                            <td>Canal</td>
                            <td>Type</td>
                            <td>Action</td>
                        </tr>
                    </thead>

                    <tbody className="tbody"> {displayMessage} </tbody>
                </table>
                <ReactPaginate 
                    previousLabel={'Précedent'}
                    nextLabel={'Suivant'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
            <div className="recentCustomers">
                <div className="cardHeader">
                    <h2>Favories</h2>
                </div>
                <table>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    
                </table>
            </div>


        </div>
    )
}

export default ListingMessage