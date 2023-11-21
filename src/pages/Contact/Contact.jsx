import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import ListingContacts from "./ListingContacts";





function Contacts() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Topbar />
        <ListingContacts />
      </div>
    </>
  );
}

export default Contacts;
