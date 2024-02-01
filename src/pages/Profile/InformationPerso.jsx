import { toast } from "react-toastify";
import { IsCookies } from "../../outils/IsCookie";
import { ApiUrl } from "../../outils/URL";
import axios from 'axios';
import { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export default function InformationPerso(propos) {
    const IsMyInformations = propos.IsMyInformations;
    const [IsMyEntreprise, SetMyEntreprise] = useState(IsMyInformations);

    const handleChange = event => {
        const {name, value} = event.target;
        SetMyEntreprise({...IsMyEntreprise, [name]:value});
    }

    const updateInforPersonnelle = async (data) => {
        document.querySelector('.FormUpdateEntreprise').querySelectorAll('input', 'buttton', 'select').forEach(item => item.disabled = true);
        const id = IsMyEntreprise.id;
        delete IsMyEntreprise.id;
        return await axios.put(ApiUrl + 'user/update/'+id, data, {headers: {Authorization: `token ${IsCookies()}`}});
    }
      
    const { register, handleSubmit, formState: { errors } } = useForm({fullname: IsMyEntreprise.fullname, email: IsMyEntreprise.email, nationalite: IsMyEntreprise.nationalite, telephone: IsMyEntreprise.telephone});
    const {mutate: contactUpdate} = useMutation({
        mutationFn: data => updateInforPersonnelle(data),
        onSuccess: success => {
            toast.success(success.data.message);
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        },
        onError: error => {
            toast.error(error.response.data.message);
            document.querySelector('.FormUpdateEntreprise').querySelectorAll('input', 'buttton', 'select').forEach(item => item.disabled = false);
        }
    });

    let onSubmit = data => contactUpdate(data);


    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-900/10 p-9">
            <h2 className="text-base font-semibold leading-7 text-white">Informations Personnelles</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="FormUpdateEntreprise">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-3 overflow-Y-auto">
                    <div className="m-5">
                        <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-white"> Nom et Prénom(s)</label>
                        <div className="">
                            <input
                                type="text"
                                name="fullname"
                                id="fullname"
                                value={IsMyEntreprise?.fullname}
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("fullname", {
                                    require: true, minLength: 2, maxLength: 100,
                                    validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                                })}
                                autoComplete="fullname"
                                onChange={handleChange}
                            />
                            {errors.fullname && (<p className="text-red-500 text-sm">{errors.fullname.message}</p>)}
                        </div>
                    </div>

                    <div className="m-5">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white"> Adresse E-mail</label>
                        <div className="">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={IsMyEntreprise?.email}
                                disabled
                                className="block w-full rounded-md border-0 p-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("email", {
                                    require: true, minLength: 2, maxLength: 100,
                                    pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Veuillez entrer une adresse mail valide." },
                                    validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                                })}
                                autoComplete="email"
                                onChange={handleChange}
                            />
                            {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
                        </div>
                    </div>

                    <div className="m-5">
                        <label htmlFor="telephone" className="block text-sm font-medium leading-6 text-white"> Téléphone</label>
                        <div className="">
                            <input
                                type="tel"
                                name="telephone"
                                id="telephone"
                                value={IsMyEntreprise?.telephone}
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("telephone", {
                                    require: true,
                                    minLength: 2,
                                    maxLength: 50,
                                    pattern: { value: /^\+\d{2,3}\d{7,}$/i, message: "Veuillez entrer une adresse téléphonique qui contient l'indicatif et qui contient au moins 8 autres fichres et pas de caractères accentiés et spéciaux." },
                                    validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                                })}
                                autoComplete="telephone"
                                onChange={handleChange}
                            />
                            {errors.telephone && (<p className="text-red-500 text-sm">{errors.telephone.message}</p>)}
                        </div>
                    </div>

                    <div className="m-5">
                        <label htmlFor="nationalite" className="block text-sm font-medium leading-6 text-white">Nationalité</label>
                        <div className="">
                            <input      
                                type="text"
                                name="nationalite"
                                id="nationalite"
                                value={IsMyEntreprise?.nationalite}
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("nationalite", {
                                    require: true, minLength: 2, maxLength: 100,
                                    validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                                })}
                                autoComplete="nationalite"
                                onChange={handleChange}
                            />
                            {errors.nationalite && (<p className="text-red-500 text-sm">{errors.nationalite.message}</p>)}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold rounded bg-red-600 hover:bg-red-900 text-white">Annuler</button>
                        <button type="submit"
                         className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}