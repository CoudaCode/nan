import Cookies from "js-cookie";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


function EditeForm(){
    
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    const pathname = useLocation().pathname;
    const _id = pathname.split('/')[3];
    console.log(pathname);
    const [state, setState] = useState({});
    let { register, handleSubmit } = useForm({ defaultValues: { fullname: state.fullname, email: state.email, sms: state.sms, whatsapp: state.whatsapp} });
    useEffect(()=>{
        axios.get(ApiUrl+'/api/contact/getById/'+_id, {headers: {Authorization: 'token '+token}})
        .then(result => {
            const myForm = document.getElementById('form-contact');
            myForm.fullname.defaultValues = result.data.data.fullname;
            myForm.sms.defaultValues = result.data.data.sms;
            myForm.whatsapp.defaultValues = result.data.data.whatsapp;
            myForm.email.defaultValues = result.data.data.email;
            [myForm.fullname, myForm.sms, myForm.whatsapp, myForm.email].map(a=>{
                a.focus();
                a.blur();
            })
            setState(result.data.data)
        })
        .catch(error => {
            toast.error(error.response.data.message);
            setTimeout(() => {
               window.location.href = '/contact';
            }, 2500);
        })
    }, [])

    // const { register, handleSubmit, control  } = useForm({ fullname: state.fullname, email: state.email, sms: state.sms, whatsapp: state.whatsapp });
    
    const { mutate: user } = useMutation({
      mutationFn: async send => {
        
        for (const key in send) {
            if(!send[key]) delete send[key]
        }
        // [...document.querySelector('form#form-contact').querySelectorAll('input, select, textarea, #reset-contact, #submit-contact')].map(item => item.disabled = true);
        console.log(send);
        let response = await axios.put(ApiUrl+'/api/contact/update/'+_id, send, { headers: { Authorization: `token ${token}`} });
        return response;
      },
      onSuccess: success => toast.success(success.data.message),
      onError: error => toast.error(error.response.data.message) 
    });
    let onSubmit = data => user(data);


    return(
        <div className="content-form">
            <form className="forms"  id="form-contact" onSubmit={handleSubmit(onSubmit)}>
                <div className="group-input">
                    <label htmlFor="fullname" className="label-form">Nom et Prénom(s) ou Raison Sociale</label>
                    {/* <Controller 
                        name="fullname"
                        
                        control={control}
                        defaultValue={'state.fullname'}
                        render={({ field }) => (
                            <input {...field} className="form-control"/>
                          )}

                    /> */}
                    <input type="text" className="form-control" name="fullname" id="fullname" placeholder="Nom et Prénom(s) ou Raison Sociale"  required {...register("fullname", { require: true, minLength: 2, maxLength: 100 })} defaultValue={state.fullname}/>
                </div>

                <div className="group-input">
                    <label htmlFor="email" className="label-form">Adresse E-mail</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Adresse E-mail" required {...register("email", { require: true, minLength: 2, maxLength: 50, pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Email invalide"}})} defaultValue={state.email}/>
                </div>

                <div className="group-input">
                    <label htmlFor="sms" className="label-form">Adresse téléphonque</label>
                    <input type="text" className="form-control" name="sms" id="sms" placeholder="Adresse téléphonque"  required
                        {...register("sms", { require: true, minLength: 10, maxLength: 20, pattern: {
                            value: /^\+\d{2,3}\d{7,}$/i,
                            message: "Veuillez entrer un adresse téléphonique qui contient l'indicatif et qui contient au moins 10 fichres et pas de caractère accentiés et spéciaux.",
                        } })}
                        defaultValue={state.sms}
                    />
                </div>

                <div className="group-input">
                    <label htmlFor="whatsapp" className="label-form">Adresse WhatsApp</label>
                    <input type="text" className="form-control" name="whatsapp" id="whatsapp" placeholder="Adresse WhatsApp" required 
                        {...register("whatsapp", { require: true, minLength: 10, maxLength: 20, pattern: {
                            value: /^\+\d{2,3}\d{7,}$/i,
                            message: "Veuillez entrer un adresse téléphonique qui contient l'indicatif et qui contient au moins 10 fichres et pas de caractère accentiés et spéciaux.",
                        } })}
                        defaultValue={state.whatsapp}
                    />
                </div>

                <div className="group-action">
                    <button type="reset" id="reset-contact"> Annuler</button>
                    <button type="submit" id="submit-contact"> Soumettre</button>
                </div>
            </form>
        </div>
    )
}

export default EditeForm;