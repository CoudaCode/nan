import Cookies from "js-cookie";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import UrlFrontEnt from "../../components/ApiUrl/UrlFrontEnt";

function Contact(){
    const { register, handleSubmit } = useForm({ fullname: "", email: "", sms: "", whatsapp: "" });
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    let motPasse = undefined;
    let rapport = undefined;
    const { mutate: user } = useMutation({
      mutationFn: async send => {
        motPasse = send.password;
        [...document.querySelector('form#form-contact').querySelectorAll('input, select, textarea, #reset-contact, #submit-contact')].map(item => item.disabled = true);
        let response = await axios.post(ApiUrl+'/api/contact/create', send, { headers: { Authorization: `token ${token}`} });
        return response;
      },
      onSuccess: success => {
        toast.success(success.data.message);
        const data = success.data.data;
        rapport = document.querySelector('#recentCustomers-contact').querySelector('#rapport');
        rapport.classList.remove('error');
        rapport.classList.add('success');
        rapport.innerHTML = `<div class="message success">${success.data.message}</div>
        <div class="data-content"><span class="first">Mme/M : </span><span class="second">${data.fullname}</span></div>
        <div class="data-content"><span class="first">E-mail : </span><span class="second">${data.email}</span></div>
        <div class="data-content"><span class="first">Téléphone : </span><span class="second">${data.sms}</span></div>
        <div class="data-content"><span class="first">Nationalité : </span><span class="second">${data.whatsapp}</span></div>
        <div class="listing-all"><a class="list-link" href="${UrlFrontEnt}/contacts">Voir la liste</a></div>`;
        [...document.querySelector('form#form-contact').querySelectorAll('input, select, textarea, #reset-contact, #submit-contact')].map(item => item.disabled = false);
        [...document.querySelector('form#form-contact').querySelectorAll('input, select, textarea')].map(item => item.value = '');
      },
      onError: error =>{
        toast.error(error.response.data.message);
        rapport = document.querySelector('#recentCustomers-contact').querySelector('#rapport');
        rapport.classList.remove('success');
        rapport.classList.add('error');
        rapport.innerHTML = `<div class="message error">${error.response.data.message}</div>`;
        [...document.querySelector('form#form-contact').querySelectorAll('input, select, textarea, #reset-contact, #submit-contact')].map(item => item.disabled = false);
      }
    });
    let onSubmit = data => user(data);


    return(
        <div className="details" id="details-contact">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h1>Créer Contact</h1>
                        <select className="btnn">
                            <option value="saisir" selected>Saisir</option>
                            <option value="importer">Importer</option>
                        </select>
                    </div>
                    <div className="content-form">
                        <form className="forms"  id="form-contact" onSubmit={handleSubmit(onSubmit)}>
                            <div className="group-input">
                                <label htmlFor="fullname" className="label-form">Nom et Prénom(s)</label>
                                <input type="text" className="form-control" name="fullname" id="fullname" placeholder="Nom et Prénom(s)" required {...register("fullname", { require: true, minLength: 2, maxLength: 100 })}/>
                            </div>

                            <div className="group-input">
                                <label htmlFor="email" className="label-form">Adresse E-mail</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Adresse E-mail" required {...register("email", { require: true, minLength: 2, maxLength: 50, pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Email invalide"}})}/>
                            </div>

                            <div className="group-input">
                                <label htmlFor="sms" className="label-form">Adresse téléphonque</label>
                                <input type="text" className="form-control" name="sms" id="sms" placeholder="Adresse téléphonque" required
                                    {...register("sms", { require: true, minLength: 10, maxLength: 20, pattern: {
                                        value: /^\+\d{2,3}\d{7,}$/i,
                                        message: "Veuillez entrer un adresse téléphonique qui contient l'indicatif et qui contient au moins 10 fichres et pas de caractère accentiés et spéciaux.",
                                    } })}
                                />
                            </div>

                            <div className="group-input">
                                <label htmlFor="whatsapp" className="label-form">Adresse WhatsApp</label>
                                <input type="text" className="form-control" name="whatsapp" id="whatsapp" placeholder="Adresse WhatsApp" required 
                                    {...register("whatsapp", { require: true, minLength: 10, maxLength: 20, pattern: {
                                        value: /^\+\d{2,3}\d{7,}$/i,
                                        message: "Veuillez entrer un adresse téléphonique qui contient l'indicatif et qui contient au moins 10 fichres et pas de caractère accentiés et spéciaux.",
                                    } })}
                                />
                            </div>

                            <div className="group-action">
                                <button type="reset" id="reset-contact"> Annuler</button>
                                <button type="submit" id="submit-contact"> Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="recentCustomers" id="recentCustomers-contact">
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

export default Contact;