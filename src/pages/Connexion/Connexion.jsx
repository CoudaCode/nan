import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Cookie from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import "./Connexion.css";
import { ApiUrl } from "../../outils/URL";

  function Connexion() {
    const navigate = useNavigate();
    const login = async (data) => {
      const result = await axios.post( ApiUrl+ "auth/login", data );
      return result;
    };

    const { register, handleSubmit, formState: { errors } } = useForm({ email: "", password: "" });

    const { mutate: loginUser } = useMutation({
      mutationFn: (Mydata) => login(Mydata),
      onSuccess: (succes) => {
        console.log("demo", succes.data);
        toast.success(succes.data.message);
        Cookie.set("NaN_Digit_Sender_Token_Secretly", succes.data.token, { expires: 3600 * 24 });
        setTimeout(() => {
          sessionStorage.setItem("NaN_Digit_Sender_Token_Secretly", JSON.stringify(succes.data.id));
          navigate("/dashboard");
        }, 3000);
      },
      onError: (e) => {
        console.log(e.response.data.message);
        toast.error(e.response.data.message);
      },
    });

    const onSubmit = (data) => loginUser(data);
    return (
      <>
        <div className="Connexion">
          <div className="container">
            <div className="heading">Connexion</div>
            <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("email", {
                  require: true,
                  minLength: 5,
                  maxLength: 50,
                  pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Veuillez entrer un adresse mail valide." },
                  validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                })}
                className="input"
                type="email"
                id="email"
                placeholder="Adresse Email"
              />
              {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
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
                    value: /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/,
                    message: "Le mot de passe doit contenu au moins: 8 caractères, une majuscule, une minuscule, un symbole et aucun espace."
                  },
                  validate: {notEmpty: value => /^\S+$/.test(value) || "Ce champ ne peut pas être vide ou contenir uniquement des espaces."}
                })}
              />
              {errors.password && (<p className="text-red-500 text-sm">{errors.password.message}</p>)}

              <span className="forgot-password">
                <a href="#">Mot de passe oublié ?</a>
              </span>
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
