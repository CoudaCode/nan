import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";
const url = "https://nan-send-api.onrender.com";
import "./Entreprise.css";
import logo from "../../assets/images/Nan-Send.png";

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
        </form>
      </div>
    </div>
  </div>
</section>


   </div>
    
  )
}

export default Entreprise;
