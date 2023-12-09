import { useState } from "react";


function ModifyConfirmationModal(props){
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const contact = props.contact;
  if (!isOpen || !contact) {
    return null;
  }

  // alert(selectedContact)

  const handleModification = () => {
    // Handle the modification logic here
    // For example, update the contact data in the list
    // ...
    // Close the modal
    onClose();
  };


  const initialFormData = {
    fullname: contact.fullname,
    email: contact.email,
    whatsapp: contact.whatsapp,
    sms: contact.sms,
    hiddenField: contact._id, // Champ invisible
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire soumises :', formData);
    // Ajoutez ici la logique pour traiter les données du formulaire, par exemple, envoyer à un backend
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

      <div className="rounded-lg bg-white p-8 shadow-2xl z-10 w-[40rem]">
        <h2 className="text-lg font-bold">Modifier le contact</h2>

        <form className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h3 className="text-2xl font-semibold mb-6 text-purple-600">Modifier contact</h3>
          <label className="block mb-4">
            <span className="text-gray-700">Nom et Prénom :</span>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
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
              value={formData.email}
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
              value={formData.sms}
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
              value={formData.whatsapp}
              autoComplete="whatsapp"
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
            />
          </label>

          <input type="hidden" name="hiddenField" value={formData.hiddenField} />

          {/* Add other input fields for email, phone, etc. */}

          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" > Soumettre </button>

            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"> Fermer </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifyConfirmationModal;