import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookie from "js-cookie";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiUrl } from "../../outils/URL";
import "./Connexion.css";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
import { IsCookies } from "../../outils/IsCookie";

function Connexion() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(IsCookies()){
        navigate('/dashboard');
    }
    }, 
  []);

  const login = async (data) => {
    const result = await axios.post(ApiUrl + "auth/login", data);
    return result;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ email: "", password: "" });

  const { mutate: loginUser } = useMutation({
    mutationFn: (Mydata) => login(Mydata),
    onSuccess: (succes) => {
      toast.success(succes.data.message);
      Cookie.set("NaN_Digit_Sender_Token_Secretly", succes.data.token, {
        expires: 1,
      });
      setTimeout(() => {
        sessionStorage.setItem(
          "NaN_Digit_Sender_Token_Secretly",
          JSON.stringify(succes.data.id)
        );
        if(succes.data.entite){
          navigate("/dashboard");
        }else{
          navigate("/admin/dashboard");
        }
        
      }, 3000);
    },
    onError: (e) => {
      toast.error(e.response.data.message);
    },
  });

  const onSubmit = (data) => loginUser(data);
  return (
    <>
      <div className="Connexion">
        <div className="container">
          <Link to="/">
            <button className="back-button">
              <FaArrowLeft /> Retour à l&apos;accueil
            </button>
          </Link>
          <div className="heading mt-9">Connexion</div>
          <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email", {
                require: true,
                minLength: 5,
                maxLength: 50,
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Veuillez entrer une adresse mail valide.",
                },
                validate: {
                  notEmpty: (value) =>
                    /^\S+$/.test(value) ||
                    "Ce champ ne peut pas être vide ou contenir uniquement des espaces.",
                },
              })}
              className="input"
              type="email"
              id="email"
              placeholder="Adresse Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            <input
              required=""
              className="input"
              type="password"
              id="password"
              placeholder="Mot de Passe"
              {...register("password", {
                require: true,
                minLength: 8,
                maxLength: 50,
                pattern: {
                  value:
                    /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/,
                  message:
                    "Le mot de passe doit contenu au moins: 8 caractères, une majuscule, une minuscule, un symbole et aucun espace.",
                },
                validate: {
                  notEmpty: (value) =>
                    /^\S+$/.test(value) ||
                    "Ce champ ne peut pas être vide ou contenir uniquement des espaces.",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <div className="text-red-900 mt-11 text-sm text-center">
              <div>J&apos;ai pas de compte ? </div>
              <span className="forgot-password">
                <Link to="/inscription">S&apos;inscrire</Link>
              </span>
            </div>
            <input
              className="login-button"
              type="submit"
              value="Se connecter"
            />
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
    </>
  );
}

export default Connexion;
