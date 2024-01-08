

export default function InformationPerso() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-900/10 p-9">
        <h2 className="text-base font-semibold leading-7 text-white">Informations Personnelles</h2>
        <p className="mt-1 text-sm  text-gray-600">Use a permanent address where you can receive mail.</p>

        <form>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-3 overflow-Y-auto">
                <div className="m-5">
                    <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-white"> Nom et Prénom(s)</label>
                    <div className="">
                        <input
                        
                        type="text"
                        name="fullname"
                        id="fullname"
                        autoComplete="fullname"
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="m-5">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white"> Adresse E-mail</label>
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
                    <label htmlFor="telephone" className="block text-sm font-medium leading-6 text-white"> Téléphone</label>
                    <div className="">
                        <input
                        
                        type="tel"
                        name="telephone"
                        id="telephone"
                        autoComplete="telephone"
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>


                <div className="m-5">
                    <label htmlFor="nationalite" className="block text-sm font-medium leading-6 text-white">Nationalité</label>
                    <div className="">
                        <input      
                        type="text"
                        name="nationalite"
                        id="nationalite"
                        autoComplete="nationalite"
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
  );
}