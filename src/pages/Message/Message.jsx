import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { VerifyCookies } from "../Actions/VerifyCookies";
import ListingMessage from "./ListingMessage";






function Message() {
  VerifyCookies();
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
