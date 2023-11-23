import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { VerifyCookies } from "../Actions/VerifyCookies";
import Cards from "./Cards";
import Resumes from "./Resumes";


function Dashboard() {
  VerifyCookies();
  return (
    <>
      <Sidebar />
      <div className="main">
        <Topbar />
        <Cards />
        <Resumes />
      </div>
    </>
  );
}

export default Dashboard;
