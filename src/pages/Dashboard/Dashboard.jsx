import { useQuery } from "@tanstack/react-query";
import Chart from "chart.js/auto";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ApiUrl } from "../../outils/URL";
import "./dashboard.css";
function Dashboard() {
  const [contacts, setContacts] = useState(0);
  const [messages, setMessages] = useState(0);

  const token = Cookies.get("NaN_Digit_Sender_Token_Secretly");

  const fetchContacts = async () => {
    let response = await fetch(`${ApiUrl}contact/getAll`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.json();
    return data;
  };

  const fetchMessages = async () => {
    let response = await fetch(`${ApiUrl}message/getAll`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.json();
    return data;
  };

  const {
    isPending: contactsPending,
    isError: contactsError,
    data: contactsData,
    error: contactsErrorData,
  } = useQuery({
    queryKey: ["contact"],
    queryFn: fetchContacts,
  });

  const {
    isPending: messagesPending,
    isError: messagesError,
    data: messagesData,
    error: messagesErrorData,
  } = useQuery({
    queryKey: ["message"],
    queryFn: fetchMessages,
  });

  const chartRef = useRef(null);

  useEffect(() => {
    if (contactsData && contactsData.total && contacts === 0) {
      setContacts(contactsData.total);
    }
  }, [contactsData, contacts]);

  useEffect(() => {
    if (messagesData && messagesData.total && messages === 0) {
      setMessages(messagesData.total);
    }
  }, [messagesData, messages]);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      const newChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Messages",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
      });
      chartRef.current.chart = newChart;
    }
  }, []);
  if (contactsPending || messagesPending) return <div>Chargement...</div>;

  if (contactsError || messagesError)
    return (
      <div>
        Erreur lors du chargement des données:
        {contactsError ? contactsErrorData.message : messagesErrorData.message}
      </div>
    );

  return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
        <div className=" overflow-y-none p-4  bg-[#1E2029]">Dashboard</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-4 overflow-Y-auto">
          <div className="h-52 bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105">
            <div className="p-4">
              <h1>Message</h1>
              <h2 className="my-8">{messages}</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link to="/message">
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="h-52 bg-violet-600 cursor-pointer rounded-md shadow-md transition transform hover:scale-105 ">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">{contacts}</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 text-black font-extrabold text-right bg-white">
              <Link to="/contact">
                <h1>Voir</h1>
              </Link>
            </div>
          </div>
        </div>
        {/* Exemple de graphique en barres */}
        <div className="my-4 p-4 bg-white rounded-md w-full">
          <h2 className="text-2xl font-bold mb-4">Exemple de Graphique</h2>
          <canvas id="myChart" ref={chartRef} width="400" height="200"></canvas>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
