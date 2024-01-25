import { toast } from "react-toastify";
import { IsCookies } from "../../outils/IsCookie";
import { ApiUrl } from "../../outils/URL";
import axios from 'axios';
import { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";




export default function InformationEntreprise(propos) {
    const IsEntreprise = propos.IsEntreprise;
    const [IsMyEntreprise, SetMyEntreprise] = useState(IsEntreprise);

    const handleChange = event => {
        const {name, value} = event.target;
        SetMyEntreprise({...IsMyEntreprise, [name]:value});
    }

    const updateInforEntreprise = async (data) => {
        document.querySelector('.FormUpdateEntreprise').querySelectorAll('input', 'buttton', 'select').forEach(item => item.disabled = true);
        const id = IsMyEntreprise.id;
        delete IsMyEntreprise.id;
        return await axios.put(ApiUrl + 'entreprise/update/'+id, data, {headers: {Authorization: `token ${IsCookies()}`}});
    }
      
    const { register, handleSubmit, formState: { errors } } = useForm({ ...IsMyEntreprise });
    const {mutate: contactUpdate} = useMutation({
        mutationFn: data => updateInforEntreprise(data),
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
          <h2 className="text-base font-semibold leading-7 text-white">Informations Entreprise</h2>
          <p className="mt-1 text-sm  text-gray-600">Use a permanent address where you can receive mail.</p>
  
          <form onSubmit={handleSubmit(onSubmit)} className="FormUpdateEntreprise">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-3 overflow-Y-auto">
                  <div className="m-5">
                      <label htmlFor="raisonSociale" className="block text-sm font-medium leading-6 text-white"> Raison Sociale</label>
                      <div className="">
                          <input
                                type="text"
                                name="raisonSociale"
                                id="raisonSociale"
                                
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={IsMyEntreprise?.raisonSociale}
                                {...register("raisonSociale", {
                                    require: true, minLength: 2, maxLength: 100,
                                    validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                                })}
                                autoComplete="raisonSociale"
                                onChange={handleChange}
                          />
                          {errors.raisonSociale && (<p className="text-red-500 text-sm">{errors.raisonSociale.message}</p>)}
                      </div>
                  </div>
  
                    <div className="m-5">
                        <label htmlFor="domaineDActivite" className="block text-sm font-medium leading-6 text-white"> Domaine d&apos;Activité</label>
                        <div className="">
                            <input
                                type="text"
                                name="domaineDActivite"
                                id="domaineDActivite"
                                
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={IsMyEntreprise?.domaineDActivite}
                                {...register("domaineDActivite", {
                                require: true, minLength: 2, maxLength: 100,
                                validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                                })}
                                autoComplete="domaineDActivite"
                                onChange={handleChange}
                            />
                            {errors.domaineDActivite && ( <p className="text-red-500 text-sm">{errors.domaineDActivite.message}</p> )}
                      </div>
                    </div>
  
                    <div className="m-5">
                        <label htmlFor="adresse" className="block text-sm font-medium leading-6 text-white">Adresse</label>
                        <div className="">
                                <input
                                    type="text"
                                    name="adresse"
                                    id="adresse"
                                    
                                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={IsMyEntreprise?.adresse}
                                    {...register("adresse", {
                                        require: true, minLength: 2, maxLength: 100,
                                        validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                                    })}
                                    autoComplete="adresse"
                                    onChange={handleChange}
                                />
                                {errors.adresse && (<p className="text-red-500 text-sm">{errors.adresse.message}</p>)}
                        </div>
                    </div>


                    <div className="m-5">
                        <label htmlFor="type" className="block text-sm font-medium leading-6 text-white">Statut de l&apos;entreprise</label>
                        <div className="">
                            <input
                                type="text"
                                name="type"
                                id="type"
                                
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={IsMyEntreprise?.type}
                                {...register("type", { 
                                    require: true, minLength: 2, maxLength: 100,
                                    validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                                })}
                                autoComplete="type"
                                onChange={handleChange}
                            />
                            {errors.type && (<p className="text-red-500 text-sm">{errors.type.message}</p>)}
                        </div>
                    </div>

                    <div className="m-5">
                        <label htmlFor="pays" className="block text-sm font-medium leading-6 text-white">Pays</label>
                        <div className="">
                            <input
                                type="text"
                                name="pays"
                                id="pays"
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={IsMyEntreprise?.pays}
                                {...register("pays", {
                                    require: true, minLength: 5, maxLength: 100,
                                    validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                                  }
                                )}
                                autoComplete="pays"
                                onChange={handleChange}
                            />
                            {errors.pays && (<p className="text-red-500 text-sm">{errors.pays.message}</p>)}
                        </div>
                    </div>
  
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold rounded bg-red-600 hover:bg-red-900 text-white">
                        Annuler
                        </button>
                        <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Confirmer
                        </button>
                    </div>
              </div>
          </form>
      </div>
    )
  }