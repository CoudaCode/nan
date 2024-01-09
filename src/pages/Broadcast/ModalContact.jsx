import axios from "axios";
import { useEffect, useState  } from "react";
import { FaPlus } from "react-icons/fa";
import { ApiUrl } from "../../outils/URL";
import { IsCookies } from "../../outils/IsCookie";
// import PropTypes from 'prop-types';


const ModalContact = props => {
    const [AllContacts,SetAllContacts] = useState([]);
    // const [SetUp, SetSetUp] = useState([]);
    const register = props.register;
    const contactChecked = props.contactChecked;
    const handleChange = props.handleChange;
    
    useEffect(()=>{
        // let form = document.getElementById('myForm');
        let modal = document.getElementById('myModal');
        let btnModal = document.getElementById('btnModal');
        let closeModal = document.getElementById('closeModal');
        let closeBtn = document.getElementById('closeBtn');

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

        axios.get(ApiUrl+'contact/getAll', {headers: {Authorization: 'token '+IsCookies()}})
        .then(success => {
            const genereInputCheckBox = success.data.data.sort((a, b) => a.fullname.localeCompare(b.fullname)).map(item => {
                return(
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
                        <span className="ml-2">{item.fullname}</span>
                    </label>
                )
            });

            SetAllContacts(genereInputCheckBox);


            YouWantToCheckInput(contactChecked)


        })
        .catch(error => {
            console.log(error.response);
        });

        
    }, []);

    var YouWantToCheckInput = (e) => {
        const checkeding = document.querySelector('.checkeding').querySelectorAll('input');
        console.log(e);
        [...checkeding].map(item => item.checked = e.map(contact => contact.id).includes(item.id.split('-')[1]))
    }


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
                        {AllContacts}
                    </div>
                    
                    <button type="button" className="bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-600" id="closeBtn">Confirmer</button>
                    
                </div>
            </div>
        </>
    )
}

export default ModalContact