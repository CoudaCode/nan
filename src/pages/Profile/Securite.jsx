import { toast } from "react-toastify";
import { IsCookies } from "../../outils/IsCookie";
import { ApiUrl } from "../../outils/URL";
import axios from 'axios';
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

export default function InformationSecurite() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ email: "", password: "", passwordc: "" });
    const { mutate: user } = useMutation({
        mutationFn: async send => {
            document.querySelectorAll("input, button").forEach(item => (item.disabled = true));
            if (!Object.values(send).every(item => item.replaceAll(" ", ""))){
                toast.error("Tous les champs sont obligatoires");
                document.querySelectorAll("input, button").forEach((item) => (item.disabled = false));
            } else {
                if (send.password !== send.passwordc) {
                    toast.error("Les mots de passe de sont pas conforment");
                    document.querySelectorAll("input, button").forEach((item) => (item.disabled = false));
                } else {
                    let response = await axios.put(ApiUrl + "user/updatePassword", send, {headers: {Authorization: `token ${IsCookies()}`}});
                    return response;
                }
            }
        },
        onSuccess: success => {
            toast.success(success.data.message);
            Cookies.set('NaN_Digit_Sender_Token_Secretly', success.data.token, {expires: 1, path: '/'});
            setTimeout(() => window.location.reload(), 3100);
        },
        onError: error => {
            document.querySelectorAll("input, button").forEach((item) => (item.disabled = false));
            toast.error(error.response.data.message);
        },
      });
      let onSubmit = (data) => user(data);
    
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-900/10 p-9">
            <h2 className="text-base font-semibold leading-7 text-white">Informations de Sécurité</h2>
            <p className="mt-1 text-sm  text-gray-600">Use a permanent address where you can receive mail.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-3 overflow-Y-auto">
                    <div className="m-5">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white"> Adresse E-mail</label>
                        <div className="">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("email", {
                                        require: true,
                                        minLength: 5,
                                        maxLength: 50,
                                        pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                        message: "Veuillez entrer une adresse mail valide.",
                                    },
                                    validate: {notEmpty: (value) => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}})
                                }
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="m-5">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white"> Nouvelle mot de passe</label>
                        <div className="">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="password"
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("password", {
                                        require: true,
                                        minLength: 8,
                                        maxLength: 50,
                                        pattern: {
                                        value: /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/,
                                        message: "Le mot de passe doit contenu au moins: 8 caractères, une majuscule, une minuscule, un symbole et aucun espace.",
                                    },
                                    validate: {
                                    notEmpty: (value) => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                                })}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="m-5">
                        <label htmlFor="passwordc" className="block text-sm font-medium leading-6 text-white">Répéter le mot de passe</label>
                        <div className="">
                            <input
                                type="password"
                                name="passwordc"
                                id="passwordc"
                                autoComplete="passwordc"
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("passwordc", {
                                    require: true,
                                    minLength: 8,
                                    maxLength: 50,
                                    validate: value => value === watch("password") || "Les mots de passe ne correspondent pas"
                                })}
                            />
                            {errors.passwordc && (
                                <p className="text-red-500 text-sm">{errors.passwordc.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="reset" id="reset" className="text-sm font-semibold rounded bg-red-600 hover:bg-red-900 text-white">
                            Annuler
                        </button>
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Modifier
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}