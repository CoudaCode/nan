
import Sidebar from '../../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';


export default function Profil() {
  return (
    <>
        <Sidebar/>
        <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
            <div className=" overflow-y-none p-4  bg-[#1E2029]">
                <Link to={'/message'}><span>Profile  </span></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-3 overflow-Y-auto">

                <div className="scaffold-layout__sidebar" tabIndex="-1">
                    <div className="sticky top-0 md:sticky md:top-16">
                        <div className="p-3 overflow-hidden">
                            <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-4">
                                <div style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D4E16AQG0i3xIz5fUcw/profile-displaybackgroundimage-shrink_200_800/0/1693849508493?e=1709769600&amp;v=beta&amp;t=P6EA2gCLn-QlZ68RB-ZnesxIIE69rynkH-SQLXYTSWg&quot')" }} id="ember24" className="bg-cover bg-center h-69">
                                    {/* <div className="opacity-50 bg-black absolute inset-0"></div> */}
                                    <div className="flex items-center justify-center relative">
                                        <div className="profile-rail-card__member-bg-image relative">
                                            <div className="profile-rail-card__premium-overlay absolute inset-0 flex items-center justify-center">
                                                <span className="w-1/2">
                                                    <svg role="img" aria-hidden="false" aria-label="PREMIUM" className="hue-web-color-scheme--dark" xmlns="http://www.w3.org/2000/svg" width="64" height="50" viewBox="0 0 64 8" data-supported-dps="64x8" data-test-icon="premium-wordmark-xxxsmall">
                                                        <svg display="var(--hue-web-svg-display-light)">
                                                            <image href="https://static.licdn.com/aero-v1/sc/h/1p8rpr21wptehwiew0ivb4nsy" x="0" y="0" width="64" height="8" />
                                                        </svg>
                                                        <svg display="var(--hue-web-svg-display-dark)">
                                                            <image href="https://static.licdn.com/aero-v1/sc/h/7sb67vl48t706tmd6vd4st83x" x="0" y="0" width="64" height="8" />
                                                        </svg>
                                                    </svg>
                                                </span>
                                            </div>
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
                                                <span dir="ltr"className='text-white'>Victor Brito</span>
                                            </span>
                                        </p>
                                    </div>

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>Développeur front-end | JavaScript | TypeScript | React</span>
                                    </p>

                                    <button className="follow profile-rail-card__follow-button btn-secondary bg-white text-black hover:text-white w-[110px]" aria-label="Suivre" aria-live="polite" type="button">
                                        <i className="bx bxs-show m-1"></i>
                                        <span aria-hidden="true">Suivre</span>
                                    </button>

                                    <a className="app-aware-link profile-rail-card__profile-link text-16 text-black font-bold hover:no-underline flex justify-center" href="https://www.linkedin.com/in/victor-brito-69040a191?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC0Wx0wBHq3mUosLJRSDvLr03ew1r_V4B_4" data-test-app-aware-link="">
                                        <div className="single-line-truncate text-16 text-black font-bold mt-2 text-white">
                                            Voir le profil complet
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scaffold-layout__sidebar" tabIndex="-1">
                    <div className="sticky top-0 md:sticky md:top-16">
                        <div className="p-3 overflow-hidden">
                            <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-4">
                                <div style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D4E16AQG0i3xIz5fUcw/profile-displaybackgroundimage-shrink_200_800/0/1693849508493?e=1709769600&amp;v=beta&amp;t=P6EA2gCLn-QlZ68RB-ZnesxIIE69rynkH-SQLXYTSWg&quot')" }} id="ember24" className="bg-cover bg-center h-69">
                                    {/* <div className="opacity-50 bg-black absolute inset-0"></div> */}
                                    <div className="flex items-center justify-center relative">
                                        <div className="profile-rail-card__member-bg-image relative">
                                            <div className="profile-rail-card__premium-overlay absolute inset-0 flex items-center justify-center">
                                                <span className="w-1/2">
                                                    <svg role="img" aria-hidden="false" aria-label="PREMIUM" className="hue-web-color-scheme--dark" xmlns="http://www.w3.org/2000/svg" width="64" height="8" viewBox="0 0 64 8" data-supported-dps="64x8" data-test-icon="premium-wordmark-xxxsmall">
                                                        <svg display="var(--hue-web-svg-display-light)">
                                                            <image href="https://static.licdn.com/aero-v1/sc/h/1p8rpr21wptehwiew0ivb4nsy" x="0" y="0" width="64" height="8" />
                                                        </svg>
                                                        <svg display="var(--hue-web-svg-display-dark)">
                                                            <image href="https://static.licdn.com/aero-v1/sc/h/7sb67vl48t706tmd6vd4st83x" x="0" y="0" width="64" height="8" />
                                                        </svg>
                                                    </svg>
                                                </span>
                                            </div>
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
                                                <span dir="ltr"className='text-white'>Raison Sociale</span>
                                            </span>
                                        </p>
                                    </div>
                                    

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>Description Entreprise</span>
                                    </p>

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>Pays</span>
                                    </p>

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>Adresse Postale</span>
                                    </p>

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>Adresse Postale</span>
                                    </p>

                                    <button className="follow profile-rail-card__follow-button btn-secondary bg-white text-black hover:text-white w-[110px]" aria-label="Suivre" aria-live="polite" type="button">
                                        <i className="bx bxs-edit m-1"></i>
                                        <span aria-hidden="true">Modifier</span>
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
                                <div style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D4E16AQG0i3xIz5fUcw/profile-displaybackgroundimage-shrink_200_800/0/1693849508493?e=1709769600&amp;v=beta&amp;t=P6EA2gCLn-QlZ68RB-ZnesxIIE69rynkH-SQLXYTSWg&quot')" }} id="ember24" className="bg-cover bg-center h-69">
                                    {/* <div className="opacity-50 bg-black absolute inset-0"></div> */}
                                    <h1 className='flex justify-center'>Titre</h1>

                                    <div className="link-without-hover-visited">
                                        <p className="single-line-truncate text-16 text-black font-bold mt-2 flex justify-center profile-rail-card__name">
                                            <span aria-hidden="true">
                                                <span dir="ltr"className='text-white'>Email de courrier</span>
                                            </span>
                                        </p>
                                    </div>

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>Mot de passe</span>
                                    </p>

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>Email d&apos;authentification</span>
                                    </p>

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>Mot de passe</span>
                                    </p>

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>Adresse de courrier via WhatsApp</span>
                                    </p>

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>+232355258944555</span>
                                    </p>

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>Adresse de courrier via WhatsApp</span>
                                    </p>

                                    <p className="profile-rail-card__description text-11 text-black--light font-normal mt-1 flex justify-center p-2">
                                        <span aria-hidden="true" className='text-center'>+232355258944555</span>
                                    </p>

                                    


                                    <button className="follow profile-rail-card__follow-button btn-secondary bg-white text-black hover:text-white w-[110px]" aria-label="Suivre" aria-live="polite" type="button">
                                        <i className="bx bxs-edit m-1"></i>
                                        <span aria-hidden="true">Modifier</span>
                                    </button>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
    </>
  )
}