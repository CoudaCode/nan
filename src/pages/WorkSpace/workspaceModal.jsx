import { useState } from "react";

const CreateContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const [contactData, setContactData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    whatsapp: "",
  });

  const handleCreateContact = () => {
    // Handle the create contact logic here
    // Use the 'contactData' state for the contact details
    // ...

    // Clear the form and close the modal
    setContactData({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      whatsapp: "",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

      {/* Modal */}
      <div className="mx-auto w-2/4 bg-white max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded-lg shadow-2xl z-10">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl text- font-bold text-white sm:text-3xl">
            Remplissez les champs svp!
          </h1>
        </div>

        {/* <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <p>En cours ....</p>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="rounded bg-violet-500  hover:bg-violet-900  px-4 py-2 text-sm font-medium text-white"
              onClick={handleCreateContact}>
              Confirmer l&apos;ajout
            </button>

            <button
              type="button"
              className="rounded bg-red-500 hover:bg-red-900  px-4 py-2 text-sm font-medium text-white"
              onClick={onClose}>
              Annuler
            </button>
          </div>
        </form> */}
        <form
          className="FormSaveContact max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-md"
          >
          <h3 className="text-2xl font-semibold mb-6 text-purple-600">
           Planifier une diffusion
          </h3>
          <label className="block mb-4">
            <span className="text-gray-700">
              Nom et Prénom / Raison Sociale :{" "}
            </span>
            <input
              type="text"
              name="fullname"
            
              placeholder="Nom et Prénom / Raison Sociale"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
              autoComplete="fullname"
             
            />
            {/* {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname.message}</p>
            )} */}
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Email :</span>
            <input
              type="email"
              name="email"
              placeholder="Adresse E-mail"
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
              autoComplete="email"
        
            />
            {/* {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )} */}
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Téléphone :(Pour SMS)</span>
            <input
              type="tel"
              name="sms"
                        placeholder="Adresse téléphonique"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
            
              autoComplete="sms"
            />
            {/* {errors.sms && (
              <p className="text-red-500 text-sm">{errors.sms.message}</p>
            )} */}
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">WhatsApp :</span>
            <input
              type="tel"
              name="whatsapp"
              
              placeholder="Adresse WhatsApp"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
              autoComplete="whatsapp"
            />
            {/* {errors.whatsapp && (
              <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>
            )} */}
          </label>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              {" "}
              Planifier{" "}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
              {" "}
              Annuler{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContactModal;
