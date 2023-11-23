
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import Delete from "../Actions/Delete";


function ListingCollaborateur(){
    const [AllCollaborateur, SetAllGroupe] = useState([]);
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    useEffect(()=>{
        axios.get(ApiUrl+'/api/agent/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allGroupe => {
            if(allGroupe.data.status) SetAllGroupe(allGroupe.data.data);
        });
    }, []);

    

    const deletedElement = async event => Delete(event, 'agent')
    
    const [pagesNumber, setPagesNumber] = useState(0);
    const collaborateurPerPage = 10;
    const pagesVisited = pagesNumber * collaborateurPerPage;
    const displaycollaborateur = AllCollaborateur.slice(pagesVisited, pagesVisited + collaborateurPerPage).map((item, index) => {
        return(
            <tr key={index}>
                <td><input type="checkbox"  name="" className="input-checkbox" id={index}/></td>
                <td>{item.fullname}</td>
                <td>{item.email}</td>
                <td>{item.telephone}</td>
                <td>{item.role} </td>
                <td className="action-bttns">
                    <button className="edite" id={item._id}><a href={"/agent/edite/"+item._id}><ion-icon name="create-outline"></ion-icon></a></button>
                    <button className="delete" id={item._id} onClick={deletedElement}><ion-icon name="trash-outline"></ion-icon></button>
                </td>
            </tr>
        )
    })

    const pageCount = Math.ceil(AllCollaborateur.length / collaborateurPerPage);

    const changePage = ({selected})=>{
        setPagesNumber(selected);
    }

    return(
        <div className="details-edite">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h1>collaborateur de Difusion</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td><input type="checkbox" className="all" name="all" id="all"/></td>
                            <td>Nom & Prénom</td>
                            <td>E-mail</td>
                            <td>Téléphone</td>
                            <td>Rôle</td>
                            <td>Action</td>
                        </tr>
                    </thead>

                    <tbody className="tbody">
                        {displaycollaborateur}
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
        </div>
    )
}

export default ListingCollaborateur