import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import ListingMessage from "./ListingMessage";





function Message() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Topbar />
        <ListingMessage />
      </div>
    </>
  );
}

export default Message;
