import "./Sendmessage.css"
import images from "../../assets/images/whatsapp1.png";
import imgs from "../../assets/images/msgGroupé1.jpg"
function SendMessage() {
  return (
    <div className="SendMessage">
      <div className="part-left">
        <h3 className="title">BOÎTE DE RÉCEPTION DES SendMESSAGES</h3>
        <h3 className="fil">Un interlocuteur, <span>un fil</span></h3>
        <div className="card-body ">
          <p>
            Un témoignage client unique contenant chaque Sendmessage,<br/> e-mail,
            chat Web et discussion interne.{" "}
          </p>
          <p>
            Toutes les fonctionnalités que vous attendez et certaines que
            vous ne trouverez nulle part ailleurs.
          </p>
        </div>
      </div>
      <div className="part-right">
        <div className="cardImg">
            <img src={imgs} alt=""/>
        </div>
      </div>

    </div>
   
  );
}

export default SendMessage;
