import { useState } from "react";


function FormContactModal({ isOpen, onClose, onConfirm, contact }){
    if (!isOpen || !contact) { return null }
  const handleDelete = () => { onConfirm(); };
    const initialvalueInput = {
        fullname: '',
        email: '',
        whatsapp: '',
        sms: '',
    };
    const [valueInput, setvalueInput] = useState(initialvalueInput);
    const handleChange = e => {
        const { name, value } = e.target;
        setvalueInput({ ...valueInput, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données du formulaire soumises :', valueInput);
    };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

        <div className="rounded-lg bg-white p-8 shadow-2xl z-10 w-[40rem]">
            <form className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-6 text-purple-600">Ajouter contact</h3>
                <label className="block mb-4">
                    <span className="text-gray-700">Nom et Prénom : </span>
                    <input
                        type="text"
                        name="fullname"
                        value={valueInput.fullname}
                        autoComplete="fullname"
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Email :</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={valueInput.email}
                        autoComplete="email"
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Téléphone :</span>
                    <input
                        type="tel"
                        name="sms"
                        value={valueInput.sms}
                        autoComplete="sms"
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">WhatsApp :</span>
                    <input
                        type="tel"
                        name="whatsapp"
                        value={valueInput.whatsapp}
                        autoComplete="whatsapp"
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                    />
                </label>


                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" > Soumettre </button>
                    <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"> Fermer </button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default FormContactModal;