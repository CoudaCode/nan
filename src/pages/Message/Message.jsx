import Sidebar from "../../components/Sidebar/Sidebar";
<<<<<<< HEAD
import Topbar from "../../components/Topbar/Topbar";
import ListingMessage from "./ListingMessage";





=======
// import Topbar from "../../components/Topbar/Topbar";
import "./Message.css"
>>>>>>> c229243d70c18ff91e125a61be000e319648b709
function Message() {
  return (
    <>
      <Sidebar />
<<<<<<< HEAD
      <div className="main">
        <Topbar />
        <ListingMessage />
=======
      <div className="flex-1 flex flex-col overflow-hidden">
        {/*<Topbar />*/}
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
        Message
        </div>
>>>>>>> c229243d70c18ff91e125a61be000e319648b709
      </div>
    </>
  );
}

export default Message;
