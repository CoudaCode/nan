import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";

import "./Entreprise.css";
import { useEffect } from "react";
import ApiUrl from "../../components/ApiUrl/ApiUrl";

function Entreprise() {
  const code = window.location.href.split('?')[1].split('#')[0];
  const mail = window.location.href.split('?')[1].split('#')[1];
  let count = true;
  
  const { register, handleSubmit, formState: { errors } } = useForm({ raisonSociale: "", domaineDActivite: "", adresse: "", type: "", nationalite: "", password: ""});
  useEffect(()=>{
    if(count){
      count = false;
      axios.delete(ApiUrl+`/api/validate/deleteIfExpires/${code}/${mail}`)
      .then(response => {
        const data = response.data;
        const reponse = data.data
        const message = data.message;
        if(message === 'location user'){
          alert()
        }
        if(message === 'register entreprise'){
          const {fullname, email, telephone, nationalite, password, } = reponse;
          const body = {fullname, email, telephone, nationalite, password};
          axios.post(ApiUrl+'/api/user/create', body)
          .then(isUser => {
            if(isUser.data.status){
              Cookies.set('NaN_Digit_Sender_Token_Secretly', isUser.data.token, { expires: 1, path: '/'});
            }
          })
        }
      })
    }
  }, []);

  let navigate = useNavigate();
  
  const { mutate: entreprise } = useMutation({
    mutationFn: async (send) => {
      
      let response = await axios.post(`${ApiUrl}/api/entreprise/create`, send, { headers: { Authorization: `token ${Cookies.get("NaN_Digit_Sender_Token_Secretly")}`} });
      return response;
    },
    onSuccess: (success) => {
      toast.success(success.data.message);
      Cookies.set('NaN_Digit_Sender_Token_Secretly', success.data.token, { expires: 1, path: '/'});
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
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
