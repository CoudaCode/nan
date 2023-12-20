import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Options from "./Options";

import Collaborateur from "./Collaborateur";
import Contact from "./Contact";
import Groupe from "./Groupe";
import Message from "./Message";

function Parametres(){
    return(
        <>
            <Sidebar />
            <div className="main">
                <Topbar />
                <Options />
                <Collaborateur/>
                <Contact />
                <Groupe />
                <Message />
            </div>
        </>
    )
}

export default Parametres;