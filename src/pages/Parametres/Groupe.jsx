import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import { useForm } from "react-hook-form";

import axios from "axios";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

function Groupe(){
    const [state, setState] = useState([])
    let rapport = undefined;
    let token = Cookies.get("NaN_Sen_Token_Secretly");
    console.log('AVANT useEffect');
    useEffect(()=>{
        console.log('useEffect useEffect');
        axios.get(ApiUrl+'/api/contact/getAll', { headers: { Authorization: `token ${token}`} })
        .then(allContact => {
            if(allContact.data.status){
                setState(allContact.data.data);
            }
        })
    }, []);



    const FilterContact = (event) =>{
        const selectContacts = event.target.closest('form.forms').querySelector('select#contact');
        let formatHtml = '';
        console.log('Dom FilterContact', state);
        if(state.length){
            if(event.target.value === 'email'){
                state.map(item =>{
                    if(item.email) formatHtml += `<option value="${item.email+'-'+item._id}">${item.fullname}</option>`;
                })
            }else if(event.target.value === 'sms'){
                state.map(item =>{
                    if(item.sms) formatHtml += `<option value="${item.sms+'-'+item._id}">${item.fullname}</option>`;
                })
            }else if(event.target.value === 'whatsapp'){
                state.map(item =>{
                    if(item.whatsapp) formatHtml += `<option value="${item.whatsapp+'-'+item._id}">${item.fullname}</option>`;
                })
            }
        }
        selectContacts.innerHTML = formatHtml;
    };

    const { register, handleSubmit  } = useForm({ canal:"", contact: "", name: "" });
    const { mutate: groupe } = useMutation({
        mutationFn: async send => {
            [...document.querySelector('form#form-groupe').querySelectorAll('input, select, textarea, #reset-groupe, #submit-groupe')].map(item => item.disabled = true);
            let response = await axios.post(ApiUrl+'/api/groupe/create', send, { headers: { Authorization: `token ${token}`} });
            return response;
        },
        onSuccess: success => {
          toast.success(success.data.message);
          
          const data = success.data.data;
          console.log(data);
          rapport = document.querySelector('#recentCustomers-groupe').querySelector('#rapport');
        //   const formContact = document.getElementById('form-groupe');
          rapport.classList.remove('error');
          rapport.classList.add('success');
          rapport.innerHTML = `<div class="message success">${success.data.message}</div>
          <div class="data-content"><span class="first">Nom du groupe : </span><span class="second">${data.name}</span></div>
          <div class="data-content"><span class="first">Nombre de contacts : </span><span class="second">${data.contact.length} contact(s)</span></div>
          <div class="data-content"><span class="first">Canal de difusion : </span><span class="second">${data.canal}</span></div>
          <div class="data-content"><span class="first">Description : </span><span class="second">${data.description}</span></div>
          <div class="listing-all"><a class="list-link" href="${window.location.origin}/groupe">Voir la liste</a></div>`;
          [...document.querySelector('form#form-groupe').querySelectorAll('input, select, textarea, #reset-groupe, #submit-groupe')].map(item => item.disabled = false);
          [...document.querySelector('form#form-groupe').querySelectorAll('input, select, textarea')].map(item => item.value = '');
        },
        onError: error =>{
          toast.error(error.response.data.message);
          [...document.querySelector('form#form-groupe').querySelectorAll('input, select, textarea, #reset-groupe, #submit-groupe')].map(item => item.disabled = false);
          rapport = document.querySelector('#recentCustomers-groupe').querySelector('#rapport');
          rapport.classList.remove('success');
          rapport.classList.add('error');
          rapport.innerHTML = `<div class="message error">${error.response.data.message}</div>`;
        }
      });

      let onSubmit = data => groupe(data);


    
    return(
        <div className="details" id="details-groupe">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h1>Créer Groupe</h1>
                    </div>
                    <div className="content-form">
                        <form className="forms" id="form-groupe" onSubmit={handleSubmit(onSubmit)}>
                            <div className="group-input">
                                <label htmlFor="canal" className="label-form">Canal</label>
                                <select name="canal" id="canal" className="form-select" required  {...register("canal", { require: true })} onChange={FilterContact}>
                                    <option value="" disabled selected>--- Choisir ---</option>
                                    <option value="email">Groupe Email</option>
                                    <option value="sms">Groupe SMS</option>
                                    <option value="whatsapp">Groupe WhatsApp</option>
                                </select>
                            </div>

                            <div className="group-input">
                                <label htmlFor="contact" className="label-form">Contacts</label>
                                <select name="contact" id="contact" className="form-select" multiple required {...register("contact", { require: true})}>
                                    <option value="" disabled selected>--- Aucun contact disponible ---</option>
                                </select>
                            </div>

                            <div className="group-input">
                                <label htmlFor="name" className="label-form">Nom du Groupe</label>
                                <input type="text" className="form-control" name="name" id="name" placeholder="Nom du Groupe" required {...register("name", { require: true, minLength: 2, maxLength: 100 })}/>
                            </div>

                            

                            <div className="group-input">
                                <label htmlFor="description" className="label-form">Description du Groupe</label>
                                <textarea name="description" id="description" className="form-control" cols="64" rows="10" style={{minHeight: 200+'px', maxHeight:200+'px'}} placeholder="Décrivez le groupe" required {...register("description", { require: true})}></textarea>
                            </div>

                            <div className="group-action">
                                <button type="reset" id="reset-groupe"> Annuler</button>
                                <button type="submit" id="submit-groupe"> Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="recentCustomers" id="recentCustomers-groupe">
                    <div className="cardHeader">
                        <h2>Rapport d&apos;ajout</h2>
                    </div>
                    <div className="rapport" id="rapport">
                        {/* <div className="message">Favorable</div>
                        <div className="data-content"><span className="first">Mme/M : </span><span className="second">DJOBO NDRI</span></div>
                        <div className="data-content"><span className="first">E-mail : </span><span className="second">djobo@gmail.com</span></div>
                        <div className="data-content"><span className="first">Téléphone : </span><span className="second">+2001212457858</span></div>
                        <div className="data-content"><span className="first">WhatsApp : </span><span className="second">+2001212457858</span></div>
                        <div className="listing-all"><a className="list-link" href="">Voir la liste</a></div> */}
                    </div >
                </div>
            </div>
    )
}

export default Groupe;