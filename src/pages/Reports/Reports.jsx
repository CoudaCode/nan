import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Reports.css";
import { FaSearch, FaPlus } from "react-icons/fa";
function reports() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029] Reports">
          {" "}
          <div className="flex items-center justify-between pb-4">
            <div className="relative">
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 focus:outline-none  rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="recherche"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch style={{ color: "#6870e0 " }} />
              </div>
            </div>
            <div>
              <button
                id="btn"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                <FaPlus style={{ margin: "8px " }} />
                Restaurer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default reports;
