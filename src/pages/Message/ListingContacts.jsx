import axios from "axios"
import { ApiUrl } from "../../outils/URL";
import { useEffect, useState } from "react";
import { IsCookies } from "../../outils/IsCookie";

export default function ListingContacts(propos) {
    const [contacts, SetContacts] = useState([]);
    const handleChange = propos.handleChange;
    const register = propos.register;
    
    
    
    useEffect(  ()=> {
        axios.get(ApiUrl+'contact/getAll', {headers: {Authorization: `token ${IsCookies()}`}})
        .then(response => {
            const mipping = response.data.data.map(item => {
                return(
                    <>
                    <label className="inline-flex items-center m-2 text-purple-600" key={item.id} htmlFor={'checkbox-'+item.id}>
                        <input
                            type="checkbox"
                            name="contact"  
                            // checked={contactChecked && contactChecked.map(contact => contact.id).includes(item.id)}
                            value={item.id}
                            id={'checkbox-'+item.id}
                            className="form-checkbox"
                            // onClick={countChecked}
                            {...register("contact")}
                            autoComplete="contact"
                            onChange={handleChange}
                        />
                        <span className="ml-2">
                            {item.fullname}
                        </span>
                    </label>


                    </>
                )
            });

            SetContacts(mipping);
        })
    }, []);

    const isOpen = propos.isOpen;
    const onClose = propos.onClose;

    

    if(!isOpen) return null;

  return (
        <div className="fixed rounded-lg inset-0 z-50  flex items-center justify-center">
            <div className="fixed inset-0 z-0 flex items-center justify-center">
                <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

                <div className="rounded-lg bg-white p-8 shadow-2xl z-10 w-[85%]">
                    <h2 className='text-blue-900 font-bold'>Veuillez ajouter des contacts</h2>
                    <div className="ListingContacts checkeding flex flex-wrap m-3">{contacts}</div>
                    <button type="button"  className='bg-red-500 hover:bg-red-700 rounded' onClick={()=>onClose()}>Fermer</button>
                </div>
            </div>
        </div>
  )
}