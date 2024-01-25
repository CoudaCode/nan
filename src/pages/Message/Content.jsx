import { useState } from 'react';

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
import { toast } from 'react-toastify';
import { ApiUrl } from '../../outils/URL';
import { IsCookies } from '../../outils/IsCookie';
import CategorieDestinataire from './CategorieDestinataire';
import FormDate from './FormDate';

function ContentMessage(){

    const [modalIsOpenCategorie, setModalIsOpenCategorie] = useState(false);

    const [modalIsOpenIndividuel, setModalIsOpenIndividuel] = useState(false);

    const [modalIsOpenGroupe, setModalIsOpenGroupe] = useState(false);

    const [modalIsOpenProgramming, setModalIsOpenProgramming] = useState(false);

    const initialvalueInput = {canal: '', object: '', contenu: '', piecesJointes: '', groupe: '', contact: '', toKnownChecked: '', sendingDate: ''};

    const [valueInput, setvalueInput] = useState(initialvalueInput);

    const openModalCategorie = () => setModalIsOpenCategorie(true);
    
    const closeModalCategorie = () => setModalIsOpenCategorie(false);

    const openModalIndividuel = () => setModalIsOpenIndividuel(true);
    
    const closeModalIndividuel = () => setModalIsOpenIndividuel(false);

    const openModalGroupe = () => setModalIsOpenGroupe(true);
    
    const closeModalGroupe = () => setModalIsOpenGroupe(false);

    const openModalProgramming = () => setModalIsOpenProgramming(true);
    
    const closeModalProgramming = () => {
        document.getElementById('sendingDate').value = '';
        valueInput.sendingDate = ''
        setModalIsOpenProgramming(false);
    } ;

    const confirming = () => setModalIsOpenProgramming(false);

    const save = async data => {
        const toKnownChecked = document.querySelector('#toKnownChecked');
        if(!toKnownChecked.value) return toast.error('Aucun contact ou liste de diffusion n\'est associé à ce message !')
        else if(toKnownChecked.value == 'forContact') delete data.groupe;
        else if(toKnownChecked.value == 'forGroupe') delete data.contact;
        
        const formData = new FormData();
        for(const key in data) {
            if(key== 'piecesJointes'){
                for (const cle in data[key]) {
                    formData.append(key, data[key][cle])
                }
            }else formData.append(key, data[key]);
        }
        return  axios.post(ApiUrl+'message/create', formData, {headers: {Authorization: `token ${IsCookies()}`}});
    }
    const {register, handleSubmit, formState: { errors }} = useForm({canal: '', object: '', contenu: '', piecesJointes: '', groupe: '', contact: '', toKnownChecked: '', sendingDate: ''});

    const {mutate: messageRegister} = useMutation({
        mutationFn: data => save(data),
        onSuccess: success => {
            toast.success(success.data.message);
            setTimeout(() => window.location.reload(), 3050);
        },
        onError: error => {
            document.querySelector('.FormSaveContact').querySelectorAll('input', 'buttton').forEach(item => item.disabled = false);
            toast.error(error.response.data.message);
        }
    });
    
    
    const handleChange = event => {
        const { name, value } = event.target;
        const ParentChecked = document.querySelector('.ListingContacts') || document.querySelector('.ListingGroupes');
        if(name == 'contact' && event.target.checked) valueInput.toKnownChecked = 'forContact';
        else if(name == 'groupe' && event.target.checked) valueInput.toKnownChecked = 'forGroupe';
        if(ParentChecked){
            const inputChecked = ParentChecked.querySelectorAll(`input[type='checkbox']:checked`);
            if(!inputChecked.length) valueInput.toKnownChecked = '';
        }
        setvalueInput({ ...valueInput, [name]: value });
    };

    const onSubmit = data => messageRegister(data);

   
    return(
        <div className="container flex mx-auto m-4">
            <div className="w-full ">
                <form className="bg-white shadow-md rounded px-8 pt-6" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <h2 className="mb-5 text-gray-900 font-bold text-center">Contenu Message</h2>
                    <div className="mb-5">
                        <div>
                            <a
                                className="bg-[#1d1b31] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer mb-4"
                                onClick={openModalCategorie}
                            >
                            <i className="bx bxs-contact"></i>
                            <span className="links_name m-2">Destinataires</span>
                            </a>
                        </div>

                        <CategorieDestinataire
                            isOpen={modalIsOpenCategorie}
                            onClose={closeModalCategorie}
                            closeFunction={closeModalCategorie}
                            openModalIndividuel={openModalIndividuel}
                            openModalGroupe={openModalGroupe}
                            closeModalCategorie={closeModalCategorie}
                            modalIsOpenIndividuel={modalIsOpenIndividuel}
                            closeModalIndividuel={closeModalIndividuel}
                            modalIsOpenGroupe={modalIsOpenGroupe}
                            closeModalGroupe={closeModalGroupe}
                            register={register}
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="m-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="object">Objet</label>
                        <input
                            className="shadow appearance-none rounded border border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="object"
                            type="text"
                            name="object"
                            placeholder="Objet"
                            {...register("object", {
                                require: true,
                                minLength: 2,
                                maxLength: 200,
                                validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                            })}
                            autoComplete="object"
                            onChange={handleChange}
                        />
                        {errors.object && (<p className="text-red-500 text-sm">{errors.object.message}</p>)}
                    </div>
                    <div className="m-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contenu"> Entrer le message </label>
                        <textarea
                            rows="13"  // Ajustez le nombre de lignes selon vos besoins
                            className="shadow appearance-none rounded border border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="contenu"
                            name="contenu"
                            // required
                            placeholder="Entrer le message"
                            {...register("contenu", {
                                require: true,
                                minLength: 2,
                                validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                            })}
                            autoComplete="contenu"
                            onChange={handleChange}
                        ></textarea>
                        {errors.contenu && (<p className="text-red-500 text-sm">{errors.contenu.message}</p>)}
                    </div>

                    <input
                        className='shadow appearance-none rounded border border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='toKnownChecked' 
                        name='toKnownChecked' 
                        {...register('toKnownChecked')} 
                        value={valueInput.toKnownChecked}
                        hidden
                    />

                    <div className="m-2 md:flex md:items-center items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                            Choisissez le canal d&lsquo;envoi :
                            </label>
                            <div className="flex flex-wrap">
                                <label className="mb-2 text-[#1d1b31] hover:text-blue-700 font-bold mr-9" htmlFor="sms">
                                    <input
                                        type="radio"
                                        name="canal"
                                        id="sms"
                                        value="sms"
                                        className="mr-2 leading-tight"
                                        {...register("canal", {
                                            required: "Veuillez choisir un canal d'envoi.",
                                        })}
                                        autoComplete="canal"
                                        onChange={handleChange}
                                    />
                                    Via SMS
                                </label>

                                <label className="mb-2 text-[#1d1b31] hover:text-blue-700 font-bold mr-9" htmlFor="whatsapp">
                                    <input
                                        type="radio"
                                        name="canal"
                                        value="whatsapp"
                                        id="whatsapp"
                                        className="mr-2 leading-tight"
                                        {...register("canal", {
                                            required: "Veuillez choisir un canal d'envoi.",
                                        })}
                                        autoComplete="canal"
                                        onChange={handleChange}
                                    />
                                    Via WhatsApp
                                </label>

                                <label className="mb-2 text-[#1d1b31] hover:text-blue-700 font-bold  mr-9" htmlFor="email">
                                    <input
                                        type="radio"
                                        name="canal"
                                        value="email"
                                        id="email"
                                        className="mr-2 leading-tight"
                                        {...register("canal", {
                                            required: "Veuillez choisir un canal d'envoi.",
                                        })}
                                        autoComplete="canal"
                                        onChange={handleChange}
                                    />
                                    Via Email
                                </label>
                            </div>
                            
                            {errors.canal && (<p className="text-red-500 text-sm">{errors.canal.message}</p>)}
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="piecesJointes">
                            Ajouter une image :
                            </label>
                            <input
                                type="file"
                                name="piecesJointes"
                                multiple
                                className="shadow appearance-none rounded border border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...register("piecesJointes")}
                                autoComplete="piecesJointes"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    
                    <div className="flex m-2 justify-center">
                        <button className="bg-[#1d1b31] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4" type="button"
                            onClick={openModalProgramming}
                        >
                            <i className="bx bxs-time"></i>
                            <span className="links_name">Programmer</span>
                        </button>

                        


                        
                        <FormDate 
                            isOpen={modalIsOpenProgramming}
                            onClose={closeModalProgramming}
                            confirming={confirming}
                            register={register}
                            handleChange={handleChange}
                            valueInput={valueInput}
                        />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )

}

export default ContentMessage;