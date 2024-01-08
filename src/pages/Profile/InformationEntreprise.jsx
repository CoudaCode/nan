export default function InformationEntreprise() {
    return (
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-900/10 p-9">
          <h2 className="text-base font-semibold leading-7 text-white">Informations Entreprise</h2>
          <p className="mt-1 text-sm  text-gray-600">Use a permanent address where you can receive mail.</p>
  
          <form>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-3 overflow-Y-auto">
                  <div className="m-5">
                      <label htmlFor="raisonSociale" className="block text-sm font-medium leading-6 text-white"> Raison Sociale</label>
                      <div className="">
                          <input
                              type="text"
                              name="raisonSociale"
                              id="raisonSociale"
                              autoComplete="raisonSociale"
                              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                      </div>
                  </div>
  
                  <div className="m-5">
                      <label htmlFor="domaineDActivite" className="block text-sm font-medium leading-6 text-white"> Domaine d&apos;Activité</label>
                      <div className="">
                          <input
                              type="text"
                              name="domaineDActivite"
                              id="domaineDActivite"
                              autoComplete="domaineDActivite"
                              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                      </div>
                  </div>
  
                  <div className="m-5">
                      <label htmlFor="adresse" className="block text-sm font-medium leading-6 text-white">Adresse</label>
                      <div className="">
                          <input
                              type="text"
                              name="adresse"
                              id="adresse"
                              autoComplete="adresse"
                              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                      </div>
                  </div>


                    <div className="m-5">
                        <label htmlFor="type" className="block text-sm font-medium leading-6 text-white">Statut de l&apos;entreprise</label>
                        <div className="">
                            <input
                                type="text"
                                name="type"
                                id="type"
                                autoComplete="type"
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="m-5">
                        <label htmlFor="pays" className="block text-sm font-medium leading-6 text-white">Pays</label>
                        <div className="">
                            <input
                                type="text"
                                name="pays"
                                id="pays"
                                autoComplete="pays"
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