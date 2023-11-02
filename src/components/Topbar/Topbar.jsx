import React from "react";
import "./Topbar.css";
import person from "./../../assets/images/person.jpg";
const Topbar = () => {
  return (
    <>
      <nav className="Topbar bg-gray-800 w-full">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <img
              src={person}
              className="rounded-full h-12 w-12 dashimg"
              alt="Profile"
            />
            <h5 className="mt-3 text-lg">Jane S.</h5>
          </div>
          <div className="flex">
            <form className="flex items-center">
              <input
                className="bg-gray-200 rounded-l-lg py-2 px-3 focus:outline-none"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="bg-white text-green-500 rounded-r-lg py-2 px-4 ml-1 hover:bg-green-100"
                type="submit">
                Recherche
              </button>
            </form>
            <div className="ml-4">
              <i className="fa-solid fa-bell"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
