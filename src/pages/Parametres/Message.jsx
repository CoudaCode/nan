import axios from "axios";
import { useState, useEffect } from "react";
import ApiUrl from "../../components/ApiUrl/ApiUrl";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { IsCookies } from "../../outils/IsCookie";



function Message(){
    const [, setState] = useState([[], []]);
    let rapport = undefined;
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
        axios.get(ApiUrl+'/api/groupe/getAll', { headers: { Authorization: `token ${IsCookies()}`} })
        .then(allGroupe => {
            if(allGroupe.data.status){
                table.goupeDifusion = allGroupe.data.data;
                setState(table);
            }
        })

        axios.get(ApiUrl+'/api/contact/getAll', { headers: { Authorization: `token ${IsCookies()}`} })
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
                    baliseGroupe.innerHTML += `<option value='${item.id}'>${item.name}</option>`
                })
                
            }else if(table.contatDifusion && radio.value === 'onIndividuel'){
                baliseContact.textContent = '';
                table.contatDifusion.map(item => {
                    if(item[event.target.value]) baliseContact.innerHTML += `<option value='${item.id}'>${item.fullname}</option>`;
                })
            }
        })
    }, []);

    const { register, handleSubmit  } = useForm({ canal:"", groupe: "", contact: "",  object: "", contenu: "", piecesJointes: ""});
    const { mutate: message } = useMutation({
        mutationFn: async send => {
            [...document.querySelector('form#form-message').querySelectorAll('input, select, textarea, #reset-message, #submit-message')].map(item => item.disabled = true);
            send.mode == 'onGroupe' ? delete send.contact  : delete send.groupe;
            const formData = new FormData();

            if(!Object.entries(send.piecesJointes).length) delete send.piecesJointes;

            for (const key in send) {
                
                if(key==='piecesJointes'){
                    [...send[key]].map(item => formData.append(key, item));
                }else if(key === 'contact' || key === 'groupe'){
                    formData.append(key, [...send[key]]);
                }else{
                    formData.append(key, send[key]);
                }
            }

            let response = await axios.post(ApiUrl+'/api/message/create', formData, { headers: { Authorization: `token ${IsCookies()}`} });
            return response;
        },
        onSuccess: success => {
            toast.success(success.data.message);
            const data = success.data.data;
            console.table(data);
            rapport = document.querySelector('#recentCustomers-message').querySelector('#rapport');
            rapport.classList.remove('error');
            rapport.classList.add('success');
            rapport.innerHTML = `<div class="message success">${success.data.message}</div>
            <div class="data-content"><span class="first">Object : </span><span class="second">${data.object}</span></div>
            <div class="data-content"><span class="first">Contenu : </span><span class="second">${data.contenu}</span></div>
            <div class="data-content"><span class="first"> ${data.contact.length ? 'Nombre de groupes': 'Nombre de contacts'} : </span><span class="second">${data.contact.length ? data.contact.length: data.groupe.length} contact(s)</span></div>
            <div class="data-content"><span class="first">Canal de difusion : </span><span class="second">${data.canal}</span></div>
            <div class="data-content"><span class="first">Pièces Jointes : </span><span class="second">${data.piecesJointes.length ? data.piecesJointes.length + 'pièce(s) jointe(s)' : 'Aucune pièce jointe'}</span></div>
            <div class="listing-all"><a class="list-link" href="${window.location.origin}/message">Voir la liste</a></div>`;
            [...document.querySelector('form#form-message').querySelectorAll('input, select, textarea, #reset-message, #submit-message')].map(item => item.disabled = false);
            [...document.querySelector('form#form-message').querySelectorAll('input, select, textarea')].map(item => item.value = '');
        },
        onError: error =>{
            toast.error(error.response.data.message);
            [...document.querySelector('form#form-message').querySelectorAll('input, select, textarea, #reset-message, #submit-message')].map(item => item.disabled = false);
            rapport = document.querySelector('#recentCustomers-message').querySelector('#rapport');
            rapport.classList.remove('success');
            rapport.classList.add('error');
            rapport.innerHTML = `<div class="message error">${error.response.data.message}</div>`;
        }
    });

    let onSubmit = data => message(data);

    return(
        <div className="details" id="details-message">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h1>Créer Message</h1>
                </div>
                <div className="content-form">
                    <form className="forms" id="form-message" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                        
                        <div className="group-input">
                            <label htmlFor="mode" className="label-form">Mode de Transmission</label>
                            <div className="mode-form">
                                <label htmlFor="onGroupe" className="groupe-label" >Message Groupé : <input type="radio" value={'onGroupe'} className="form-radio" name="mode" id="onGroupe" {...register("mode", { require: true })} required/></label>
                                <label htmlFor="onIndividuel" className="groupe-label" >Individuellement : <input type="radio" value={'onIndividuel'} className="form-radio" name="mode" id="onIndividuel" {...register("mode", { require: true })} required/></label>
                            </div>
                        </div>

                        <div className="group-input" id="group-input-canal">
                            <label htmlFor="canal" className="label-form">Canal</label>
                            <select name="canal" id="canal-message" className="form-select" {...register("canal", { require: true })} required >
                                <option value="" disabled selected>--- Canal de difusion ---</option>
                                <option value="email">Groupe Email</option>
                                <option value="sms">Groupe SMS</option>
                                <option value="whatsapp">Groupe WhatsApp</option>
                            </select>
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
            </div>

            <div className="recentCustomers" id="recentCustomers-message">
                <div className="cardHeader">
                    <h2>Rapport d&apos;ajout</h2>
                </div>
                <div className="rapport" id="rapport"></div >
            </div>
        </div>
    )
}

export default Message;