import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Inscription.css";
import UrlFrontEnt from "../../components/ApiUrl/UrlFrontEnt";
import ApiUrl from "../../components/ApiUrl/ApiUrl";






function Inscription() {
  let navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors }} = useForm({ fullname: "", email: "", telephone: "", nationalite: "", password: ""});
  
  const { mutate: user } = useMutation({
    mutationFn: async (send) => {
      document.querySelectorAll('input:required').forEach(item=>item.disabled = true);
      send.urlfrontend = UrlFrontEnt+'/entreprise';
      // http://localhost:5173/entreprise?436803#devdjobo@gmail.com
      let response = await axios.post(`${ApiUrl}/api/message/verifyEmail`, send);
      return response;
    },
    onSuccess: (success) => {
      toast.success(success.data.message);
      setTimeout(() => navigate("/validate"), 2000);
    },
    onError: (e) => {
      toast.error(e.response.data.message);
      // toast.errors(erro)
      document.querySelectorAll('input:required, button.social-button.google').forEach(item=>item.disabled = false); 
      setErrorMessage(errors.response);
    },
  });
  let onSubmit = (data) => user(data);
  return (
    <div className="Inscription">
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
            })}
            placeholder="Votre nom et Prénom"
          />
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
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "svp entrer un mail valide"
              },
            })}
            placeholder="Adresse Email"
          />
          <input
            required={true}
            className="input"
            type="text"
            name="telephone"
            id="telephone"
            {...register("telephone", {
              require: true,
              minLength: 10,
              maxLength: 20,
              pattern: {
                value: /^\+\d{2,3}\d{7,}$/i,
                message: "Veuillez entrer un adresse téléphonique qui contient l'indicatif et qui contient au moins 10 fichres et pas de caractère accentiés et spéciaux.",
              },
            })}
            placeholder="Téléphone"
          />
          <input
            required={true}
            className="input"
            type="text"
            name="nationalite"
            id="nationalite"
            {...register("nationalite", {
              require: true,
              minLength: 4,
              maxLength: 50,
            })}
            placeholder="Votre nationalité"
          />
          <input
            required={true}
            className="input"
            type="password"
            name="password"
            id="password"
            {...register("password", {
              require: true,
              minLength: 4,
              maxLength: 50,
            })}
            placeholder="Mot de Passe"
          />
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
