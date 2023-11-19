import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Cards from "./Cards";
import Resumes from "./Resumes";

function Dashboard() {
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
