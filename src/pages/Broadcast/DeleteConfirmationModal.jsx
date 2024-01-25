import axios from "axios";
import { toast } from "react-toastify";
import { ApiUrl } from "../../outils/URL";
import { IsCookies } from "../../outils/IsCookie";

function DeleteConfirmationModal(propos){

  const isOpen = propos.isOpen;
  const onClose = propos.onClose;
  const contact = propos.contact;
  const onConfirm = propos.onConfirm;
  
  const handleDelete = async () => {
    console.table(contact)
    const lignTr = document.getElementById(`ligne-${contact.id}`);
    axios.delete(ApiUrl+'groupe/delete/'+contact.id, {headers: {Authorization: `token ${IsCookies()}`}})
    .then(success => {
      toast.success(success.data.message);
      lignTr.classList.add('deleted');
      setTimeout(() => lignTr.remove(), 3000);

    })
    .catch(error => {
      toast.success(error.response.message);
    })
    onConfirm();
  };

  if (!isOpen || !contact) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

      <div className="rounded-lg bg-white p-8 shadow-2xl z-10">
        <h2 className="text-lg font-bold">Supprimer le contact</h2>

        <div className="font-semibold mt-2 text-sm text-gray-500">
          Êtes-vous sûr de vouloir supprimer ce contact?
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="rounded bg-red-500 px-4 py-2 text-sm font-medium text-white"
            onClick={handleDelete}>
            Oui
          </button>

          <button
            type="button"
            className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
            onClick={onClose}>
            Non
          </button>
        </div>
      </div>
    </div>
  );
}

  export default DeleteConfirmationModal;
  