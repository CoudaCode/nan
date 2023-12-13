import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ApiUrl } from "../../outils/URL";
import Cookie from "js-cookie";
import { IsCookies } from "../../outils/IsCookie";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useEffect, useState  } from "react";
import ModalContact from "./ModalContact";




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
        console.log('************************', data);
        return await axios.post(ApiUrl + 'groupe/create', data, {headers: {Authorization: 'token '+token}});
    } 
    const { register, handleSubmit, formState: { errors } } = useForm({ name: '', description: "", contact: '', canal: "" });
    const {mutate: contactRegister} = useMutation({
        mutationFn: data => saveContact(data),
        onSuccess: success => {
            toast.success(success.data.message);
            onClose();
        },
        onError: error => {
            document.querySelector('.FormSaveContact').querySelectorAll('input', 'buttton').forEach(item => item.disabled = false);
            toast.error(error.response.data.message);
        }
    });
    const onSubmit = (data) => contactRegister(data);

    // const handleDelete = () => { onConfirm(); };
    const initialvalueInput = {name: '', description: '', contact: '', canal: ''};
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
                <h3 className="text-2xl font-semibold mb-6 text-purple-600">Ajouter un liste de diffusion</h3>
                <label className="block mb-4">
                    <span className="text-gray-700">Nom du groupe : </span>
                    <input
                        type="text"
                        name="name"
                        value={valueInput.name}
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
                        value={valueInput.description}
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
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                        {...register("canal", {
                            require: true,
                            validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                        })}
                    >
                        <option value="">--- Choisir un canal ---</option>
                        <option value="email"> Via E-mail </option>
                        <option value="sms"> Via SMS </option>
                        <option value="whatsapp"> Via WhatsApp </option>
                    </select>
                    
                    {errors.canal && (<p className="text-red-500 text-sm">{errors.canal.message}</p>)}
                </label>
                <ModalContact register={register}/>

                <button type="button" className="bg-indigo-900 text-white  mb-9 rounded hover:bg-indigo-600" id="closeBtn">Confirmer</button>
                

                

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