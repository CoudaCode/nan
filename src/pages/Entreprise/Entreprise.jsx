import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";

// const url = "https://nan-send-api.onrender.com";
const urlLocal = "http://localhost:3000";
import "./Entreprise.css";
import { useEffect, useState } from "react";


function Entreprise() {
  const [state, setState] = useState(null);
  const code = window.location.href.split('?')[1].split('#')[0];
  const mail = window.location.href.split('?')[1].split('#')[1];
  let count = true;
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ raisonSociale: "", domaineDActivite: "", adresse: "", type: "", nationalite: "", password: ""});
  useEffect( ()=>{
    setTimeout(() => {
      if(count){
        count = false;
        axios.get(`${urlLocal}/api/validate/getByIdAndCode/${code}/${mail}`)
        .then(result=>{
          if(result.data.status){
            count = false;
            const {fullname, password, email, nationalite, telephone } = result.data.data;
            const body = {fullname, password, email, nationalite, telephone };
            axios.post(`${urlLocal}/api/user/create`, body)
            .then(sucess=>{
              if(sucess.data.status){
                setState(result.data.data._id)
                Cookies.set("token", sucess.data.token, {
                  expires: 3600 * 24,
                  path: ""
                });
              }
            })
          }else{
            document.querySelector('form').remove();
            const newButton = document.createElement('button');
            newButton.textContent = 'L\'email de confirmation expiré';
            document.querySelector('div.ensemble').append(newButton);
            newButton.className ='exprired';
          }
        })
      }
      
    }, 1000);
  }, [])

  let token = Cookies.get("token");
  let navigate = useNavigate();
  
  const { mutate: entreprise } = useMutation({
    mutationFn: async (send) => {
      let response = await axios.post(`${urlLocal}/api/entreprise/create`, send, { headers: { Authorization: `token ${token}`} });
      return response;
    },
    onSuccess: (success) => {
      toast.success(success.data.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3050);
    },
    onError: (e) => {
      toast.error(e.response.data.message);
    },
  });
    

  let onSubmit = (data) => entreprise(data);
  return (
    
      <div className="Entreprise">
      <div className="container">
        <h2 className="heading">Créer votre Entreprise</h2>
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-input"
            required={true}
            autoComplete="off"
            type="text"
            id="raisonSociale"
            {...register("raisonSociale", {
              require: true,
              minLength: 2,
              maxLength: 100,
            })}
            placeholder="Nom de l'entreprise"
          />

          <input
            className="form-input"
            required={true}
            autoComplete="off"
            type="text"
            id="domaineDActivite"
            {...register("domaineDActivite", {
              require: true,
              minLength: 2,
              maxLength: 50,
            })}
            placeholder="Domaine d'activité de l'entreprise"
          />

          <input
            className="form-input"
            required={true}
            autoComplete="off"
            type="text"
            {...register("adresse", {
              require: true,
              minLength: 2,
              maxLength: 50,
            })}
            placeholder="Adresse de l'entreprise"
          />

          <input
            className="form-input"
            type="text"
            id="type"
            name="type"
            step="0.01"
            min="0"
            {...register("type", {
              require: true,
              minLength: 2,
              maxLength: 50,
            })}
            placeholder="Statut de l'entreprise"
          />

          <input
            className="form-input"
            required={true}
            autoComplete="off"
            type="text"
            id="emailInfo"
            {...register("emailInfo", {
              require: true,
              minLength: 2,
              maxLength: 50,
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Email invalide"
              },
            })}
            placeholder="Entrez l'email fonctionnel de l'entreprise"
          />

          <input
            className="form-input"
            required={true}
            autoComplete="off"
            type="text"
            {...register("passwordEmailInfo", {
              require: true,
              minLength: 4,
              maxLength: 50,
            })}
            placeholder="Entrez le mot de passe servant à créer l'email"
          />
          <button className="login-button" type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  );
}

export default Entreprise;
