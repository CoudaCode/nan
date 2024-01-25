function FormDate(propos) {
  const isOpen = propos.isOpen;
  const register = propos.register;
  const onClose = propos.onClose;
  const confirming = propos.confirming;
  const handleChange = propos.handleChange;


  if(!isOpen) return null;
  return (
    <div className="fixed rounded-lg inset-0 z-50  flex items-center justify-center">
            <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
            <div className="rounded-lg bg-white p-5 shadow-2xl z-10 w-[400px]">
              <h2 className='text-blue-900 text-center font-bold'>Définir la date d&apos;envoie du message</h2>
              <div className="checkeding items-center justify-center shadow-md flex flex-wrap p-5 m-3">
                <div className="m-5">
                  <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="sendingDate">Programmer la date et heure d&apos;envoi</label>
                  <input
                    className="shadow appearance-none rounded border border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="sendingDate"
                    type="datetime-local"
                    name="sendingDate"
                    onChange={handleChange}
                    {...register('sendingDate')}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline mr-4"
                    type="button"
                    onClick={onClose}
                  >
                    Annuler
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={confirming}
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
    </div>
  );
}

export default FormDate;
