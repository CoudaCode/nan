export default function InformationMessagerie() {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-900/10 p-9">
            <h2 className="text-base font-semibold leading-7 text-white">Informations de Messagerie</h2>
            <p className="mt-1 text-sm  text-gray-600">Use a permanent address where you can receive mail.</p>
  
            <form>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 p-3 overflow-Y-auto">
                    <div className="m-5">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white"> Adresse E-mail de messagerie</label>
                        <div className="">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
  
                    <div className="m-5">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white"> Mot de passe servant à ce connecter au boite mail</label>
                        <div className="">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="password"
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
  
                    <div className="m-5">
                        <label htmlFor="smsAdresse" className="block text-sm font-medium leading-6 text-white">Adresse Téléphonique de SMS</label>
                        <div className="">
                            <input
                                type="tel"
                                name="smsAdresse"
                                id="smsAdresse"
                                autoComplete="smsAdresse"
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div className="m-5">
                        <label htmlFor="whatsappAdresse" className="block text-sm font-medium leading-6 text-white">Adresse Téléphonique de WhatsApp</label>
                        <div className="">
                            <input
                                type="tel"
                                name="whatsappAdresse"
                                id="whatsappAdresse"
                                autoComplete="whatsappAdresse"
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

            
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold rounded bg-red-600 hover:bg-red-900 text-white">
                        Annuler
                        </button>
                        <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Save
                        </button>
                    </div>
              </div>
          </form>
      </div>
    )
  }