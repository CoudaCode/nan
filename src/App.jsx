import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Acceuil from "./pages/Accueil/Acceuil";
function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<h1>Accueil</h1>} />
          <Route path="/dashboard" element={<h1>dashboard</h1>} />
          <Route path="/inscription" element={<h1>inscription</h1>} />
          <Route path="/connexion" element={<h1>connexion</h1>} />
          <Route path="/broadcast" element={<h1>broadcast</h1>} />
          <Route path="/message" element={<h1>message</h1>} />
          <Route path="/reports" element={<h1>reports</h1>} />
          <Route path="/workspace" element={<h1>workspace</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
