
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import Delete from "../Actions/Delete";


function ListingGroupe(){
    const [AllGroupes, SetAllGroupe] = useState([]);
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    useEffect(()=>{
        axios.get(ApiUrl+'api/groupe/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allGroupe => {
            if(allGroupe.data.status) SetAllGroupe(allGroupe.data.data);
        });
    }, []);

    

    const deletedElement = async event => Delete(event, 'groupe')
    
    const [pagesNumber, setPagesNumber] = useState(0);
    const groupesPerPage = 10;
    const pagesVisited = pagesNumber * groupesPerPage;
    const displayGroupes = AllGroupes.slice(pagesVisited, pagesVisited + groupesPerPage).map((item, index) => {
        return(
            <tr key={index}>
                <td><input type="checkbox"  name="" className="input-checkbox" id={index}/></td>
                <td>{item.name}</td>
                <td>{item.canal}</td>
                <td>{item.contact.length} contact(s)</td>
                <td>{item.description.split(' ').slice(0, 4).join(' ')} </td>
                <td className="action-bttns">
                    <button className="edite" id={item.id}><a href={"/groupe/edite/"+item.id}><ion-icon name="create-outline"></ion-icon></a></button>
                    <button className="delete" id={item.id} onClick={deletedElement}><ion-icon name="trash-outline"></ion-icon></button>
                </td>
            </tr>
        )
    })

    const pageCount = Math.ceil(AllGroupes.length / groupesPerPage);

    const changePage = ({selected})=>{
        setPagesNumber(selected);
    }

    return(
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h1>Groupes de Difusion</h1>
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

                    <tbody className="tbody">
                        {displayGroupes}
                    </tbody>
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

export default ListingGroupe