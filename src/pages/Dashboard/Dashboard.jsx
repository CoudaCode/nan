import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// // import Topbar from "../../components/Topbar/Topbar";
import "./dashboard.css";
function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-hidden" id="main">
        {/*<Topbar />*/}
        <div className=" overflow-y-none p-4  bg-[#1E2029]">Dashboard</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
          {/* <!-- Card 1 --> */}
          <div className="bg-white cursor-pointer p-6 rounded-md shadow-md transition transform hover:scale-105">
            <h2 className="text-xl text-purple-900 font-bold mb-4">Contacts Actifs</h2>
            <p className="text-gray-600">Nombre total d&apos;utilisateurs actuellement en ligne.</p>
            <div className="mt-4 flex items-center">
              <span className="text-2xl font-bold text-blue-500">156</span>
              <span className="ml-2 text-gray-500">utilisateurs</span>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="bg-white cursor-pointer p-6 rounded-md shadow-md transform hover:scale-105">
            <h2 className="text-xl text-purple-900 font-bold mb-4">Groues de Diffusion</h2>
            <p className="text-gray-600">Nombre de commandes passées au cours du mois.</p>
            <div className="mt-4 flex items-center">
              <span className="text-2xl font-bold text-green-500">28</span>
              <span className="ml-2 text-gray-500">commandes</span>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="bg-white cursor-pointer p-6 rounded-md shadow-md transform hover:scale-105">
            <h2 className="text-xl text-purple-900 font-bold mb-4">Collaborateurs</h2>
            <p className="text-gray-600">Revenu total généré ce mois-ci.</p>
            <div className="mt-4 flex items-center">
              <span className="text-2xl font-bold text-purple-500">$10,500</span>
              <span className="ml-2 text-gray-500">USD</span>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="bg-white cursor-pointer p-6 rounded-md shadow-md transform hover:scale-105">
            <h2 className="text-xl text-purple-900 font-bold mb-4">Message en Cours</h2>
            <p className="text-gray-600">Nombre total de produits disponibles en stock.</p>
            <div className="mt-4 flex items-center">
              <span className="text-2xl font-bold text-orange-500">342</span>
              <span className="ml-2 text-gray-500">produits</span>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="bg-white cursor-pointer p-6 rounded-md shadow-md transform hover:scale-105">
            <h2 className="text-xl text-purple-900 font-bold mb-4">Messages Effectués</h2>
            <p className="text-gray-600">Nombre total de produits disponibles en stock.</p>
            <div className="mt-4 flex items-center">
              <span className="text-2xl font-bold text-orange-500">342</span>
              <span className="ml-2 text-gray-500">produits</span>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="bg-white cursor-pointer p-6 rounded-md shadow-md transform hover:scale-105">
            <h2 className="text-xl text-purple-900 font-bold mb-4">Mombre de Stockes</h2>
            <p className="text-gray-600">Nombre total de produits disponibles en stock.</p>
            <div className="mt-4 flex items-center">
              <span className="text-2xl font-bold text-orange-500">342</span>
              <span className="ml-2 text-gray-500">produits</span>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="bg-white cursor-pointer p-6 rounded-md shadow-md transform hover:scale-105">
            <h2 className="text-xl text-purple-900 font-bold mb-4">Catégories de Produits</h2>
            <p className="text-gray-600">Nombre total de produits disponibles en stock.</p>
            <div className="mt-4 flex items-center">
              <span className="text-2xl font-bold text-orange-500">342</span>
              <span className="ml-2 text-gray-500">produits</span>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="bg-white cursor-pointer p-6 rounded-md shadow-md transform hover:scale-105">
            <h2 className="text-xl text-purple-900 font-bold mb-4">Produits en Stock</h2>
            <p className="text-gray-600">Nombre total de produits disponibles en stock.</p>
            <div className="mt-4 flex items-center">
              <span className="text-2xl font-bold text-orange-500">342</span>
              <span className="ml-2 text-gray-500">produits</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
