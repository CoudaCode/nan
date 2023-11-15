import Cookies from "js-cookie";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import ApiUrl from "../../components/ApiUrl/ApiUrl";

function Collaborateur(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ fullname: "", email: "", telephone: "", nationalite: "", role: "", password: "", cpassword: ""});
  
    let token = Cookies.get("token");
    // let navigate = useNavigate();
    const headers = { Authorization: `token ${token}`};
    let motPasse = undefined;
    let rapport = undefined;
    
    const { mutate: user } = useMutation({
      mutationFn: async send => {
        motPasse = send.password;
        let response = await axios.post(ApiUrl+'/api/agent/create', send, headers);
        return response;
      },
      onSuccess: success => {
        toast.success(success.data.message);
        const data = success.data.data;
        rapport = document.querySelector('#recentCustomers-collaborateur').querySelector('#rapport');
        rapport.classList.remove('error');
        rapport.classList.add('success');
        rapport.innerHTML = `<div class="message success">${success.data.message}</div>
                            <div class="data-content"><span class="first">Mme/M : </span><span class="second">${data.fullname}</span></div>
                            <div class="data-content"><span class="first">E-mail : </span><span class="second">${data.email}</span></div>
                            <div class="data-content"><span class="first">Téléphone : </span><span class="second">${data.telephone}</span></div>
                            <div class="data-content"><span class="first">Nationalité : </span><span class="second">${data.nationalite}</span></div>
                            <div class="data-content"><span class="first">Rôle : </span><span class="second">${data.role[0].toUpperCase()+data.role.slice(1).toLowerCase()}</span></div>
                            <div class="data-content"><span class="first">Mot de passe : </span><span class="second">${motPasse}</span></div>
                            <div class="listing-all"><a class="list-link" href="/contacts">Voir la liste</a></div>`;
      },
      onError: error =>{
        toast.error(error.response.data.message);
        rapport = document.querySelector('#recentCustomers-collaborateur').querySelector('#rapport');
        rapport.classList.remove('success');
        rapport.classList.add('error');
        rapport.innerHTML = `<div class="message error">${error.data.message}</div>`
      }
    });
  
    let onSubmit = data => user(data);

    return(
        <div className="details" id="details-collaborateur">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h1>Créer Collaborateur</h1>
                    </div>
                    <div className="content-form">
                        <form className="forms" onSubmit={handleSubmit(onSubmit)}>
                            <div className="group-input">
                                <label htmlFor="fullname" className="label-form">Nom et Prénom(s)</label>
                                <input type="text" className="form-control"  id="fullname" placeholder="Nom et Prénom(s)" {...register("fullname", { require: true, minLength: 2, maxLength: 100 })} required/>
                            </div>

                            <div className="group-input">
                                <label htmlFor="email" className="label-form">Adresse E-mail</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Adresse E-mail" required
                                    {...register("email", { require: true, minLength: 2, maxLength: 50, pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Email invalide"}})}
                                />
                            </div>

                            <div className="group-input">
                                <label htmlFor="telephone" className="label-form">Adresse téléphonque</label>
                                <input type="text" className="form-control" name="telephone" id="telephone" placeholder="Adresse téléphonque" required
                                    {...register("telephone", { require: true, minLength: 10, maxLength: 20, pattern: {
                                        value: /^\+\d{2,3}\d{7,}$/i,
                                        message: "Veuillez entrer un adresse téléphonique qui contient l'indicatif et qui contient au moins 10 fichres et pas de caractère accentiés et spéciaux.",
                                    } })}
                                />
                            </div>

                            <div className="group-input">
                                <label htmlFor="nationalite" className="label-form">Nationalité</label>
                                <input type="text" className="form-control" name="nationalite" id="nationalite" placeholder="Nationalité" required {...register("nationalite", { require: true, minLength: 2, maxLength: 50 })}/>
                            </div>

                            <div className="group-input">
                                <label htmlFor="role" className="label-form">Rôle</label>
                                <select name="role" id="role" className="form-select" required>
                                    <option value="" disabled selected>--- Attribué un rôle ---</option>
                                    <option value="manager">Manager</option>
                                    <option value="agent">Agent</option>
                                </select>
                            </div>

                            <div className="group-input">
                                <label htmlFor="password" className="label-form">Mot de passe</label>
                                <input type="password" className="form-control" name="password" id="password" placeholder="Mot de passe" required 
                                    {...register("password", { require: true, minLength: 4, maxLength: 50 })}
                                />
                            </div>

                            <div className="group-input">
                                <label htmlFor="cpassword" className="label-form">Répéter Mot de passe</label>
                                <input type="password" className="form-control" name="cpassword" id="cpassword" placeholder="Répéter Mot de passe" required 
                                    {...register("cpassword", { require: true, minLength: 4, maxLength: 50 })}
                                />
                            </div>

                            <div className="group-action">
                                <button type="reset"> Annuler</button>
                                <button type="submit"> Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="recentCustomers" id="recentCustomers-collaborateur">
                    <div className="cardHeader">
                        <h2>Rapport d&apos;ajout</h2>
                    </div>
                    <div className="rapport" id="rapport">
                        {/* <div className="message">Favorable</div>
                        <div className="data-content"><span className="first">Mme/M : </span><span className="second">DJOBO NDRI</span></div>
                        <div className="data-content"><span className="first">E-mail : </span><span className="second">djobo@gmail.com</span></div>
                        <div className="data-content"><span className="first">Téléphone : </span><span className="second">+2001212457858</span></div>
                        <div className="data-content"><span className="first">Nationalité : </span><span className="second">Ivoirienne</span></div>
                        <div className="data-content"><span className="first">Rôle : </span><span className="second">Agent</span></div>
                        <div className="data-content"><span className="first">Mot de passe : </span><span className="second">djobo</span></div>
                        <div className="listing-all"><a className="list-link" href="">Voir la liste</a></div> */}
                        
                    </div >
                </div>
            </div>
    )
}

export default Collaborateur;