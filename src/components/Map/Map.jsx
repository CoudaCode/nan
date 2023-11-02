import { FaCalendar, FaPhone, FaEnvelope, FaAddressCard } from "react-icons/fa";

import "./Map.css"
function Map() {
  return (
    <div className="Map container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12 Map">
      <section className="mb-20 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-4">
          Contactez-Nous...
        </h1>
        <div className="md:flex md:flex-wrap">
          <div className="xl:w-6/12 md:w-7/12 mb-6 lg:mb-0 md:pr-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15888.404091335024!2d-3.962697!3d5.401578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1933ec546f809%3A0xa13e690552d16e30!2sNaN%20Digital%20Academy!5e0!3m2!1sfr!2sci!4v1698668060502!5m2!1sfr!2sci"
              className="h-80 w-full border-0 rounded-lg shadow-lg"
              allowFullScreen=""
              loading="lazy"></iframe>
          </div>
          <div className="xl:w-6/12 md:w-5/12 md:pl-3 cadre rounded-lg">
            <div className="grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-4 md:gap-x-6">
              <div className="mb-1 md:mb-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-2 rounded-md w-14 h-14 flex items-center justify-center Icon">
                      <FaPhone />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white">Telephone</h3>
                    <p className="text-gray-500">+2250789252529</p>
                  </div>
                </div>
              </div>
              <div className="mb-1 md:mb-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-2 rounded-md w-14 h-14 flex items-center justify-center Icon">
                      <FaEnvelope />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white">Mail</h3>
                    <p className="text-gray-500">info@nan.ci</p>
                  </div>
                </div>
              </div>
              <div className="mb-1 md:mb-12">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-2 rounded-md w-14 h-14 flex items-center justify-center Icon">
                      <FaAddressCard />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white">Adresse</h3>
                    <p className="text-gray-500">
                      Abidjan, Cocody Angré 8ème Tranche GESTOCI (Non loin de la
                      cité DIASPORA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-4 md:mb-4">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-2 rounded-md w-14 h-14 flex items-center justify-center Icon">
                      <FaCalendar />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-0.5 text-white">
                      Temps de travail
                    </h3>
                    <p className="text-gray-500">Du Lundi au Vendredi</p>
                    <p className="text-gray-500">De 08h a 17h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Map;
