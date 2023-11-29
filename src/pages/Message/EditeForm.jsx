import { useForm } from "react-hook-form";
import { GetElement } from "../Actions/GetElement";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import Cookies from "js-cookie";


function EditeForm(){
    const path = useLocation().pathname;
    const [state, setState] = useState({});
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    useEffect(()=>{
        axios.get(ApiUrl+'/api/message/getById/'+path.split('/')[3], {headers: {Authorization: 'token '+Cookies.get('NaN_Digit_Sender_Token_Secretly')}})
        .then(result => {
            if(result.data){
                
                setState(result.data.data);
            }
        })
    }, []);

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
                    
                    groupInputgroupe.querySelector('select').required = true;
                    groupInputgroupe.querySelector('select').innerHTML = '<option value="" disabled selected>--- Aucun groupe disponible ---</option>';
                    groupInputcontact.style.display = 'none';
                    groupInputcontact.querySelector('select').required = false;
                    groupInputcontact.querySelector('select').value = '';
                    groupInputcontact.querySelector('select').textContent = '';
                }else{
                    groupInputCanal.value = '';
                    [...groupInputCanal.querySelectorAll('option')].map(item =>{if(!item.value) item.selected = true});
                    groupInputgroupe.style.display = 'none';
                    groupInputcontact.style.display = 'block';
                    groupInputgroupe.querySelector('select').required = false;
                    groupInputgroupe.querySelector('select').value = '';
                    groupInputgroupe.querySelector('select').textContent = '';
                    groupInputcontact.querySelector('select').required = true;
                    groupInputcontact.querySelector('select').innerHTML = '<option value="" disabled selected>--- Aucun contact disponible ---</option>';
                }
            })
        });
    }, []);

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
                baliseGroupe.textContent = '';
                const dataContacts = [];
                goupeDifusion.map(item =>{
                    item.contact.map(el => dataContacts.push(el[event.target.value]));
                    baliseGroupe.innerHTML += `<option value='${item._id}'>${item.name}</option>`
                })
                
            }else if(table.contatDifusion && radio.value === 'onIndividuel'){
                baliseContact.textContent = '';
                
                table.contatDifusion.map(item => {
                    if(item[event.target.value]) baliseContact.innerHTML += `<option value='${item._id}'>${item.fullname}</option>`;
                })
            }
        })
    }, []);

<<<<<<< HEAD

    console.log('--------------------',state);
=======
>>>>>>> c229243d70c18ff91e125a61be000e319648b709
    const optionSelects = (params)=>{
        return(
            <>
                <option value="email" selected = {params.canal == 'email' ? true : false}>Groupe Email</option> 
                <option value="sms" selected = {params.canal == 'sms' ? true : false}>Groupe SMS</option> 
                <option value="whatsapp"  selected = {params.canal == 'whatsapp' ? true : false}>Groupe whatsapp</option>
            </>
        )
    }

    const getById =  GetElement('contact', 'getById', path.split('/')[3]);
    // console.log('++++++++++++++++++++++++++++++++++++++++++',getById.then(r=>r));
    const { register, handleSubmit  } = useForm({ canal:"", groupe: "", contact: "",  object: "", contenu: "", piecesJointes: ""});
    return(
        <div className="content-form">
            <form className="forms" id="form-message" /*onSubmit={handleSubmit(onSubmit)}*/ encType="multipart/form-data">
                
                <div className="group-input">
                    <label htmlFor="mode" className="label-form">Mode de Transmission</label>
                    <div className="mode-form">
                        <label htmlFor="onGroupe" className="groupe-label" >Message Groupé : <input type="radio" value={'onGroupe'} className="form-radio" name="mode" id="onGroupe" {...register("mode", { require: true })} required/></label>
                        <label htmlFor="onIndividuel" className="groupe-label" >Individuellement : <input type="radio" value={'onIndividuel'} className="form-radio" name="mode" id="onIndividuel" {...register("mode", { require: true })} required/></label>
                    </div>
                </div>

                <div className="group-input" id="group-input-canal">
                    <label htmlFor="canal" className="label-form">Canal</label>
                    <select name="canal" id="canal-message" className="form-select" {...register("canal", { require: true })} required >{optionSelects(state)}</select>
                </div>

                <div className="group-input" id="group-input-groupe">
                    <label htmlFor="groupe" className="label-form">Groupe de difusion</label>
                    <select name="groupe" id="select-groupe" className="form-select" {...register("groupe")} multiple>
                        <option value="" disabled selected>--- Aucun groupe disponible ---</option>
                    </select>
                </div>

                <div className="group-input" id="group-input-contact">
                    <label htmlFor="contact" className="label-form">Contacts</label>
                    <select name="contact" id="select-contact" className="form-select" {...register("contact")} multiple>
                        <option value="" disabled selected>--- Aucun contact disponible ---</option>
                    </select>
                </div>

                <div className="group-input">
                    <label htmlFor="object" className="label-form">Objet</label>
                    <input type="text" className="form-control" name="object" id="object" placeholder="Nom du Groupe" {...register("object", { require: true })} required/>
                </div>

                <div className="group-input">
                    <label htmlFor="contenu" className="label-form">Contenu Textuel</label>
                    <textarea name="contenu" id="contenu" className="form-control" cols="64" rows="10" style={{minHeight: 200+'px', maxHeight:200+'px'}} placeholder="Saisir le contenu" {...register("contenu", { require: true })} required ></textarea>
                </div>

                <div className="group-input">
                    <label htmlFor="piecesJointes" className="label-form">Pièces Jointes</label>
                    <input type="file" className="form-control" name="piecesJointes" id="piecesJointes" {...register("piecesJointes", { require: true })} multiple/>
                </div>

                <div className="group-action">
                    <button type="reset" id="reset-message"> Annuler</button>
                    <button type="submit" id="submit-message"> Soumettre</button>
                </div>
            </form>
        </div>
    )
}

export default EditeForm;