import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Acceuil from "./pages/Accueil/Acceuil";
import Dashboard from "./pages/Dashboard/Dashboard";
import Message from "./pages/Message/Message";
// import Profile from "./pages/Profile/Profile";
import Broadcast from "./pages/Broadcast/Broadcast";
import Connexion from "./pages/Connexion/Connexion";
import Inscription from "./pages/Inscription/Inscription";
import Reports from "./pages/Reports/Reports";
import WorkSpace from "./pages/WorkSpace/WorkSpace";
import Contact from "./pages/Contact/Contact";
import Entreprise from "./pages/Entreprise/Entreprise";
import Verification from "./pages/Verification/Verification";
import Validate from "./pages/Validate/Validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MessageDetail from "./pages/MessageDetail/MessageDetail";
import Profil from "./pages/Profile/Profil";

import "chart.js/auto";
import NotFound from "./pages/NotFound/NotFound";

import Historique from "./pages/Admin/Historique/Historique";
import Details from "./pages/Admin/Details/Details";
// import { useLocation } from "react-router-dom";
  



function App() {
  const client = new QueryClient();
  // const path = useLocation().pathname;
  return (
    <>
      <QueryClientProvider client={client}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/detail" element={<Details />} />
          <Route path="/admin/entreprise" element={<Historique />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/broadcast" element={<Broadcast />} />
          <Route path="/message" element={<Message />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/workspace" element={<WorkSpace />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/validate/:user/:code" element={<Validate />} />
          <Route path="/message/:id/:detail" element={<MessageDetail />} />

          <Route path="/profile" element={<Profil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
