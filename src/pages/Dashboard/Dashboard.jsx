// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ApiUrl } from "../../outils/URL";
import "./dashboard.css";
import { toast } from "react-toastify";
import { IsCookies } from "../../outils/IsCookie";
import { Line, Bar, Doughnut, Pie, Radar, PolarArea } from 'react-chartjs-2';
import Deconnexion from "../Deconnexion/Deconnexion";
import axios from "axios";



function Dashboard() {
  const [contacts, setContacts] = useState(0);
  const [messages, setMessages] = useState(0);
  const [messagesSending, setMessageSending] = useState(0);
  const [groupe, setGroupe] = useState(0);

  const [contactDelete, setContactDelete] = useState(0);
  const [, setMessageDelete] = useState(0);
  const [, setGroupeDelete] = useState(0);


  useEffect(() => {
    axios.get(ApiUrl+'message/getAllSending', {headers: {Authorization: `token ${IsCookies()}`}})
    .then(success => setMessageSending(success.data.data.length))
  }, []);

  useEffect(() => {
    axios.get(ApiUrl+'contact/getAll', {headers: {Authorization: `token ${IsCookies()}`}})
    .then(success => setContacts(success.data.data.length))
  },  []);

  useEffect(() => {
    axios.get(ApiUrl+'message/getAll', {headers: {Authorization: `token ${IsCookies()}`}})
    .then(success => setMessages(success.data.data.length))
  }, []);

  useEffect(() => {
    axios.get(ApiUrl+'groupe/getAll', {headers: {Authorization: `token ${IsCookies()}`}})
    .then(success => setGroupe(success.data.data.length))
  }, []);



  useEffect(() => {
    axios.get(ApiUrl+'groupe/getAllDelete', {headers: {Authorization: `token ${IsCookies()}`}})
    .then(success => setGroupeDelete(success.data.data.length))
  }, [])

  useEffect(() => {
    axios.get(ApiUrl+'message/getAllDelete', {headers: {Authorization: `token ${IsCookies()}`}})
    .then(success => setMessageDelete(success.data.data.length))
  }, []);

  useEffect(() => {
    axios.get(ApiUrl+'contact/getAllDelete', {headers: {Authorization: `token ${IsCookies()}`}})
    .then(success => setContactDelete(success.data.data.length))
  }, [])


  useEffect(() => {
    axios.get(ApiUrl+'contact/getAll', {headers: {Authorization: `token ${IsCookies()}`}})
    // .then(success => setContactDelete(success.data.data.length))
  }, [])

  useEffect(() => {
    axios.get(ApiUrl+'message/getAll', {headers: {Authorization: `token ${IsCookies()}`}})
    // .then(success => setContactDelete(success.data.data.length))
  }, [])

  useEffect(() => {
    axios.get(ApiUrl+'contact/getAll', {headers: {Authorization: `token ${IsCookies()}`}})
    .then(success => setContacts(success.data.data.length))
  }, [contacts]);

  const navigate = useNavigate();
  useEffect(()=>{
    if(!IsCookies()){
      toast.error('Session expirée, veuillez vous connecter !');
      navigate('/connexion');
    }
  }, [navigate]);


  const dataMessage = {
    labels: ['Contacts', 'Messages', 'Groupe'],
    datasets: [
      {
        label: 'Statistiques',
        data: [contacts, messages, groupe],
        backgroundColor: ['rgba(175,192,192,0.2)', 'rgba(255,99,132,0.2)', 'rgba(255,205,86,0.2)', /*'rgba(54,162,235,0.2)'*/],
        borderColor: ['rgba(175,192,192,1)', 'rgba(255,99,132,1)', 'rgba(255,205,86,1)', /*'rgba(54,162,235,1)'*/],
        borderWidth: 1,
      },
    ],
  };

  const dataContact = {
    labels: ['Actif', 'Supprimer'],
    datasets: [
      {
        label: 'Statistiques de Contact',
        data: [contacts, contactDelete],
        backgroundColor: ['rgba(75,192,122,0.2)', 'rgba(255,199,132,0.2)'],
        borderColor: ['rgba(75,192,122,0.2)', 'rgba(255,199,132,0.2)'],
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



const BarChartExample = () => (
  <div className={chartContainerStyle}>
    <div className={chartStyle}>
      <Bar data={dataMessage} options={options} />
    </div>
  </div>
);

const LineChartExample = () => (
  <div className={chartContainerStyle}>
    <div className={chartStyle}>
      <Line data={dataContact} options={options} />
    </div>
  </div>
);

const DoughnutChartExample = () => (
  <div className={chartContainerStyle}>
    <div className={chartStyle}>
      <Doughnut data={dataContact} options={options} />
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
              <h1 className="text-[20px]">Messages</h1>
              <h2 className="my-8 text-[20px] font-bold">{messages}</h2>
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
              <h1 className="text-[20px]">Contacts</h1>
              <h2 className="my-8 text-[20px] font-bold">{contacts}</h2>
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

          <div className="transition transform rounded-md shadow-md cursor-pointer h-52 bg-violet-600 hover:scale-105">
            <div className="p-4">
              <h1 className="text-[20px]">Messages Diffusés</h1>
              <h2 className="my-8 text-[20px] font-bold">{messagesSending}</h2>
              <div className="text-right">
                <i className="fa-solid fa-comments"></i>
              </div>
            </div>
            <div className="p-2 font-extrabold text-right text-black bg-white">
              <Link to="/reports">
                <h1>Voir</h1>
              </Link>
            </div>
          </div>

          <div className="transition transform rounded-md shadow-md cursor-pointer h-52 bg-violet-600 hover:scale-105">
            <div className="p-4">
              <h1 className="text-[20px]">Groupes de Diffusion</h1>
              <h2 className="my-8 text-[20px] font-bold">{groupe}</h2>
              <div className="text-right">
                <i className="fa-solid fa-comments"></i>
              </div>
            </div>
            <div className="p-2 font-extrabold text-right text-black bg-white">
              <Link to="/broadcast">
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
