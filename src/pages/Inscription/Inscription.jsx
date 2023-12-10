import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { ApiUrl, FrontUrl } from "../../outils/URL";

function Inscription() {
  let navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ fullname: "", email: "", telephone: "", nationalite: "", password: "" });
  const { mutate: user } = useMutation({
    mutationFn: async (send) => {
      document.querySelectorAll('input:required').forEach(item=>item.disabled = true);
      if(!Object.values(send).every(item => item.replaceAll(' ', ''))){
        toast.error('Tous les champs sont obligatoires');
        document.querySelectorAll('input:required, button.login-button, button.social-button.google').forEach(item=>item.disabled = false); 
      }
      else{
        if(send.password !== send.passwordc){
          toast.error('Les mots de passe de sont pas conforment');
          document.querySelectorAll('input:required, button.login-button, button.social-button.google').forEach(item=>item.disabled = false); 
        }else{
          send.urlfrontend = FrontUrl+'entreprise/';
          let response = await axios.post(ApiUrl+'message/verifyEmail', send);
          return response;
        }
      }
    },
    onSuccess: success => {
      toast.success(success.data.message);
      setTimeout(() => navigate(`/validate/${success.data.data.email}/${success.data.data.code}`), 2500);
    },
    onError: error => {
      document.querySelectorAll('input:required, button.login-button, button.social-button.google').forEach(item=>item.disabled = false); 
      toast.error(error.response.data.message);
      
    },
  });
  let onSubmit = data => user(data);
  return (
    <div className="Connexion">
      <div className="container">
        <div className="heading">Inscription</div>
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            required={true}
            className="input"
            type="text"
            name="fullname"
            id="fullname"
            {...register("fullname", {
              require: true,
              minLength: 2,
              maxLength: 50,
              validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
              
            })}
            placeholder="Votre nom et Prénom"
          />
          {errors.fullname && (<p className="text-red-500 text-sm">{errors.fullname.message}</p>)}

          <input
            required={true}
            className="input"
            type="email"
            name="email"
            id="email"
            {...register("email", {
              require: true,
              minLength: 5,
              maxLength: 50,
              pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Veuillez entrer un adresse mail valide." },
              validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
            })}
            placeholder="Adresse Email"
          />
          {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}

          <input
            required={true}
            className="input"
            type="text"
            name="telephone"
            id="telephone"
            placeholder="Téléphone"
            {...register("telephone", {
              require: true,
              minLength: 2,
              maxLength: 50,
              pattern: { value: /^\+\d{2,3}\d{7,}$/i, message: "Veuillez entrer un adresse téléphonique qui contient l'indicatif et qui contient au moins 10 fichres et pas de caractère accentiés et spéciaux." },
              validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
            })}
          />
          {errors.telephone && (<p className="text-red-500 text-sm">{errors.telephone.message}</p>)}

          <input required="" className="input" type="text" name="nationalite" id="nationalite"
            {...register("nationalite", {
              require: true,
              minLength: 4,
              maxLength: 50,
              validate: {notEmpty: value => !/^\s*$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
            })}
            placeholder="Votre nationalité"
          />
          {errors.nationalite && (<p className="text-red-500 text-sm">{errors.nationalite.message}</p>)}

          <input
            required={true}
            className="input"
            type="password"
            name="password"
            id="password"
            {...register("password", {
              require: true,
              minLength: 8,
              maxLength: 50,
              pattern: {
                value: /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/,
                message: "Le mot de passe doit contenu au moins: 8 caractères, une majuscule, une minuscule, un symbole et aucun espace."
              },
              validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
            })}
            placeholder="Mot de Passe"
          />
          {errors.password && (<p className="text-red-500 text-sm">{errors.password.message}</p>)}

          <input
            required=""
            className="input"
            type="password"
            name="passwordc"
            id="passwordc"
            {...register("passwordc", {
              require: true,
              minLength: 8,
              maxLength: 50,
              validate: (value) => value === watch("password") || "Les mots de passe ne correspondent pas"
              // validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
            })}
            placeholder="Mot de Passe"
          />
          {errors.passwordc && (<p className="text-red-500 text-sm">{errors.passwordc.message}</p>)}
          
          <span className="forgot-password">
            <a href="#">Mot de passe oublié ?</a>
          </span>
          <button className="login-button" type="submit">S&apos;inscrire</button>
        </form>
        <div className="social-account-container">
          <span className="title">Ou connectez-vous avec</span>
          <div className="social-accounts">
            <Link>
              <button className="social-button google">
                <span>{<FcGoogle />}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
