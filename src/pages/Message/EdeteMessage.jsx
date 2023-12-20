import { useForm } from "react-hook-form";
import EditeForm from "./EditeForm";

function EdeteMessage(){
    const { register, handleSubmit  } = useForm({ canal:"", groupe: "", contact: "",  object: "", contenu: "", piecesJointes: ""});
    return(
        <>
        <div className="details-edite">
            <div className="recentOrders">
                
            </div>
            
        </div>
        <div className="details-edite" id="details-message">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h1>Créer Message</h1>
                </div>
                <EditeForm />
            </div>
        </div>
        </>
    )
}

export default EdeteMessage;