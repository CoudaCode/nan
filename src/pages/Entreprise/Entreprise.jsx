import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";
import "./Entreprise.css";
import logo from "../../assets/images/Nan-Send.png";
import { useEffect } from "react";
import { ApiUrl } from "../../outils/URL";



function Entreprise() {
  let navigate = useNavigate();

  const code = window.location.href.split('?')[1].split('#')[0];
  const mail = window.location.href.split('?')[1].split('#')[1];
  let count = true;
  useEffect(()=>{
    if(count){
      count = false;
      axios.delete(ApiUrl+`validate/deleteIfExpires/${code}/${mail}`)
      .then(response => {
        const data = response.data;
        const reponse = data.data
        const message = data.message;
        if(message === 'location user'){
          toast.error('E-mail expiré !');
          setTimeout(() =>  navigate("/inscription"), 3050);
        }
        if(message === 'register entreprise'){
          const {fullname, email, telephone, nationalite, password, } = reponse;
          const body = {fullname, email, telephone, nationalite, password};
          axios.post(ApiUrl+'user/create', body)
          .then(isUser => {
            if(isUser.data.status){
              toast.success(isUser.data.message);
              Cookies.set('NaN_Digit_Sender_Token_Secretly', isUser.data.token, { expires: 1, path: '/'});
            } 
          })
        }
      })
    }
  }, []);

  
  // const { register, handleSubmit } = useForm({ raisonSociale: "", domaineDActivite: "", adresse: "", type: "", nationalite: "", password: ""});
  


  
  const { register, handleSubmit, formState: { errors } } = useForm({ raisonSociale: "", domaineDActivite: "", adresse: "", type: "", nationalite: "", password: "" });

  const { mutate: entreprise } = useMutation({
    mutationFn: async (send) => {
      document.querySelectorAll('input:required, button#submit').forEach(item=>item.disabled = true);
      if(!Object.values(send).every(item => item.replaceAll(' ', ''))){
        toast.error('Tous les champs sont obligatoires');
        document.querySelectorAll('input:required, button#submit').forEach(item=>item.disabled = false); 
      }
      else{
        if(send.password !== send.passwordc){
          toast.error('Les mots de passe de sont pas conforment');
          document.querySelectorAll('input:required, button#submit').forEach(item=>item.disabled = false);
        }else{
          let response = await axios.post(ApiUrl+'entreprise/create', send, { headers: { Authorization: `token ${Cookies.get("NaN_Digit_Sender_Token_Secretly")}`} });
          return response;
        }
      }
    },
    onSuccess: (success) => {
      toast.success(success.data.message);
      Cookies.set('NaN_Digit_Sender_Token_Secretly', success.data.token, { expires: 1, path: '/'});
      setTimeout(() => navigate("/dashboard"), 3050);
    },
    onError: error => {
      toast.error(error.response.data.message);
      document.querySelectorAll('input:required, button#submit').forEach(item=>item.disabled = false);
    }
  });

  let onSubmit = data => entreprise(data);
  return (
   <div className="Entreprise">
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12 cadreLogo">
            <p className="max-w-xl text-mg">
            Libérez la puissance de NaN-<span>Send</span> pour faciliter <br /> vos
              conversations avec vos clients.
            </p>

            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-pink-100">
                <img src={logo} alt="" />
              </a>

              <address className="mt-2 not-italic">
              Copyright <span className="span1">NaN-Send</span> &copy;2023 By <span className="span2">Naniens .</span>
              </address>
            </div>
          </div>

          <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12 form">
            <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="code">
                <label htmlFor="name" style={{ color: "#6870e0" }}>
                  Créer une Organisation / Entreprise
                </label><br />
                
              </div>
              <label className="sr-only" htmlFor="name">Raison Sociale</label>
              <input required={true} className="w-full rounded-lg border-gray-200 p-3 text-sm" type="text" name="raisonSociale" id="raisonSociale"
                {...register("raisonSociale", {
                  require: true, minLength: 2, maxLength: 100,
                  validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                })} placeholder="Raison Sociale"
              />
              {errors.raisonSociale && (<p className="text-red-500 text-sm">{errors.raisonSociale.message}</p>)}
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="domaineDActivite">Domaine d&apos;activé</label>
                  <input className="w-full rounded-lg border-aqua-100 p-3 text-sm" placeholder="Domaine d&apos;activé" type="text" id="domaineDActivite"
                    {...register("domaineDActivite", {
                      require: true, minLength: 2, maxLength: 100,
                      validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                    })}
                  />
                  {errors.domaineDActivite && ( <p className="text-red-500 text-sm">{errors.domaineDActivite.message}</p> )}
                </div>

                <div>
                  <label className="sr-only" htmlFor="adresse">Adresse</label>
                  <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Adresse" type="text" id="adresse"
                    {...register("adresse", {
                      require: true, minLength: 2, maxLength: 100,
                      validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                    })}
                  />
                  {errors.adresse && (<p className="text-red-500 text-sm">{errors.adresse.message}</p>)}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="type">Statut de l&apos;entreprise</label>
                  <input className="w-full rounded-lg border-aqua-100 p-3 text-sm" placeholder="Statut de l&apos;entreprise" type="text" id="type"
                    {...register("type", { 
                      require: true, minLength: 2, maxLength: 100,
                      validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                    })}
                  />
                  {errors.type && (<p className="text-red-500 text-sm">{errors.type.message}</p>)}
                </div>

                <div>
                  <label className="sr-only" htmlFor="pays">Pays</label>
                  <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Pays" type="text" id="pays"
                    {...register("pays", {
                      require: true, minLength: 5, maxLength: 100,
                      validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                    }
                    )}
                  />
                  {errors.pays && (<p className="text-red-500 text-sm">{errors.pays.message}</p>)}
                </div>
              </div>


              <div>
                <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Adresse E-mail" type="email" id="email" name="email"
                  {...register("email", {
                    require: true, minLength: 5, maxLength: 100,
                    pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Veuillez entrer un adresse mail valide." },
                    validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                  })}
                />
                {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
              </div>

              
              <div className="mt-4">
                <button type="submit" id="submit" className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"> Soumettre </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
   </div>
    
  )
}

export default Entreprise;
