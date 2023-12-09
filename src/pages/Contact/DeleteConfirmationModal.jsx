function DeleteConfirmationModal({ isOpen, onClose, onConfirm, contact }){
    if (!isOpen || !contact) { return null }
  
    const handleDelete = () => {
      onConfirm();
    };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
  
        <div className="rounded-lg bg-white p-8 shadow-2xl z-10">
          <h2 className="text-lg font-bold">Supprimer le contact</h2>
  
          <p className="mt-2 text-sm text-gray-500">
            Êtes-vous sûr de vouloir supprimer ce contact?
          </p>
  
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
  