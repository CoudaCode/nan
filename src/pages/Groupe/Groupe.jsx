import Cookies from "js-cookie";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import ListingGroupe from "./ListingGroupe";
import axios from "axios";
import { useEffect, useState } from "react";
import ApiUrl from "../../components/ApiUrl/ApiUrl";


function Groupe() {
    let token = Cookies.get("NaN_Digit_Sender_Token_Secretly");
    const [DataListingGroupe, setDataListingGroupe] = useState([]);
    useEffect(()=>{
        axios.get(ApiUrl+'/api/groupe/getAll', { headers: { Authorization: `token ${token}`}})
        .then(allGroupe => {
            if(allGroupe.data.status) setDataListingGroupe(allGroupe.data.data);
        });
    }, [token]);
  return (
    <>
      <Sidebar />
      <div className="main">
        <Topbar />
        <ListingGroupe AllGroupes ={DataListingGroupe}/>
      </div>
    </>
  );
}

export default Groupe;
