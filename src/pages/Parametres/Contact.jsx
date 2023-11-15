function Contact(){
    return(
        <div className="details" id="details-contact">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h1>Créer Contact</h1>
                        <select className="btnn">
                            <option value="saisir" selected>Saisir</option>
                            <option value="importer">Importer</option>
                        </select>
                    </div>
                    <div className="content-form">
                        <form className="forms">
                            <div className="group-input">
                                <label htmlFor="fullname" className="label-form">Nom et Prénom(s)</label>
                                <input type="text" className="form-control" name="fullname" id="fullname" placeholder="Nom et Prénom(s)" required/>
                            </div>

                            <div className="group-input">
                                <label htmlFor="email" className="label-form">Adresse E-mail</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Adresse E-mail" required/>
                            </div>

                            <div className="group-input">
                                <label htmlFor="numeroSms" className="label-form">Adresse téléphonque</label>
                                <input type="text" className="form-control" name="numeroSms" id="numeroSms" placeholder="Adresse téléphonque" required/>
                            </div>

                            <div className="group-input">
                                <label htmlFor="numeroWhatsapp" className="label-form">Adresse WhatsApp</label>
                                <input type="text" className="form-control" name="numeroWhatsapp" id="numeroWhatsapp" placeholder="Adresse WhatsApp" required/>
                            </div>

                            <div className="group-action">
                                <button type="reset"> Annuler</button>
                                <button type="submit"> Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="recentCustomers" id="recentCustomers-contact">
                    <div className="cardHeader">
                        <h2>Rapport d&apos;ajout</h2>
                    </div>
                    <div className="rapport">
                        <div className="message">Favorable</div>
                        <div className="data-content"><span className="first">Mme/M : </span><span className="second">DJOBO NDRI</span></div>
                        <div className="data-content"><span className="first">E-mail : </span><span className="second">djobo@gmail.com</span></div>
                        <div className="data-content"><span className="first">Téléphone : </span><span className="second">+2001212457858</span></div>
                        <div className="data-content"><span className="first">WhatsApp : </span><span className="second">+2001212457858</span></div>
                        <div className="listing-all"><a className="list-link" href="">Voir la liste</a></div>
                    </div >
                </div>
            </div>
    )
}

export default Contact;