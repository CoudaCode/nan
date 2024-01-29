import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ApiUrl } from "../../outils/URL";
import "./dashboard.css";
import { toast } from "react-toastify";
import { IsCookies, DeleteCookies } from "../../outils/IsCookie";
import { Line, Bar, Doughnut, Pie, Radar, PolarArea } from 'react-chartjs-2';
import Deconnexion from "../Deconnexion/Deconnexion";


function Dashboard() {
  const [contacts, setContacts] = useState(0);
  const [messages, setMessages] = useState(0);

  const fetchContacts = async () => {
    let response = await fetch(`${ApiUrl}contact/getAll`, {
      headers: {
        Authorization: `Bearer ${IsCookies()}`,
      },
    });
    let data = await response.json();
      return data;
    };

  const fetchMessages = async () => {
    let response = await fetch(`${ApiUrl}message/getAll`, {
      headers: {
        Authorization: `Bearer ${IsCookies()}`,
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

  // const chartRef = useRef(null);

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


  const navigate = useNavigate();
  useEffect(()=>{
    if(!IsCookies()){
      toast.error('Session expirée, veuillez vous connecter !');
      navigate('/connexion');
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

  const dataMessage = {
    labels: ['Envoyé', 'En cours', 'Echoué', 'Supprimé'],
    datasets: [
      {
        label: 'Statistiques de Messagérie',
        data: [12, 19, 3, 5],
        backgroundColor: ['rgba(175,192,192,0.2)', 'rgba(255,99,132,0.2)', 'rgba(255,205,86,0.2)', 'rgba(54,162,235,0.2)'],
        borderColor: ['rgba(175,192,192,1)', 'rgba(255,99,132,1)', 'rgba(255,205,86,1)', 'rgba(54,162,235,1)'],
        borderWidth: 1,
      },
    ],
  };

  const dataContact = {
    labels: ['Email', 'SMS', 'WhatsApp'],
    datasets: [
      {
        label: 'Statistiques de Contact',
        data: [12, 19, 9],
        backgroundColor: ['rgba(75,192,122,0.2)', 'rgba(255,199,132,0.2)', 'rgba(255,25,186,0.2)'],
        borderColor: ['rgba(75,192,122,0.2)', 'rgba(255,199,132,0.2)', 'rgba(255,25,186,0.2)'],
        borderWidth: 1,
      },
    ],
  };

  const dataEntreprise = {
    labels: ['Envoyé', 'En cours', 'Echoué', 'Supprimé'],
    datasets: [
      {
        label: 'Statistiques de Messagérie',
        data: [12, 19, 3, 5],
        backgroundColor: ['rgba(175,192,192,0.2)', 'rgba(255,99,132,0.2)', 'rgba(255,205,86,0.2)', 'rgba(54,162,235,0.2)'],
        borderColor: ['rgba(175,192,192,1)', 'rgba(255,99,132,1)', 'rgba(255,205,86,1)', 'rgba(54,162,235,1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  

  const chartContainerStyle = "transition transform rounded-md shadow-md cursor-pointer bg-white";
const chartStyle = "w-full h-64";

const LineChartExample = () => (
  <div className={chartContainerStyle}>
    <div className={chartStyle}>
      <Line data={dataMessage} options={options} />
    </div>
  </div>
);

const BarChartExample = () => (
  <div className={chartContainerStyle}>
    <div className={chartStyle}>
      <Bar data={dataMessage} options={options} />
    </div>
  </div>
);

const DoughnutChartExample = () => (
  <div className={chartContainerStyle}>
    <div className={chartStyle}>
      <Doughnut data={dataMessage} options={options} />
    </div>
  </div>
);

const PieChartExample = () => (
  <div className={chartContainerStyle}>
    <div className={chartStyle}>
      <Pie data={dataMessage} options={options} />
    </div>
  </div>
);

const RadarChartExample = () => (
  <div className={chartContainerStyle}>
    <div className={chartStyle}>
      <Radar data={dataMessage} options={options} />
    </div>
  </div>
);

const PolarAreaChartExample = () => (
  <div className={chartContainerStyle}>
    <div className={chartStyle}>
      <PolarArea data={dataMessage} options={options} />
    </div>
  </div>
);
  

  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-1 p-4 overflow-y-auto main" id="main">
        <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
            <div className="flex items-center"> Dashboard </div>
            <Deconnexion />
        </div>

        <div className="grid grid-cols-1 gap-4 m-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-Y-auto">
          <div className="transition transform rounded-md shadow-md cursor-pointer h-52 bg-violet-600 hover:scale-105">
            <div className="p-4">
              <h1>Message</h1>
              <h2 className="my-8">{messages}</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 font-extrabold text-right text-black bg-white">
              <Link to="/message">
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="transition transform rounded-md shadow-md cursor-pointer h-52 bg-violet-600 hover:scale-105">
            <div className="p-4">
              <h1>Contacts</h1>
              <h2 className="my-8">{contacts}</h2>
              <div className="text-right">
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className="p-2 font-extrabold text-right text-black bg-white">
              <Link to="/contact">
                <h1>Voir</h1>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 m-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-Y-auto">

          <div className="transition transform rounded-md shadow-md cursor-pointer h-52 bg-white hover:scale-105">
            <BarChartExample />
          </div>

          <div className="transition transform rounded-md shadow-md cursor-pointer h-64 bg-white hover:scale-105">
            <LineChartExample /> 
          </div>

          <div className="transition transform rounded-md shadow-md cursor-pointer h-64 bg-white hover:scale-105">
            <DoughnutChartExample /> 
          </div>

          <div className="transition transform rounded-md shadow-md cursor-pointer h-64 bg-white hover:scale-105">
            <PieChartExample /> 
          </div>

          <div className="transition transform rounded-md shadow-md cursor-pointer h-64 bg-white hover:scale-105">
            <RadarChartExample /> 
          </div>

          <div className="transition transform rounded-md shadow-md cursor-pointer h-64 bg-white hover:scale-105">
            <PolarAreaChartExample /> 
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
