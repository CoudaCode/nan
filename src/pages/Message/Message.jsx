import {useState} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
// import "./Message.css";
function Message() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Sidebar />
      <div className="main flex-1 flex flex-col overflow-hidden" id="main">
       {/* <Topbar />*/} 
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">

          <div className="container flex mx-auto">
            <div className="w-1/2 px-2" >
                <div className="w-full flex justify-evenly">
                  <div className="w-1/2">
                     <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center ">
                      <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                      <span>Vers  Contact</span>
                    </button>
                  </div>
                  <div className=" flex justify-evenly  px-2 bg-white py-2">
                        <button className="bg-gray-400 hover:bg-grey text-grey-darkest font-bold py-2 px-2 mr-2 rounded inline-flex items-center">
                            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Download</span>
                        </button>
                        <button className="bg-gray-400 hover:bg-grey text-grey-darkest font-bold py-2 px-2 rounded inline-flex items-center">
                            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Download</span>
                        </button>
                  </div>
                </div>
                <div className="w-full flex justify-evenly py-2">
                    <div className="w-1/2">
                       <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center ">
                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Vers teams</span>
                      </button>
                    </div>
                    <div className=" flex justify-evenly  px-2 bg-white py-2">
                          <button className="bg-gray-400 hover:bg-grey text-grey-darkest font-bold py-2 px-2 mr-2 rounded inline-flex items-center">
                              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                              <span>Download</span>
                          </button>
                          <button className="bg-gray-400 hover:bg-grey text-grey-darkest font-bold py-2 px-2 rounded inline-flex items-center">
                              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                              <span>Download</span>
                          </button>
                    </div>
                </div>
                <div className="w-full max-w-lg">
                      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                          <div className="mb-4 flex justify-evenly items-center">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                              Objet
                            </label>
                             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/ >
                          </div>
                          <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                              Entrer le message
                            </label>border-red-500
                            <textarea rows="10" cols="20" className="shadow appearance-none  rounded border border-gray-500 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" >
                            </textarea>
                           
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                              Ajouter une image
                            </a>
                          </div>
                          <div className="flex items-center justify-center ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                              selectionner le canal d&apos;envoi
                            </button>
                             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                              Envoyer
                            </button>
                          </div>
                      </form>
                </div>
            </div>
            <div className="w-1/2" >
                <div className="w-full bg-white">
                <div className="flex justify-center items-center py-2">
                    <h2 className="text-gray-700 mb-2">Mes Messages</h2>
                </div>
                  <div className="w-1/2 mx-5 flex items-center justify-center bg-indigo-600 ">
                      <h3>individuel</h3>
                  </div>
                  <div className="max-w-lg mx-auto mt-10">
                      <div className="p-3 w-full flex items-center justify-evenly border-t cursor-pointer hover:bg-gray-200">
                          <div className="  flex items-center">
                              <div className="mr-2 flex flex-col px-2">
                                  <div className="leading-snug text-sm w-20 text-gray-900 font-bold">john doe</div>
                              </div>
                              <div className="ml-2 flex flex-col">
                                  <div className="leading-snug text-sm w-40 text-gray-900 font-bold">bonjour chère famille .........</div>
                              </div>
                          </div>
                          <button className="h-8 px-3 text-md font-bold  text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">supprimer</button>
                      </div>
                      <div className="p-3 w-full flex items-center justify-evenly border-t cursor-pointer hover:bg-gray-200">
                          <div className="  flex items-center">
                              <div className="mr-2 flex flex-col px-2">
                                  <div className="leading-snug text-sm w-20 text-gray-900 font-bold">john doe</div>
                              </div>
                              <div className="ml-2 flex flex-col">
                                  <div className="leading-snug text-sm w-40 text-gray-900 font-bold">bonjour chère famille .........</div>
                              </div>
                          </div>
                          <button className="h-8 px-3 text-md font-bold  text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">supprimer</button>
                      </div>
                      <div className="p-3 w-full flex items-center justify-evenly border-t cursor-pointer hover:bg-gray-200">
                          <div className="  flex items-center">
                              <div className="mr-2 flex flex-col px-2">
                                  <div className="leading-snug text-sm w-20 text-gray-900 font-bold">john doe</div>
                              </div>
                              <div className="ml-2 flex flex-col">
                                  <div className="leading-snug text-sm w-40 text-gray-900 font-bold">bonjour chère famille .........</div>
                              </div>
                          </div>
                          <button className="h-8 px-3 text-md font-bold  text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">supprimer</button>
                      </div>
                  </div>
                  <div className="w-1/2 mx-5 flex items-center justify-center bg-indigo-600 ">
                      <h3>Par Teams</h3>
                  </div>
                    <div className="max-w-lg mx-auto mt-10">
                      <div className="p-3 w-full flex items-center justify-evenly border-t cursor-pointer hover:bg-gray-200">
                          <div className="  flex items-center">
                              <div className="mr-2 flex flex-col px-2">
                                  <div className="leading-snug text-sm w-20 text-gray-900 font-bold">teams tout</div>
                              </div>
                              <div className="ml-2 flex flex-col">
                                  <div className="leading-snug text-sm w-40 text-gray-900 font-bold">bonjour chère famille .........</div>
                              </div>
                          </div>
                          <button className="h-8 px-3 text-md font-bold  text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">supprimer</button>
                      </div>
                      <div className="p-3 w-full flex items-center justify-evenly border-t cursor-pointer hover:bg-gray-200">
                          <div className="  flex items-center">
                              <div className="mr-2 flex flex-col px-2">
                                  <div className="leading-snug text-sm w-20 text-gray-900 font-bold">Teams whatsapp</div>
                              </div>
                              <div className="ml-2 flex flex-col">
                                  <div className="leading-snug text-sm w-40 text-gray-900 font-bold">bonjour chère famille .........</div>
                              </div>
                          </div>
                          <button className="h-8 px-3 text-md font-bold  text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">supprimer</button>
                      </div>
                      <div className="p-3 w-full flex items-center justify-evenly border-t cursor-pointer hover:bg-gray-200">
                          <div className="  flex items-center">
                              <div className="mr-2 flex flex-col px-2">
                                  <div className="leading-snug text-sm w-20 text-gray-900 font-bold">temas sms</div>
                              </div>
                              <div className="ml-2 flex flex-col">
                                  <div className="leading-snug text-sm w-40 text-gray-900 font-bold">bonjour chère famille .........</div>
                              </div>
                          </div>
                          <button className="h-8 px-3 text-md font-bold  text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">supprimer</button>
                      </div>
                  </div> 

                </div>

            </div>
             
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
