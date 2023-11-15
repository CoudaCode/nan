function Resumes(){
    return(
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Contacts Recents</h2>
                    <a href="./corporates/contact.html" className="btn">Voir Tout</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td><input type="checkbox" className="all" name="all" id="all"/></td>
                            <td>Fullname</td>
                            <td>Email Adress</td>
                            <td>Phone adress</td>
                            <td>WhatsApp Adress</td>
                            <td>Status</td>
                        </tr>
                    </thead>

                    <tbody className="tbody">
                        <tr>
                            <td><input type="checkbox"  name="" className="input-checkbox" id=""/></td>
                            <td>Lastname Firstname</td>
                            <td>user@gmail.com</td>
                            <td>+2250575554499</td>
                            <td>+2250140940330</td>
                            <td><span className="status delivered">Delivered</span></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"  name="" className="input-checkbox" id=""/></td>
                            <td>Lastname Firstname</td>
                            <td>user@gmail.com</td>
                            <td>+2250575554499</td>
                            <td>+2250140940330</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"  name="" className="input-checkbox" id=""/></td>
                            <td>Lastname Firstname</td>
                            <td>user@gmail.com</td>
                            <td>+2250575554499</td>
                            <td>+2250140940330</td>
                            <td><span className="status return">Return</span></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"  name="" className="input-checkbox" id=""/></td>
                            <td>Lastname Firstname</td>
                            <td>user@gmail.com</td>
                            <td>+2250575554499</td>
                            <td>+2250140940330</td>
                            <td><span className="status inProgress">In Progress</span></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"  name="" className="input-checkbox" id=""/></td>
                            <td>Lastname Firstname</td>
                            <td>user@gmail.com</td>
                            <td>+2250575554499</td>
                            <td>+2250140940330</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"  name="" className="input-checkbox" id=""/></td>
                            <td>Lastname Firstname</td>
                            <td>user@gmail.com</td>
                            <td>+2250575554499</td>
                            <td>+2250140940330</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"  name="" className="input-checkbox" id=""/></td>
                            <td>Lastname Firstname</td>
                            <td>user@gmail.com</td>
                            <td>+2250575554499</td>
                            <td>+2250140940330</td>
                            <td><span className="status delivered">Delivered</span></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"  name="" className="input-checkbox" id=""/></td>
                            <td>Lastname Firstname</td>
                            <td>user@gmail.com</td>
                            <td>+2250575554499</td>
                            <td>+2250140940330</td>
                            <td><span className="status delivered">Delivered</span></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"  name="" className="input-checkbox" id=""/></td>
                            <td>Lastname Firstname</td>
                            <td>user@gmail.com</td>
                            <td>+2250575554499</td>
                            <td>+2250140940330</td>
                            <td><span className="status inProgress">In Progress</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="recentCustomers">
                <div className="cardHeader">
                    <h2>Difusions Recentes</h2>
                    <a href="./corporates/historique.html" className="btn">Voir Tout</a>
                </div>
                <table>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="imgBx"><img src="./assets/font/user.png" alt="Image"/></div>
                        </td>
                        <td>
                            <h4>Koffi Kan <br/> Côte d&apos;Ivoire</h4>
                        </td>
                    </tr>
                    
                </table>
            </div>
        </div>
    )
}

export default Resumes;