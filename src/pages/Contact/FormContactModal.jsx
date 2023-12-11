import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ApiUrl } from "../../outils/URL";
import Cookie from "js-cookie";
import { IsCookies } from "../../outils/IsCookie";

import { useEffect, useState  } from "react";



function FormContactModal(props){
    // { isOpen, onClose, onConfirm, contact, statusForm }

    const isOpen = props.isOpen;
    const onClose = props.onClose;
    const onConfirm = props.onConfirm;
    const contact = props.contact;
    const statusForm = props.statusForm;
    if (!isOpen || !contact) return null;
    const token = IsCookies();
    const saveContact = async (data) => {
        document.querySelector('.FormSaveContact').querySelectorAll('input', 'buttton').forEach(item => item.disabled = true);
        return await axios.post(ApiUrl + 'contact/create', data, {headers: {Authorization: 'token '+token}});
    } 
    const { register, handleSubmit, formState: { errors } } = useForm({ fullname: '', email: "", sms: '', whatsapp: "" });
    const {mutate: contactRegister} = useMutation({
        mutationFn: data => saveContact(data),
        onSuccess: success => {
            toast.success(success.data.message);
            setTimeout(() => {
                window.location.reload();
            }, 3050);
        },
        onError: error => {
            document.querySelector('.FormSaveContact').querySelectorAll('input', 'buttton').forEach(item => item.disabled = false);
            toast.error(error.response.data.message);
        }
    });
    const onSubmit = (data) => contactRegister(data);

    // const handleDelete = () => { onConfirm(); };
    const initialvalueInput = {fullname: '', email: '', whatsapp: '', sms: ''};
    const [valueInput, setvalueInput] = useState(initialvalueInput);
    const handleChange = e => {
        const { name, value } = e.target;
        setvalueInput({ ...valueInput, [name]: value });
    };
    

    
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

        <div className="rounded-lg bg-white p-8 shadow-2xl z-10 w-[40rem]">
            <form className="FormSaveContact max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-2xl font-semibold mb-6 text-purple-600">Ajouter contact</h3>
                <label className="block mb-4">
                    <span className="text-gray-700">Nom et Prénom / Raison Sociale : </span>
                    <input
                        type="text"
                        name="fullname"
                        value={valueInput.fullname}
                        placeholder="Nom et Prénom / Raison Sociale"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                        {...register("fullname", {
                            require: true,
                            minLength: 2,
                            maxLength: 50,
                            validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                            
                        })}
                        autoComplete="fullname"
                        onChange={handleChange}
                    />
                    {errors.fullname && (<p className="text-red-500 text-sm">{errors.fullname.message}</p>)}
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Email :</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Adresse E-mail"
                        value={valueInput.email}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                        {...register("email", {
                            require: true,
                            minLength: 5,
                            maxLength: 50,
                            pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Veuillez entrer un adresse mail valide." },
                            validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                        })}
                        autoComplete="email"
                        onChange={handleChange}
                    />
                    {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Téléphone :(Pour SMS)</span>
                    <input
                        type="tel"
                        name="sms"
                        value={valueInput.sms}
                        placeholder="Adresse téléphonique"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                        {...register("sms", {
                            // require: true,
                            // minLength: 2,
                            // maxLength: 50,
                            // pattern: { value: /^\+\d{2,3}\d{7,}$/i, message: "Veuillez entrer un adresse téléphonique qui contient l'indicatif et qui contient au moins 10 fichres et pas de caractère accentiés et spéciaux." },
                            // validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                        })}
                        autoComplete="sms"
                        onChange={handleChange}
                    />
                    {errors.sms && (<p className="text-red-500 text-sm">{errors.sms.message}</p>)}
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">WhatsApp :</span>
                    <input
                        type="tel"
                        name="whatsapp"
                        value={valueInput.whatsapp}
                        placeholder="Adresse WhatsApp"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                        {...register("whatsapp", {
                            // require: true,
                            // minLength: 2,
                            // maxLength: 50,
                            // pattern: { value: /^\+\d{2,3}\d{7,}$/i, message: "Veuillez entrer un adresse WhatsApp qui contient l'indicatif et qui contient au moins 10 fichres et pas de caractère accentiés et spéciaux." },
                            // validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                        })}
                        onChange={handleChange}
                        autoComplete="whatsapp"
                    />
                    {errors.whatsapp && (<p className="text-red-500 text-sm">{errors.whatsapp.message}</p>)}
                </label>


                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" > Soumettre </button>
                    <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"> Fermer </button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default FormContactModal;