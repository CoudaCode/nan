import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import UrlFrontEnt from "../../components/ApiUrl/UrlFrontEnt";
import axios from "axios";



function Groupe(){
    const {stateContact, setStateContact} = useState([]);
    let token = Cookies.get("NaN_Sen_Token_Secretly");
    let recupContacts = [];
    const headers = { Authorization: `token ${token}`};
    useEffect(()=>{
        axios.get(ApiUrl+'/api/contact/getAll', { headers: { Authorization: `token ${token}`} })
        .then(allContact => {
            if(allContact.data.status){
                recupContacts = allContact.data.data;
            }
        })
    }, []);



    const FilterContact = ''

    
    return(
        <div className="details" id="details-groupe">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h1>Créer Groupe</h1>
                        
                    </div>
                    <div className="content-form">
                        <form className="forms">
                            <div className="group-input">
                                <label htmlFor="whatsapp" className="label-form">Canal</label>
                                <select name="whatsapp" id="whatsapp" className="form-select" required onChange={FilterContact}>
                                    <option value="" disabled selected>--- Choisir ---</option>
                                    <option value="email">Groupe Email</option>
                                    <option value="sms">Groupe SMS</option>
                                    <option value="whatsapp">Groupe WhatsApp</option>
                                </select>
                            </div>
                            <div className="group-input">
                                <label htmlFor="name" className="label-form">Nom du Groupe</label>
                                <input type="text" className="form-control" name="name" id="name" placeholder="Nom du Groupe" required/>
                            </div>

                            <div className="group-input">
                                <label htmlFor="contact" className="label-form">Contacts</label>
                                <select name="contact" id="contact" className="form-select" multiple required>
                                    <option value="" disabled selected>--- Aucun contact disponible ---</option>
                                    <option value="email">Groupe Email</option>
                                    <option value="sms">Groupe SMS</option>
                                    <option value="whatsapp">Groupe WhatsApp</option>
                                    <option value="email">Groupe Email</option>
                                    <option value="sms">Groupe SMS</option>
                                    <option value="whatsapp">Groupe WhatsApp</option>
                                </select>
                            </div>

                            <div className="group-action">
                                <button type="reset"> Annuler</button>
                                <button type="submit"> Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="recentCustomers" id="recentCustomers-groupe">
                    <div className="cardHeader">
                        <h2>Rapport d&apos;ajout</h2>
                    </div>
                    <div className="rapport">
                        <div className="message">Favorable</div>
                        <div className="data-content"><span className="first">Mme/M : </span><span className="second">DJOBO NDRI</span></div>
                        <div className="data-content"><span className="first">E-mail : </span><span className="second">djobo@gmail.com</span></div>
                        <div className="data-content"><span className="first">Téléphone : </span><span className="second">+2001212457858</span></div>
                        <div className="data-content"><span className="first">WhatsApp : </span><span className="second">+2001212457858</span></div>
                        <div className="listing-all"><a className="list-link" href="">Voir la liste</a></div>
                    </div >
                </div>
            </div>
    )
}

export default Groupe;