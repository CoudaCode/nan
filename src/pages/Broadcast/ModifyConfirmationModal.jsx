import { useState, useEffect } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ApiUrl } from "../../outils/URL";
import Cookie from "js-cookie";
import { IsCookies } from "../../outils/IsCookie";
import ModalContact from "./ModalContact";



function ModifyConfirmationModal(props){
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const groupeData = props.groupeData;

  if (!isOpen || !groupeData) return null;
  const { canal, contact, description, name, _id} = groupeData;
  const token = IsCookies();
  
  const saveContact = async (data) => {
    console.log(document.querySelector('.FormSaveContact'))
    document.querySelector('.FormSaveContact').querySelectorAll('input', 'buttton', 'select').forEach(item => item.disabled = true);
    if(!data.contact){
        data.contact = contact.map(item=>item._id);
    }
    return await axios.put(ApiUrl + 'groupe/update/'+_id, data, {headers: {Authorization: 'token '+token}});
  }
//   console.log('********************', contact.map(item=>item._id))
  const { register, handleSubmit, formState: { errors } } = useForm({ canal, description, name, contact: contact.map(item=>item._id) });
  const {mutate: contactUpdate} = useMutation({
      mutationFn: data => saveContact(data),
      onSuccess: success => {
        toast.success(success.data.message);
        onClose();
        const TrLigne = document.getElementById('ligne-'+_id);
        TrLigne.classList.toggle('updated');
        setTimeout(() => TrLigne.classList.toggle('updated'), 3000);
      },
      onError: error => {
        document.querySelector('.FormSaveContact').querySelectorAll('input', 'buttton', 'select').forEach(item => item.disabled = false);
        toast.error(error.response.data.message);
      }
  });

  const initialFormData = { canal, contact: contact.map(item=>item._id), description, name, hiddenField: _id };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const checkeding = document.querySelector('.checkeding')
    const nMember = document.getElementById('nMember');
    const allInputChecked = checkeding.querySelectorAll('input:checked');
    const longue = allInputChecked.length;
    nMember.innerHTML = (longue ? longue : 'Aucun') + ` membre${(longue>1 ? 's' : '')}`;
  };

  const onSubmit = data => contactUpdate(data);

  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
      <div className="rounded-lg bg-white p-8 shadow-2xl z-10 w-[40rem]">
            <form className="FormSaveContact max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-2xl font-semibold mb-6 text-purple-600">Ajouter un liste de diffusion</h3>
                <label className="block mb-4">
                    <span className="text-gray-700">Nom du groupe : </span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Nom et Prénom / Raison Sociale"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                        {...register("name", {
                            require: true,
                            minLength: 2,
                            maxLength: 50,
                            validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                        })}
                        autoComplete="name"
                        onChange={handleChange}
                    />
                    {errors.name && (<p className="text-red-500 text-sm">{errors.name.message}</p>)}
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Description du groupe :</span>
                    <input
                        type="description"
                        name="description"
                        placeholder="Description du groupe"
                        value={formData.description}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                        {...register("description", {
                            require: true,
                            minLength: 5,
                            maxLength: 150,
                            validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                        })}
                        autoComplete="description"
                        onChange={handleChange}
                    />
                    {errors.description && (<p className="text-red-500 text-sm">{errors.description.message}</p>)}
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Canal de diffusion : </span>
                    <select
                        name="canal"
                        value={formData.canal}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                        {...register("canal")}
                        autoComplete="canal"
                        onChange={handleChange}
                    >
                        <option value="email" selected={canal==='email' ? true : false}> Via E-mail </option>
                        <option value="sms" selected={canal==='sms' ? true : false}> Via SMS </option>
                        <option value="whatsapp" selected={canal==='whatsapp' ? true : false}> Via WhatsApp </option>
                    </select>
                    
                    {errors.canal && (<p className="text-red-500 text-sm">{errors.canal.message}</p>)}
                </label>
                <ModalContact register={register} contactChecked={contact} handleChange={handleChange}/>

                <button type="button" className="bg-indigo-500 text-white  mb-9 rounded hover:bg-indigo-419" id="nMember">Aucun membre</button>

                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" > Soumettre </button>
                    <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"> Fermer </button>
                </div>
            </form>
        </div>

      
    </div>
  );
};

export default ModifyConfirmationModal;