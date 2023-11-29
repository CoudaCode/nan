
// import axios from "axios";
import "./validate.css";
// import { ApiUrl } from "../../outils/URL";
// import { useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";




 function Validate() {
  // const navigate = useNavigate();
  // const pathname = useLocation().pathname.split('/');
  // axios.get(ApiUrl + `validate/getByIdAndCode/${pathname[3]}/${pathname[2]}`)
  // .then(response => {
  //     if(response.data.data.expireIn < Date.now()){
  //       toast.error('Email expiré');
  //       navigate('/inscription');
  //     }
  // })
  // .catch(()=> {
  //   toast.error('Email expiré');
  //   navigate('/inscription');
  // })
  
  
  
  return (
    <div className="Inscription" >
      <div className="container">
        <div className="heading">Confirmation d&apos;email</div>
        <div className="social-account-container">
          <span className="title">Nous venons de vous envoyer un email valible pour 10 minutes, veuillez donc confirmer.</span>
          <div className="social-accounts"></div>
        </div>
      </div>
    </div>
  );
}

export default Validate;
