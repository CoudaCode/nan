import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Options from "./Options";

import Collaborateur from "./Collaborateur";
import Contact from "./Contact";
import Groupe from "./Groupe";
import Message from "./Message";
import { useEffect, useState } from "react";

function Parametres(){

    const detait = document.querySelector('details');
    return(
        <>
            <Sidebar />
            <div className="main">
                <Topbar  className='erzz'/>
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