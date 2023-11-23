import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import ListingCollaborateur from "./ListingCollaborateur";

function Collaborateur() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Topbar />
        <ListingCollaborateur />
      </div>
    </>
  );
}

export default Collaborateur;
