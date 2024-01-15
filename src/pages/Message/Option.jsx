

function Options() {
  return (
    <>
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
    </>
  )
}

export default Options;