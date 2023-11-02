import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";
const url = "https://nan-send-api.onrender.com";
import "./Entreprise.css";

function Entreprise() {
  let token = Cookies.get("token");
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    raisonSociale: "",
    domaineDActivite: "",
    adresse: "",
    type: "",
    nationalite: "",
    password: "",
  });

  const { mutate: entreprise } = useMutation({
    mutationFn: async (send) => {
      console.log("ok", send);

      let response = await axios.post(`${url}/api/entreprise/create`, send, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
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
      // toast.errors(erro)
      // setErrorMessage(errors.response)
    },
  });

  let onSubmit = (data) => entreprise(data);
  return (
    <div className="Entreprise">
      <div className="ensemble">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <div className="input">
              <p htmlFor="email" style={{ color: "#6870e0" }}>
                Complétez vos coordonnées pour commencer.
              </p>
            </div>
            <section className="cadre">
              <div className="input">
                <input
                  required=""
                  autoComplete="off"
                  type="text"
                  id="raisonSociale"
                  {...register("raisonSociale", {
                    require: true,
                    minLength: 2,
                    maxLength: 50,
                  })}
                />
                <label htmlFor="name">Raison Social!</label>
              </div>
              <div className="input">
                <input
                  required=""
                  autoComplete="off"
                  type="text"
                  id="domaineDActivite"
                  {...register("domaineDActivite", {
                    require: true,
                    minLength: 2,
                    maxLength: 50,
                  })}
                />
                <label htmlFor="domaineDActivite">Domaine d'activité</label>
              </div>
              <div className="input">
                <input
                  required=""
                  autoComplete="off"
                  type="text"
                  {...register("adresse", {
                    require: true,
                    minLength: 2,
                    maxLength: 50,
                  })}
                />
                <label htmlFor="adresse">Adresse</label>
              </div>
              {/* <div className="input">
              <input
                required=""
                autoComplete="off"
                type="number"
                placeholder="+225 --- --- --- -"
                style={{ width: "70%" }}
                {...register("fullname",{require:true, minLength:2,maxLength:50, })}
              />
              <label htmlFor="name">Numéro de téléphone</label>
            </div> */}
              <div className="input">
                <input
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
                />
                <label htmlFor="types">Type d'entreprise</label>
              </div>
              <div className="input">
                <input
                  required=""
                  autoComplete="off"
                  type="text"
                  id="emailInfo"
                  {...register("emailInfo", {
                    require: true,
                    minLength: 2,
                    maxLength: 50,
                  })}
                />
                <label htmlFor="name">Email de l'entreprise</label>
              </div>
              <div className="input">
                <input
                  required=""
                  autoComplete="off"
                  type="text"
                  {...register("passwordEmailInfo", {
                    require: true,
                    minLength: 2,
                    maxLength: 50,
                  })}
                />
                <label htmlFor="name">Password de votre mail</label>
                <button type="submit">Enregister Entreprise</button>
              </div>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Entreprise;
