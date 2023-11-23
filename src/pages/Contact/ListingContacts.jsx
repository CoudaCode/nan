
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import Delete from "../Actions/Delete";



function ListingContact(){
    const [AllContacts, SetAllContact] = useState([]);
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    useEffect(()=>{
        axios.get(ApiUrl+'/api/contact/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allContact => {
            if(allContact.data.status) SetAllContact(allContact.data.data);
        });
    }, []);

    const deletedElement = async event => Delete(event, 'contact');
    
    const [pagesNumber, setPagesNumber] = useState(0);
    const ContactsPerPage = 10;
    const pagesVisited = pagesNumber * ContactsPerPage;
    const displayContacts = AllContacts.slice(pagesVisited, pagesVisited + ContactsPerPage).map((item, index) => {
        return(
            <tr key={index}>
                <td><input type="checkbox"  name="" className="input-checkbox" id={index}/></td>
                <td>{item.fullname}</td>
                <td>{item.email ? item.email : 'Vide'}</td>
                <td>{item.sms ? item.sms : 'Vide'}</td>
                <td>{item.whatsapp ? item.whatsapp : 'Vide'}</td>
                <td className="action-bttns">
                    <button className="edite" id={item._id}><a href={"/contact/edite/"+item._id}><ion-icon name="create-outline"></ion-icon></a></button>
                    <button className="delete" id={item._id} onClick={deletedElement}><ion-icon name="trash-outline"></ion-icon></button>
                </td>
            </tr>
        )
    })

    const pageCount = Math.ceil(AllContacts.length / ContactsPerPage);

    const changePage = ({selected})=>{
        setPagesNumber(selected);
    }

    return(
        <div className="details-edite">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h1>Contacts de Difusion</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td><input type="checkbox" className="all" name="all" id="all"/></td>
                            <td>Nom & Prénom(s)</td>
                            <td>Email</td>
                            <td>Téléphone</td>
                            <td>WhatsApp</td>
                        </tr>
                    </thead>

                    <tbody className="tbody">
                        {displayContacts}
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
            {/* <div className="recentCustomers">
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
            </div> */}


        </div>
    )
}

export default ListingContact