import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";

import "./Entreprise.css";
<<<<<<< HEAD
import { useEffect } from "react";
import ApiUrl from "../../components/ApiUrl/ApiUrl";
=======
import logo from "../../assets/images/Nan-Send.png";
>>>>>>> c229243d70c18ff91e125a61be000e319648b709

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
<<<<<<< HEAD
    
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
=======
   <div className="Entreprise">
<section class="bg-gray-100">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12 cadreLogo">
        <p class="max-w-xl text-mg">
        Libérez la puissance de NaN-<span>Send</span> pour faciliter <br /> vos
          conversations avec vos clients.
        </p>

        <div class="mt-8">
          <a href="" class="text-2xl font-bold text-pink-100">
            <img src={logo} alt="" />
          </a>

          <address class="mt-2 not-italic">
          Copyright <span className="span1">NaN-Send</span> &copy;2023 By <span className="span2">Naniens .</span>
          </address>
        </div>
      </div>

      <div class="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12 form">
        <form action="" class="space-y-4">
        <div className="code">
            <label htmlFor="name" style={{ color: "#6870e0" }}>
              Créons votre organisation, XXXXXXXXXXXX !
            </label><br />
            <input
              class="w-full rounded-lg  p-3 text-sm"
              placeholder="***********"
              type="number"
              id="compte"
            />
          </div>
          
            <label class="sr-only" htmlFor="name">Nadddme</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="site">Site Web</label>
              <input
                class="w-full rounded-lg border-aqua-100 p-3 text-sm"
                placeholder="Site Web"
                type="text"
                id="site"
              />
            </div>
            <div>
              <label class="sr-only" htmlFor="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Telephone"
                type="number"
                id="phone"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                class="w-full rounded-lg border-aqua-100 p-3 text-sm"
                placeholder="Domaine"
                type="text"
                id="domaine"
              />
            </div>
            <div>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Industrie"
                type="text"
                id="industrie"
              />
            </div>
          </div>
          <div>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Pays"
              type="text"
              id="pays"
            />
          </div>

          <div>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Pays"
              type="text"
              id="pays"
            />
          </div>
          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
             Etape suivante
            </button>
          </div>
>>>>>>> c229243d70c18ff91e125a61be000e319648b709
        </form>
      </div>
    </div>
  </div>
</section>


   </div>
    
  )
}

export default Entreprise;
