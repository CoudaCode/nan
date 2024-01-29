
import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import InformationPerso from './InformationPerso';
import InformationEntreprise from './InformationEntreprise';
import InformationMessagerie from './InformationMessagerie';
import InformationSecurite from './Securite';
import axios from 'axios';
import { IsCookies } from '../../outils/IsCookie';
import { ApiUrl } from '../../outils/URL';
import Deconnexion from '../Deconnexion/Deconnexion';


export default function Profil() {
    const [isAccordionOpenPersonnelInfo, setAccordionOpenPersonnelInfo] = useState(false);
    const [isAccordionOpenSecurity, setAccordionOpenSecurity] = useState(false);
    const [isAccordionOpenEntreprise, setAccordionOpenEntreprise] = useState(false);
    const [isAccordionOpenMessage, setAccordionOpenMessage] = useState(false);

    const [isEditeOpenPersonnelInfo, setEditeOpenPersonnelInfo] = useState(false);
    const [isEditeOpenSecurity, setEditeOpenSecurity] = useState(false);
    const [isEditeOpenEntreprise, setEditeOpenEntreprise] = useState(false);
    const [isEditeOpenMessage, setEditeOpenMessage] = useState(false);
    const [IsMyEntreprise, SetMyEntreprise] = useState({});
    const [IsMyInformations, SetMyInformations] = useState({});

    useEffect(()=>{
        axios.get(`${ApiUrl}user/getById`, {headers: {Authorization: `token ${IsCookies()}`}})
        .then(success=>SetMyInformations(success.data.data))
    }, []);


    useEffect(()=>{
        axios.get(`${ApiUrl}entreprise/getById`, {headers: {Authorization: `token ${IsCookies()}`}})
        .then(success=>SetMyEntreprise(success.data.data))
    }, []);

    const toggleEditePersonnelInfo = () => {
        const iwanttoscrolling = document.querySelector('.iwanttoscrolling');
        
        setEditeOpenPersonnelInfo(true);
        setAccordionOpenPersonnelInfo(true);

        setEditeOpenSecurity(false);
        setEditeOpenEntreprise(false);
        setEditeOpenMessage(false);

        setTimeout(() => {
            iwanttoscrolling.scrollTop = iwanttoscrolling.scrollHeight;
        }, 50);
    };

    const toggleEditeSecurity = () => {
        const iwanttoscrolling = document.querySelector('.iwanttoscrolling');
        setEditeOpenSecurity(true);
        setAccordionOpenSecurity(true);

        setEditeOpenPersonnelInfo(false);
        setEditeOpenEntreprise(false);
        setEditeOpenMessage(false);
        setTimeout(() => {
            iwanttoscrolling.scrollTop = iwanttoscrolling.scrollHeight;
        }, 50);
    };

    const toggleEditeMessagerie = () => {
        const iwanttoscrolling = document.querySelector('.iwanttoscrolling');
        setEditeOpenMessage(true);
        setAccordionOpenMessage(true);

        setEditeOpenPersonnelInfo(false);
        setEditeOpenEntreprise(false);
        setTimeout(() => {
            iwanttoscrolling.scrollTop = iwanttoscrolling.scrollHeight;
        }, 50);
    };

    const toggleEditeEntreprise = () => {
        const iwanttoscrolling = document.querySelector('.iwanttoscrolling');
        setEditeOpenEntreprise(true);
        setAccordionOpenEntreprise(true);

        setEditeOpenPersonnelInfo(false);
        setEditeOpenMessage(false);
        setEditeOpenSecurity(false);
        setTimeout(() => {
            iwanttoscrolling.scrollTop = iwanttoscrolling.scrollHeight;
        }, 50);
    };


    const changeContentOrClass = (btn, myState) => {
        console.log(btn);
        const i = btn.querySelector('i');
        const span = btn.querySelector('span');
        i.className = myState ? 'bx bxs-show m-1' : 'bx bxs-hide m-1';
        span.textContent = myState ? 'Voir plus' : 'Fermer';
    }

    const toggleAccordionPersonnelInfo = event => {
        changeContentOrClass(event.target.closest('button'), isAccordionOpenPersonnelInfo);
        setAccordionOpenPersonnelInfo(!isAccordionOpenPersonnelInfo);
        setAccordionOpenSecurity(false);
        setAccordionOpenEntreprise(false);
        setAccordionOpenMessage(false);
        setEditeOpenPersonnelInfo(false);
        setEditeOpenSecurity(false);
        setEditeOpenMessage(false);
        setEditeOpenEntreprise(false);
    };

    const toggleAccordionSecurity = event => {
        changeContentOrClass(event.target.closest('button'), isAccordionOpenSecurity);
        setAccordionOpenSecurity(!isAccordionOpenSecurity);
        setAccordionOpenPersonnelInfo(false);
        setAccordionOpenEntreprise(false);
        setAccordionOpenMessage(false);
        setEditeOpenPersonnelInfo(false);
        setEditeOpenSecurity(false);
        setEditeOpenMessage(false);
        setEditeOpenEntreprise(false);
    };

    const toggleAccordionEntreprise = event => {
        changeContentOrClass(event.target.closest('button'), isAccordionOpenEntreprise);
        setAccordionOpenEntreprise(!isAccordionOpenEntreprise);
        setAccordionOpenSecurity(false);
        setAccordionOpenPersonnelInfo(false);
        setAccordionOpenMessage(false);
        setEditeOpenPersonnelInfo(false);
        setEditeOpenSecurity(false);
        setEditeOpenMessage(false);
        setEditeOpenEntreprise(false);
    };

    const toggleAccordionMessage = event => {
        changeContentOrClass(event.target.closest('button'), isAccordionOpenMessage);
        setAccordionOpenMessage(!isAccordionOpenMessage);
        setAccordionOpenEntreprise(false);
        setAccordionOpenSecurity(false);
        setAccordionOpenPersonnelInfo(false);
        setEditeOpenPersonnelInfo(false);
        setEditeOpenSecurity(false);
        setEditeOpenMessage(false);
        setEditeOpenEntreprise(false);
    };

    return (
        <>
            <Sidebar/>
            <div className="main p-4 flex-1 flex flex-col overflow-y-auto iwanttoscrolling" id="main">
                <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
                    <div className="flex items-center"> Profile </div>
                    <Deconnexion />
                </div>
                
                
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-3 overflow-Y-auto">
                        <div className="scaffold-layout__sidebar" tabIndex="-1">
                            <div className="sticky top-0 md:sticky md:top-16">
                                <div className="p-3 overflow-hidden">
                                <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-4">
                                    <div
                                        style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D4E16AQG0i3xIz5fUcw/profile-displaybackgroundimage-shrink_200_800/0/1693849508493?e=1709769600&amp;v=beta&amp;t=P6EA2gCLn-QlZ68RB-ZnesxIIE69rynkH-SQLXYTSWg&quot')" }}
                                        id="ember24"
                                        className="bg-cover bg-center h-69"
                                    >
                                        <div className="flex items-center justify-center relative">
                                                <div className="profile-rail-card__member-bg-image relative">
                                                    <a className="app-aware-link profile-rail-card__profile-link text-16 text-black font-bold hover:no-underline relative z-10" href="https://www.linkedin.com/in/victor-brito-69040a191?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC0Wx0wBHq3mUosLJRSDvLr03ew1r_V4B_4" data-test-app-aware-link="">
                                                        <div className="ivm-image-view-model items-center">
                                                            <div className="ivm-view-attr__img-wrapper flex justify-center">
                                                                <img
                                                                    src="https://media.licdn.com/dms/image/D4E35AQGKzd6QV8tQNA/profile-framedphoto-shrink_100_100/0/1691755098172?e=1704844800&amp;v=beta&amp;t=VjTdINtZ6MFZJ7ct-gzh14KHeHfcyhjqwJLt_ZytdXo"
                                                                    alt="Victor Brito"
                                                                    className="w-99 h-99 rounded-full"
                                                                    loading="lazy"
                                                                    width="72"
                                                                    height="72"
                                                                />
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="link-without-hover-visited">
                                                <p className="single-line-truncate text-16 text-black font-bold mt-2 flex justify-center profile-rail-card__name">
                                                    <span aria-hidden="true">
                                                        <span dir="ltr"className='text-white'>{IsMyInformations?.fullname}</span>
                                                    </span>
                                                </p>
                                            </div>

                                            <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                                <span aria-hidden="true" className='text-center'>{IsMyInformations?.email}</span>
                                            </p>
                                            
                                            {/* Utilisez une condition pour afficher ou masquer le contenu en fonction de l'état de l'accordéon */}
                                            {isAccordionOpenPersonnelInfo && (
                                                <div className="link-without-hover-visited m-3">
                                                    <div className="link-without-hover-visited">
                                                        <p className="single-line-truncate text-16 text-black font-bold mt-2 flex justify-center profile-rail-card__name">
                                                            <span aria-hidden="true">
                                                                <span dir="ltr"className='text-white'>{IsMyInformations?.telephone}</span>
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div className="link-without-hover-visited">
                                                        <p className="single-line-truncate text-16 text-black font-bold mt-2 flex justify-center profile-rail-card__name">
                                                            <span aria-hidden="true">
                                                                <span dir="ltr"className='text-white'>{IsMyInformations?.nationalite}</span>
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <button onClick={toggleEditePersonnelInfo} className="follow profile-rail-card__follow-button btn-secondary bg-green-900 text-white hover:text-white w-[130px] mt-2" aria-label="Modifier" aria-live="polite" type="button">
                                                        <i className="bx bxs-edit m-1"></i>
                                                        <span aria-hidden="true">Modifier</span>
                                                    </button>
                                                </div>
                                            )}

                                            {/* Bouton pour basculer l'état de l'accordéon */}
                                            <button
                                                onClick={toggleAccordionPersonnelInfo}
                                                className="follow profile-rail-card__follow-button btn-secondary bg-white text-black hover:text-white w-[130px] mt-2"
                                                aria-label="Suivre"
                                                aria-live="polite"
                                                type="button"
                                            >
                                            <i className="bx bxs-show m-1"></i>
                                            <span aria-hidden="true">Voir Plus</span>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="scaffold-layout__sidebar" tabIndex="-1">
                            <div className="sticky top-0 md:sticky md:top-16">
                                <div className="p-3 overflow-hidden">
                                <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-4">
                                    <div
                                        style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D4E16AQG0i3xIz5fUcw/profile-displaybackgroundimage-shrink_200_800/0/1693849508493?e=1709769600&amp;v=beta&amp;t=P6EA2gCLn-QlZ68RB-ZnesxIIE69rynkH-SQLXYTSWg&quot')" }}
                                        id="ember24"
                                        className="bg-cover bg-center h-69"
                                    >
                                        <div className="flex items-center justify-center relative">
                                            <div className="profile-rail-card__member-bg-image relative">
                                                <a className="app-aware-link profile-rail-card__profile-link text-16 text-black font-bold hover:no-underline relative z-10" href="https://www.linkedin.com/in/victor-brito-69040a191?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC0Wx0wBHq3mUosLJRSDvLr03ew1r_V4B_4" data-test-app-aware-link="">
                                                    <div className="ivm-image-view-model items-center">
                                                        <div className="ivm-view-attr__img-wrapper font-bold text-white flex justify-center">
                                                            SECURITE
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                            <div className="link-without-hover-visited">
                                                <p className="single-line-truncate text-16 text-black font-bold mt-2 flex justify-center profile-rail-card__name">
                                                    <span aria-hidden="true">
                                                        <span dir="ltr"className='text-white'>E-mail</span>
                                                    </span>
                                                </p>
                                            </div>

                                            {/* Utilisez une condition pour afficher ou masquer le contenu en fonction de l'état de l'accordéon */}
                                            {isAccordionOpenSecurity && (
                                                <div className="link-without-hover-visited m-3">
                                                    <div className="link-without-hover-visited">
                                                        <p className="single-line-truncate text-16 text-black font-bold mt-2 flex justify-center profile-rail-card__name">
                                                            <span aria-hidden="true">
                                                                <span dir="ltr"className='text-white'>Mot de passe</span>
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <button onClick={toggleEditeSecurity} className="follow profile-rail-card__follow-button btn-secondary bg-green-900 text-white hover:text-white w-[130px] mt-2" aria-label="Modifier" aria-live="polite" type="button">
                                                        <i className="bx bxs-edit m-1"></i>
                                                        <span aria-hidden="true">Modifier</span>
                                                    </button>
                                                </div>
                                            )}

                                            {/* Bouton pour basculer l'état de l'accordéon */}
                                            <button
                                                onClick={toggleAccordionSecurity}
                                                className="follow profile-rail-card__follow-button btn-secondary bg-white text-black hover:text-white w-[130px] mt-2"
                                                aria-label="Suivre"
                                                aria-live="polite"
                                                type="button"
                                            >
                                            <i className="bx bxs-show m-1"></i>
                                            <span aria-hidden="true">Voir Plus</span>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="scaffold-layout__sidebar" tabIndex="-1">
                            <div className="sticky top-0 md:sticky md:top-16">
                                <div className="p-3 overflow-hidden">
                                    <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-4">
                                        <div
                                            style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D4E16AQG0i3xIz5fUcw/profile-displaybackgroundimage-shrink_200_800/0/1693849508493?e=1709769600&amp;v=beta&amp;t=P6EA2gCLn-QlZ68RB-ZnesxIIE69rynkH-SQLXYTSWg&quot')" }}
                                            id="ember24"
                                            className="bg-cover bg-center h-69"
                                        >
                                            <div className="flex items-center justify-center relative">
                                                <div className="profile-rail-card__member-bg-image relative">
                                                    <a className="app-aware-link profile-rail-card__profile-link text-16 text-black font-bold hover:no-underline relative z-10" href="https://www.linkedin.com/in/victor-brito-69040a191?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC0Wx0wBHq3mUosLJRSDvLr03ew1r_V4B_4" data-test-app-aware-link="">
                                                        <div className="ivm-image-view-model items-center">
                                                            <div className="ivm-view-attr__img-wrapper flex justify-center">
                                                                <div className="ivm-view-attr__img-wrapper font-bold text-white flex justify-center"> ENTREPRISE </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                                <div className="link-without-hover-visited">
                                                    <p className="single-line-truncate text-16 text-black mt-2 flex justify-center profile-rail-card__name">
                                                        <span aria-hidden="true">
                                                            <span dir="ltr"className='text-white'>{IsMyEntreprise?.raisonSociale}</span>
                                                        </span>
                                                    </p>
                                                </div>

                                                <div className="link-without-hover-visited">
                                                    <p className="single-line-truncate text-16 text-black mt-2 flex justify-center profile-rail-card__name">
                                                        <span aria-hidden="true">
                                                            <span dir="ltr"className='text-white'>{IsMyEntreprise?.domaineDActivite}</span>
                                                        </span>
                                                    </p>
                                                </div>

                                                <div className="link-without-hover-visited">
                                                    <p className="single-line-truncate text-16 text-black mt-2 flex justify-center profile-rail-card__name">
                                                        <span aria-hidden="true">
                                                            <span dir="ltr"className='text-white'>{IsMyEntreprise?.adresse}</span>
                                                        </span>
                                                    </p>
                                                </div>
                                                

                                                {/* Utilisez une condition pour afficher ou masquer le contenu en fonction de l'état de l'accordéon */}
                                                {isAccordionOpenEntreprise && (
                                                    <div className="link-without-hover-visited m-3">
                                                        <div className="link-without-hover-visited">
                                                            <p className="single-line-truncate text-16 text-black mt-2 flex justify-center profile-rail-card__name">
                                                                <span aria-hidden="true">
                                                                    <span dir="ltr"className='text-white'>Adresse Méssagerie via E-mail</span>
                                                                </span>
                                                            </p>
                                                            <div className="flex justify-center text-white">{IsMyEntreprise?.email}</div>
                                                        </div>

                                                        <div className="link-without-hover-visited">
                                                            <p className="single-line-truncate text-16 text-black mt-2 flex justify-center profile-rail-card__name">
                                                                <span aria-hidden="true">
                                                                    <span dir="ltr"className='text-white'>Adresse Méssagerie via SMS</span>
                                                                </span>
                                                            </p>
                                                            <div className="flex justify-center text-white">{IsMyEntreprise?.smsAdresse}</div>
                                                        </div>

                                                        <div className="link-without-hover-visited">
                                                            <p className="single-line-truncate text-16 text-black mt-2 flex justify-center profile-rail-card__name">
                                                                <span aria-hidden="true">
                                                                    <span dir="ltr"className='text-white'>Adresse Méssagerie via WhatsApp</span>
                                                                </span>
                                                            </p>
                                                            <div className="flex justify-center text-white">{IsMyEntreprise?.whatsappAdresse}</div>
                                                        </div>

                                                        <div className="link-without-hover-visited">
                                                            <p className="single-line-truncate text-16 text-black font-bold mt-2 flex justify-center profile-rail-card__name">
                                                                <span aria-hidden="true">
                                                                    <span dir="ltr"className='text-white'>{IsMyEntreprise?.pays}</span>
                                                                </span>
                                                            </p>
                                                        </div>

                                                        <div className="link-without-hover-visited">
                                                            <p className="single-line-truncate text-16 text-black font-bold mt-2 flex justify-center profile-rail-card__name">
                                                                <span aria-hidden="true">
                                                                    <span dir="ltr"className='text-white'>{IsMyEntreprise?.type}</span>
                                                                </span>
                                                            </p>
                                                        </div>

                                                        <button onClick={toggleEditeEntreprise} className="follow profile-rail-card__follow-button btn-secondary bg-green-900 text-white hover:text-white w-[130px] mt-2" aria-label="Modifier" aria-live="polite" type="button">
                                                            <i className="bx bxs-edit m-1"></i>
                                                            <span aria-hidden="true">Modifier</span>
                                                        </button>
                                                    </div>
                                                )}

                                                {/* Bouton pour basculer l'état de l'accordéon */}
                                                <button
                                                    onClick={toggleAccordionEntreprise}
                                                    className="follow profile-rail-card__follow-button btn-secondary bg-white text-black hover:text-white w-[130px] mt-2"
                                                    aria-label="Suivre"
                                                    aria-live="polite"
                                                    type="button"
                                                >
                                                <i className="bx bxs-show m-1"></i>
                                                <span aria-hidden="true">Voir Plus</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="scaffold-layout__sidebar" tabIndex="-1">
                            <div className="sticky top-0 md:sticky md:top-16">
                                <div className="p-3 overflow-hidden">
                                    <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-4">
                                        <div
                                            style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D4E16AQG0i3xIz5fUcw/profile-displaybackgroundimage-shrink_200_800/0/1693849508493?e=1709769600&amp;v=beta&amp;t=P6EA2gCLn-QlZ68RB-ZnesxIIE69rynkH-SQLXYTSWg&quot')" }}
                                            id="ember24"
                                            className="bg-cover bg-center h-69"
                                        >
                                            <div className="flex items-center justify-center relative">
                                                <div className="profile-rail-card__member-bg-image relative">
                                                    <a className="app-aware-link profile-rail-card__profile-link text-16 text-black font-bold hover:no-underline relative z-10" href="https://www.linkedin.com/in/victor-brito-69040a191?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC0Wx0wBHq3mUosLJRSDvLr03ew1r_V4B_4" data-test-app-aware-link="">
                                                        <div className="ivm-image-view-model items-center">
                                                            <div className="ivm-view-attr__img-wrapper flex justify-center">
                                                                <div className="ivm-view-attr__img-wrapper font-bold text-white flex justify-center"> ADRESSES DE MESSAGERIE </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="link-without-hover-visited mb-5">
                                                <p className="single-line-truncate text-16 text-black mt-2 flex justify-center profile-rail-card__name">
                                                    <span aria-hidden="true" className='text-center'>
                                                        <span dir="ltr"className='text-white'>Adresse Méssagerie via SMS</span><br/>
                                                        <span dir="ltr"className='text-gray-400'>{IsMyEntreprise.smsAdresse || 'Aucun'}</span>
                                                    </span>
                                                </p>
                                            </div>

                                                {/* Utilisez une condition pour afficher ou masquer le contenu en fonction de l'état de l'accordéon */}
                                            {isAccordionOpenMessage && (
                                                <div className="link-without-hover-visited m-3">
                                                    
                                                    <div className="link-without-hover-visited mb-5">
                                                        <p className="single-line-truncate text-16 text-black mt-2 flex justify-center profile-rail-card__name">
                                                            <span aria-hidden="true" className='text-center'>
                                                                <span dir="ltr"className='text-white'>Adresse Méssagerie via E-mail</span><br/>
                                                                <span dir="ltr"className='text-gray-400'>{IsMyEntreprise.email  || 'Aucun'}</span>
                                                            </span>
                                                        </p>

                                                        <p className="single-line-truncate text-16 text-black mt-2 flex justify-center profile-rail-card__name">
                                                            <span aria-hidden="true" className='text-center'>
                                                                <span dir="ltr"className='text-white'>Mot de passe</span><br/>
                                                                <span dir="ltr"className='text-gray-400'>{IsMyEntreprise.password || 'Aucun'}</span>
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div className="link-without-hover-visited">
                                                        <p className="single-line-truncate text-16 text-black mt-2 flex justify-center profile-rail-card__name">
                                                            <span aria-hidden="true" className='text-center'>
                                                                <span dir="ltr"className='text-white'>Adresse Méssagerie via WhatsApp</span><br/>
                                                                <span dir="ltr"className='text-gray-400'>{IsMyEntreprise?.whatsappAdresse || 'Aucun'}</span>
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <button onClick={toggleEditeMessagerie} className="follow profile-rail-card__follow-button btn-secondary bg-green-900 text-white hover:text-white w-[130px] mt-2" aria-label="Modifier" aria-live="polite" type="button">
                                                        <i className="bx bxs-edit m-1"></i>
                                                        <span aria-hidden="true">Modifier</span>
                                                    </button>
                                                </div>
                                            )}

                                                {/* Bouton pour basculer l'état de l'accordéon */}
                                                <button
                                                    onClick={toggleAccordionMessage}
                                                    className="follow profile-rail-card__follow-button btn-secondary bg-white text-black hover:text-white w-[130px] mt-2"
                                                    aria-label="Suivre"
                                                    aria-live="polite"
                                                    type="button"
                                                >
                                                <i className="bx bxs-show m-1"></i>
                                                <span aria-hidden="true">Voir Plus</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {isEditeOpenPersonnelInfo && <InformationPerso IsMyInformations={IsMyInformations}/>}

                {isEditeOpenSecurity && <InformationSecurite IsMyInformations={IsMyInformations}/>}
                {isEditeOpenMessage && <InformationMessagerie IsEntreprise={IsMyEntreprise}/>}
                {isEditeOpenEntreprise && <InformationEntreprise IsEntreprise={IsMyEntreprise}/>}

                
            </div>
        </>
    )
}