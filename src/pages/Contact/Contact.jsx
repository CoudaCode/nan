import Sidebar from "../../components/Sidebar/Sidebar";
import "./Contact.css";

function Contact() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">contact</div>
      </div>
    </div>
  );
}
export default Contact;
