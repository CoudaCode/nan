import { GetElement } from "../Actions/GetElement";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import Cookies from "js-cookie";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";



function EditeForm(){
    const path = useLocation().pathname;
    const [state, setState] = useState({});
    const [stateMessageById, setStateMstateMessageById] = useState({});
    const [stateAllGroupes, setStateAllGroupes] = useState([]);
    // const [stateVe, setstateVe] = useState([]);
    const [stateAllContacts, setStateAllContacts] = useState([]);
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    let rapport = undefined;
    
    useEffect(()=>{
        axios.get(ApiUrl+'/api/message/getById/'+path.split('/')[3], {headers: {Authorization: 'token '+Cookies.get('NaN_Digit_Sender_Token_Secretly')}})
        .then(result => {
            if(result.data){
                const myform = document.getElementById('form-message');
                myform.contenu.value = result.data.data.contenu
                myform.object.value = result.data.data.object;
                myform.canal.value = result.data.data.canal;
                // myform.canal.style.display = 'block';
                const gr = [];
                const conct = [];
                console.log('000000000000000000000000000000000000000', result.data.data);
                if(result.data.data.groupe.length) {
                    // myform.mode[0].checked = true
                   
                    myform.groupe.innerHTML = '';
                    myform.groupe.required = true;
                    console.log(myform.groupe);
                    result.data.data.groupe.map(item =>{
                        gr.push(item._id);
                        myform.groupe.innerHTML += `<option value='${item._id}' selected>${item.name}</option>`

                    });
                    
                    myform.groupe.value = JSON.stringify(gr);
                    // myform.contact.value = gr;
                    console.log('000000000000000000000000000000000000000  gr',JSON.stringify(gr), 'r', myform.groupe);

                } 
                if(result.data.data.contact.length) result.data.data.contact.map(item => conct.push(item._id));
                
                setState(result.data.data);
            }
        })

        axios.get(ApiUrl+'/api/groupe/getAll', {headers: {Authorization: 'token '+Cookies.get('NaN_Digit_Sender_Token_Secretly')}})
        .then(result => {
            if(result.data){
                setStateAllGroupes(result.data.data);
                
            }
        })

        axios.get(ApiUrl+'/api/contact/getAll', {headers: {Authorization: 'token '+Cookies.get('NaN_Digit_Sender_Token_Secretly')}})
        .then(result => {
            if(result.data){
                setStateAllContacts(result.data.data);
            }
        });

        
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
        let collection = {};
        let collectGroup = [];
        let collectConta = [];
        const baliseCanal = document.querySelector("select#canal-message");
        const baliseContact = document.querySelector("select#select-contact");
        const baliseGroupe = document.querySelector("select#select-groupe");
        axios.get(ApiUrl+'/api/groupe/getAll', { headers: { Authorization: `token ${token}`} })
        .then(allGroupe => {
            if(allGroupe.data.status){
                table.goupeDifusion = allGroupe.data.data;
                table.goupeDifusion.map(e=>collectGroup.push(e._id));
                setState(table);
            }
        })

        axios.get(ApiUrl+'/api/contact/getAll', { headers: { Authorization: `token ${token}`} })
        .then(allContact => {
            if(allContact.data.status){
                table.contatDifusion = allContact.data.data;
                table.contatDifusion.map(e=>collectConta.push(e._id));
                setState(table);
            }
        });

        axios.get(ApiUrl+'/api/message/getById/'+path.split('/')[3], {headers: {Authorization: 'token '+Cookies.get('NaN_Digit_Sender_Token_Secretly')}})
        .then(result => {
            if(result.data){
                result.data.data.groupe.length ? collection.groupe = result.data.data.groupe : collection.contact = result.data.data.contact;
                setStateMstateMessageById(result.data.data)
            }
        })
        
        baliseCanal.addEventListener('change', event => {
            const radio = document.querySelector("input[type='radio']:checked");
            const collectos = [];
            // const documentGroupe = document.getElementById('group-input-groupe');
            // const documentContact = document.getElementById('group-input-contact');
            if(table.goupeDifusion && radio.value === 'onGroupe'){
                const goupeDifusion = table.goupeDifusion.filter(item => item.canal === event.target.value);
                baliseGroupe.textContent = '';
                const dataContacts = [];
                if(collection.groupe && collection.groupe.length){
                    collection.groupe.map(item => collectos.push(item._id));
                    collectos.map(i=>console.log('les type', typeof i));
                    goupeDifusion.map(item =>{
                        item.contact.map(el => dataContacts.push(el[event.target.value]));
                        if(collectos.includes(item._id)){
                            baliseGroupe.innerHTML += `<option value='${item._id}' selected>${ item.name }</option>)`;
                        }else{
                            baliseGroupe.innerHTML += `<option value='${item._id}'>${ item.name }</option>)`
                        }
                    })
                }else{
                    goupeDifusion.map(item =>{
                        item.contact.map(el => dataContacts.push(el[event.target.value]));
                        baliseGroupe.innerHTML += `<option value='${item._id}'>${ item.name }</option>`;
                    })
                }
                
            }else if(table.contatDifusion && radio.value === 'onIndividuel'){
                baliseContact.textContent = '';
                if(collection.contact && collection.contact.length){
                    collection.contact.map(item => collectos.push(item._id));
                    table.contatDifusion.map(item => {
                        if(item[event.target.value]) baliseContact.innerHTML += `<option value='${item._id}' selected='${collectos.includes(item._d) ? true : false }'>${ item.fullname }</option>`;
                    })
                }else{
                    table.contatDifusion.map(item => {
                        if(item[event.target.value]) baliseContact.innerHTML += `<option value='${item._id}'>${ item.fullname }</option>`;
                    })
                }
            }
        })
    }, []);

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
    const defautGroupe = [];
    const defautContact = [];
    stateMessageById.groupe && stateMessageById.groupe.length ? stateMessageById.groupe.map(i=>defautGroupe.push(i._id)) : '';
    stateMessageById.contact && stateMessageById.contact.length ? stateMessageById.contact.map(i=>defautContact.push(i._id)) : '';
    // console.log('all', defautGroupe);
    const { register, control, handleSubmit  } = useForm({ canal: stateMessageById.canal, groupe: defautGroupe, contact: defautContact,  object: stateMessageById.object, contenu: 'stateMessageById.contenu', piecesJointes: ""});
    const { mutate: message } = useMutation({
        mutationFn: async send => {
            // [...document.querySelector('form#form-message').querySelectorAll('input, select, textarea, #reset-message, #submit-message')].map(item => item.disabled = true);
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
            console.log('5896+966+++969+++699++69', send);
            // let response = await axios.post(ApiUrl+'/api/message/update', formData, { headers: { Authorization: `token ${token}`} });
            // return response;
        },
        onSuccess: success => {
            toast.success(success.data.message);
            
        },
        onError: error =>{
            toast.error(error.response.data.message)
        }
    });
    // console.log(stateMessageById.contenu);
    let onSubmit = data => message(data);
    return(
        <div className="content-form">
            <form className="forms" id="form-message" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                
                <div className="group-input">
                    <label htmlFor="mode" className="label-form">Mode de Transmission</label>
                    <div className="mode-form">
                        <label htmlFor="onGroupe" className="groupe-label" >Message Groupé : <input type="radio" defaultValue={'onGroupe'} className="form-radio" name="mode" id="onGroupe" {...register("mode", { require: true })} required/></label>
                        <label htmlFor="onIndividuel" className="groupe-label" >Individuellement : <input type="radio" defaultValue={'onIndividuel'}  className="form-radio" name="mode" id="onIndividuel" {...register("mode", { require: true })} required/></label>
                    </div>
                </div>

                <div className="group-input" id="group-input-canal">
                    <label htmlFor="canal" className="label-form">Canal</label>
                    
                    <select name="canal" id="canal-message" className="form-select" {...register("canal", { require: true })} required >{optionSelects(state)}</select>
                </div>

                <div className="group-input" id="group-input-groupe" style={{display: stateMessageById.groupe && stateMessageById.groupe.length ? 'block' : 'none'}}>
                    <label htmlFor="groupe" className="label-form">Groupe de difusion</label>
                    <select name="groupe" id="select-groupe" className="form-select" {...register("groupe")} multiple>
                    <option value="" disabled selected>--- Aucun groupe disponible ---</option>
                    </select>
                </div>

                <div className="group-input" id="group-input-contact" style={{display: stateMessageById.contact && stateMessageById.contact.length ? 'block' : 'none'}}>
                    <label htmlFor="contact" className="label-form">Contacts</label>
                    <select name="contact" id="select-contact" className="form-select" {...register("contact")} multiple>
                        <option value="" disabled selected>--- Aucun contact disponible ---</option>
                    </select>
                </div>

                <div className="group-input">
                    <label htmlFor="object" className="label-form">Objet</label>
                    <input type="text" className="form-control" name="object" id="object"  placeholder="object du message" {...register("object", { require: true,})} required/>
                </div>

                <div className="group-input">
                    <label htmlFor="contenu" className="label-form">Contenu Textuel</label>
                    {/* <Controller name="contenu"  control={control} defaultValue={stateMessageById.contenu} render={({ field }) => <textarea   className='form-control' cols="64" rows="10" style={{minHeight: 200+'px', maxHeight:200+'px'}} {...field}/>} {...register("contenu", { require: true })} required /> */}
                    <textarea name="contenu" id="contenu" className="form-control" cols="64" rows="10" style={{minHeight: 200+'px', maxHeight:200+'px'}} placeholder="Saisir le contenu du message" {...register("contenu", { require: true })}  required  ></textarea>
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