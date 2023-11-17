import axios from "axios";
import { useState, useEffect } from "react";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import Cookies from "js-cookie";


function Message(){
    const [state, setState] = useState([[], []]);
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    useEffect(()=>{
        const radio = document.querySelectorAll('input[type=radio]');
        [...radio].map(item => {
            item.addEventListener('change', (event) => {
                const groupInputCanal = event.target.closest('form').querySelector('#group-input-canal');
                const groupInputcontact = event.target.closest('form').querySelector('#group-input-contact');
                const groupInputgroupe = event.target.closest('form').querySelector('#group-input-groupe');
                groupInputCanal.style.display = 'block';
                if(event.target.value === 'onGroupe'){
                    groupInputCanal.value = '';
                    [...groupInputCanal.querySelectorAll('option')].map(item =>{if(!item.value) item.selected = true});
                    groupInputgroupe.style.display = 'block';
                    groupInputcontact.style.display = 'none';
                    groupInputgroupe.querySelector('select').required = true;
                    groupInputgroupe.querySelector('select').innerHTML = '<option value="" disabled selected>--- Aucun groupe disponible ---</option>';
                    groupInputcontact.querySelector('select').value = '';
                    groupInputcontact.querySelector('select').required = false;
                }else{
                    groupInputCanal.value = '';
                    [...groupInputCanal.querySelectorAll('option')].map(item =>{if(!item.value) item.selected = true});
                    groupInputgroupe.style.display = 'none';
                    groupInputcontact.style.display = 'block';
                    groupInputgroupe.querySelector('select').required = false;
                    groupInputgroupe.querySelector('select').value = '';
                    groupInputcontact.querySelector('select').required = true;
                    groupInputcontact.querySelector('select').innerHTML = '<option value="" disabled selected>--- Aucun contact disponible ---</option>';
                }
            })
        });
    });
    useEffect(()=>{
        let table = {};
        const baliseCanal = document.querySelector("select#canal-message");
        
        const baliseContact = document.querySelector("select#select-contact");
        const baliseGroupe = document.querySelector("select#select-groupe");
        axios.get(ApiUrl+'/api/groupe/getAll', { headers: { Authorization: `token ${token}`} })
        .then(allGroupe => {
            if(allGroupe.data.status){
                table.goupeDifusion = allGroupe.data.data;
                setState(table);
            }
        })

        axios.get(ApiUrl+'/api/contact/getAll', { headers: { Authorization: `token ${token}`} })
        .then(allContact => {
            if(allContact.data.status){
                table.contatDifusion = allContact.data.data;
                setState(table);
            }
        });

        baliseCanal.addEventListener('change', event => {
            const radio = document.querySelector("input[type='radio']:checked");
            if(table.goupeDifusion && radio.value === 'onGroupe'){
                const goupeDifusion = table.goupeDifusion.filter(item => item.canal === event.target.value);
                baliseGroupe.innerHTML = '';
                goupeDifusion.map(item => baliseGroupe.innerHTML += `<option value='${item._id}-${item.contact}'>${item.name}</option>`)
                
            }else if(table.contatDifusion && radio.value === 'onIndividuel'){
                baliseContact.innerHTML = '';
                table.contatDifusion.map(item => {
                    if(item[event.target.value]) baliseContact.innerHTML += `<option value='${item._id}-${item[event.target.value]}'>${item.fullname}</option>`;
                })
            }
        })
    }, []);

    

    return(
        <div className="details" id="details-message">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h1>Créer Message</h1>
                    </div>
                    <div className="content-form">
                        <form className="forms">
                            <div className="group-input">
                                <label htmlFor="mode" className="label-form">Mode de Transmission</label>
                                <div className="mode-form">
                                    <label htmlFor="onGroupe" className="groupe-label" >Message Groupé : <input type="radio" value={'onGroupe'} className="form-radio" name="mode" id="onGroupe" required/></label>
                                    <label htmlFor="onIndividuel" className="groupe-label" >Individuellement : <input type="radio" value={'onIndividuel'} className="form-radio" name="mode" id="onIndividuel" required/></label>
                                </div>
                            </div>
                            <div className="group-input" id="group-input-canal">
                                <label htmlFor="canal" className="label-form">Canal</label>
                                <select name="canal" id="canal-message" className="form-select" required >
                                    <option value="" disabled selected>--- Canal de difusion ---</option>
                                    <option value="email">Groupe Email</option>
                                    <option value="sms">Groupe SMS</option>
                                    <option value="whatsapp">Groupe WhatsApp</option>
                                </select>
                            </div>

                            <div className="group-input" id="group-input-groupe">
                                <label htmlFor="groupe" className="label-form">Groupe de difusion</label>
                                <select name="groupe" id="select-groupe" className="form-select" multiple>
                                    <option value="" disabled selected>--- Aucun groupe disponible ---</option>
                                </select>
                            </div>

                            <div className="group-input" id="group-input-contact">
                                <label htmlFor="contact" className="label-form">Contacts</label>
                                <select name="contact" id="select-contact" className="form-select" multiple>
                                    <option value="" disabled selected>--- Aucun contact disponible ---</option>
                                </select>
                            </div>

                            <div className="group-input">
                                <label htmlFor="object" className="label-form">Objet</label>
                                <input type="text" className="form-control" name="object" id="object" placeholder="Nom du Groupe" required/>
                            </div>

                            <div className="group-input">
                                <label htmlFor="contenu" className="label-form">Contenu Textuel</label>
                                <textarea name="contenu" id="contenu" className="form-control" cols="64" rows="10" style={{minHeight: 200+'px', maxHeight:200+'px'}} placeholder="Saisir le contenu" required ></textarea>
                            </div>

                            

                            <div className="group-input">
                                <label htmlFor="piecesJointes" className="label-form">Pièces Jointes</label>
                                <input type="file" className="form-control" name="piecesJointes" id="piecesJointes" placeholder="Pièces Jointes" multiple/>
                            </div>

                            <div className="group-action">
                                <button type="reset"> Annuler</button>
                                <button type="submit"> Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="recentCustomers" id="recentCustomers-message">
                    <div className="cardHeader">
                        <h2>Rapport d&apos;ajout</h2>
                    </div>
                    <div className="rapport">
                        {/* <div className="message">Favorable</div>
                        <div className="data-content"><span className="first">Canal : </span><span className="second">WhatsApp</span></div>
                        <div className="data-content"><span className="first">Contacts : </span><span className="second">djobo@gmail.com</span></div>
                        <div className="data-content"><span className="first">Objet : </span><span className="second">Creative Cloud: Please verify your email address</span></div>
                        <div className="data-content"><span className="first">Contenu : </span><span className="second"><h1>You&apos;re nearly there</h1><p>Welcome to Creative Cloud, FRANCOIS. Before we can get started, we need to quickly verify your email address.</p><p>Click the link below and sign in using your new Adobe ID: devdjobo@gmail.com.</p></span></div>
                        <div className="data-content"><span className="first">Pièces Jointes : </span><span className="second">+2001212457858</span></div>
                        <div className="listing-all"><a className="list-link" href="">Voir la liste</a></div> */}
                    </div >
                </div>
            </div>
    )
}

export default Message;