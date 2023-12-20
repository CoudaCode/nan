import axios from "axios";
import { useEffect, useState  } from "react";
import { FaPlus } from "react-icons/fa";
import { ApiUrl } from "../../outils/URL";
import { IsCookies } from "../../outils/IsCookie";

const ModalContact = (props) => {
    const register = props.register;
    const contactChecked = props.contactChecked;
    const [AllContacts,SetAllContacts] = useState([]);
    useEffect(()=>{
        var form = document.getElementById('myForm');
        var modal = document.getElementById('myModal');
        var btnModal = document.getElementById('btnModal');
        var closeModal = document.getElementById('closeModal');
        var closeBtn = document.getElementById('closeBtn');

        // Afficher le modal lors du clic sur le bouton
        btnModal.addEventListener('click', function () {
            modal.classList.remove('hidden');
        });

        // Fermer le modal lors du clic sur le bouton de fermeture
        closeModal.addEventListener('click', function () {
            modal.classList.add('hidden');
        });

        // Fermer le modal lors du clic sur le bouton "Fermer" dans le modal
        closeBtn.addEventListener('click', function () {
            modal.classList.add('hidden');
        });

        // Fermer le modal lors du clic en dehors du modal
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.classList.add('hidden');
            }
        });

        // Soumettre le formulaire (Ajoutez votre logique de traitement du formulaire ici)
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            // Ajoutez ici la logique de traitement du formulaire
        });

        axios.get(ApiUrl+'contact/getAll', {headers: {Authorization: 'token '+IsCookies()}})
        .then(success => {
            SetAllContacts(success.data.data)
        })
        .catch(error => {
            console.log(error.response);
        });
    }, []);

    // const countChecked = () => {
    //     // const event = e.target;
    //     const checkeding = document.querySelector('.checkeding')
    //     const nMember = document.getElementById('nMember');

    //     const allInputChecked = checkeding.querySelectorAll('input:checked');
    //     const longue = allInputChecked.length;
    //     nMember.innerHTML = (longue ? longue : 'Aucun') + ` membre${(longue>1 ? 's' : '')}`;
    //     // console.log(allInputChecked);
    // }


    const genereInputCheckBox = AllContacts.sort((a, b) => a.fullname.localeCompare(b.fullname)).map(item => {
        
        return(
            <label className="inline-flex items-center m-2 text-purple-600" key={item._id} htmlFor={'checkbox-'+item._id}>
                <input
                    type="checkbox"
                    name="contact"
                    checked={contactChecked && contactChecked.map(contact => contact._id)}
                    value={item._id}
                    id={'checkbox-'+item._id}
                    className="form-checkbox"
                    // onClick={countChecked}
                    {...register("contact")}
                    autoComplete="contact"
                    onChange={props.handleChange}
                />
                <span className="ml-2">{item.fullname}</span>
            </label>
        )
    })
    return (
        <>
            <div id="myForm" className="block mb-4">
                <button type="button" id="btnModal" className="bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-600 mb-9">
                    <FaPlus />
                    Ajouter contacts
                </button>
            </div>
            <div id="myModal" className="modal hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50" >
                <div className="modal-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-md max-h-80vh" style={{overflowY: 'auto', maxHeight: '95vh', width: '90%'}}>
                    <span className="close absolute top-0 right-0 text-2xl font-bold cursor-pointer" id="closeModal" style={{color: 'black',  margin: 10+'px'}}>&times;</span>
                    {/* <h2>Sélectionner contacts</h2> */}
                    <h3 className="text-1xl font-semibold mb-6 text-purple-600">Sélectionner contacts</h3>
                    {/* <!-- Ajoutez ici le contenu que vous souhaitez afficher dans le modal --> */}
                    <div className="checkeding flex flex-wrap">
                        {genereInputCheckBox}
                    </div>
                    
                    <button type="button" className="bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-600" id="closeBtn">Confirmer</button>
                    
                </div>
            </div>
        </>
    )
}

export default ModalContact