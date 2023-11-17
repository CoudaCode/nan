function Message(){
    return(
        <div className="details" id="details-message">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h1>Créer Message</h1>
                    </div>
                    <div className="content-form">
                        <form className="forms">
                            <div className="group-input">
                                <label htmlFor="whatsapp" className="label-form">Canal</label>
                                <select name="whatsapp" id="whatsapp" className="form-select" required>
                                    <option value="" disabled selected>--- Choisir ---</option>
                                    <option value="email">Message</option>
                                    <option value="sms">SMS</option>
                                    <option value="whatsapp">WhatsApp</option>
                                </select>
                            </div>

                            <div className="group-input">
                                <label htmlFor="contact" className="label-form">Contacts</label>
                                <select name="contact" id="contact" className="form-select" multiple required>
                                    <option value="" disabled selected>--- Aucun contact disponible ---</option>
                                    <option value="email">Email</option>
                                    <option value="sms">SMS</option>
                                    <option value="whatsapp">WhatsApp</option>
                                    <option value="email">Email</option>
                                    <option value="sms">SMS</option>
                                    <option value="whatsapp">WhatsApp</option>
                                </select>
                            </div>

                            <div className="group-input">
                                <label htmlFor="object" className="label-form">Objet</label>
                                <input type="text" className="form-control" name="object" id="object" placeholder="Nom du Groupe" required/>
                            </div>

                            <div className="group-input">
                                <label htmlFor="contenu" className="label-form">Contenu Textuel</label>
                                <textarea name="contenu" id="contenu" className="form-control" cols="64" rows="10" style={{minHeight: 200+'px', maxHeight:200+'px'}} placeholder="Saisir le contenu" required ></textarea>
                            </div>

                            

                            <div className="group-input">
                                <label htmlFor="piecesJointes" className="label-form">Pièces Jointes</label>
                                <input type="file" className="form-control" name="piecesJointes" id="piecesJointes" placeholder="Pièces Jointes" multiple/>
                            </div>

                            <div className="group-action">
                                <button type="reset"> Annuler</button>
                                <button type="submit"> Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="recentCustomers" id="recentCustomers-message">
                    <div className="cardHeader">
                        <h2>Rapport d&apos;ajout</h2>
                    </div>
                    <div className="rapport">
                        <div className="message">Favorable</div>
                        <div className="data-content"><span className="first">Canal : </span><span className="second">WhatsApp</span></div>
                        <div className="data-content"><span className="first">Contacts : </span><span className="second">djobo@gmail.com</span></div>
                        <div className="data-content"><span className="first">Objet : </span><span className="second">Creative Cloud: Please verify your email address</span></div>
                        <div className="data-content"><span className="first">Contenu : </span><span className="second"><h1>You&apos;re nearly there</h1><p>Welcome to Creative Cloud, FRANCOIS. Before we can get started, we need to quickly verify your email address.</p><p>Click the link below and sign in using your new Adobe ID: devdjobo@gmail.com.</p></span></div>
                        <div className="data-content"><span className="first">Pièces Jointes : </span><span className="second">+2001212457858</span></div>
                        <div className="listing-all"><a className="list-link" href="">Voir la liste</a></div>
                    </div >
                </div>
            </div>
    )
}

export default Message;