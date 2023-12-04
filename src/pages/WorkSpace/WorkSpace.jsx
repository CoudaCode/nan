import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./WorkSpace.css";
function WorkSpace() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/*<Topbar />*/}
        <div className="h-full overflow-y-auto px-8 py-4 bg-[#1E2029] ">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="h-48 rounded-lg bg-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              ut.
            </div>  
            <div className="h-48 rounded-lg bg-gray-200 lg:col-span-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              velit mollitia ad quam autem ea nesciunt reprehenderit dolor
              quibusdam eaque.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;
