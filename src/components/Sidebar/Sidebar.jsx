import { useLocation } from "react-router-dom";

function Sidebar() {
  const path = useLocation().pathname;

  return (
        <div className="container">
            <div className="navigation">
                <ul className="ul">
                    <li>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="logo-apple"></ion-icon>
                            </span>
                            <span className="title">LOGO</span>
                        </a>
                    </li>
                    <li className={`${path === "/dashboard" ? "hovered" : ""}`}>
                        <a href="/dashboard">
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="title">Tableau de Bord</span>
                        </a>
                    </li>
                    <li className={`${path === "/broadcast" ? "hovered" : ""}`}>
                        <a href="/broadcast">
                            <span className="icon">
                                <ion-icon name="send-outline"></ion-icon>
                            </span>
                            <span className="title">Broadcast</span>
                        </a>
                    </li>
                    <li className={`${path === "/message" ? "hovered" : ""}`}>
                        <a href="/message">
                            <span className="icon">
                                <ion-icon name="chatbubbles-outline"></ion-icon>
                            </span>
                            <span className="title">Messages</span>
                        </a>
                    </li>
                    <li className={`${path === "/contacts" ? "hovered" : ""}`}>
                        <a href="/contacts">
                            <span className="icon">
                                <ion-icon name="person-add-outline"></ion-icon>
                            </span>
                            <span className="title">Contacts</span>
                        </a>
                    </li>
                    <li className={`${path === "/canal" ? "hovered" : ""}`}>
                        <a href="/canal">
                            <span className="icon">
                                <ion-icon name="git-branch-outline"></ion-icon>
                            </span>
                            <span className="title">Canaux de difusions</span>
                        </a>
                    </li>
                    <li className={`${path === "/historiques" ? "hovered" : ""}`}>
                        <a href="/historiques">
                            <span className="icon">
                                <ion-icon name="logo-buffer"></ion-icon>
                            </span>
                            <span className="title">Historique de difusions</span>
                        </a>
                    </li>
                    <li className={`${path === "/groupe" ? "hovered" : ""}`}>
                        <a href="/groupe">
                            <span className="icon">
                                <ion-icon name="people-outline"></ion-icon>
                            </span>
                            <span className="title">Groupes de Difusions</span>
                        </a>
                    </li>

                    <li className={`${path === "/Workspace" ? "hovered" : ""}`}>
                        <a href="/Workspace">
                            <span className="icon">
                                <ion-icon name="logo-apple"></ion-icon>
                            </span>
                            <span className="title">Workspace</span>
                        </a>
                    </li>
                    <li className={`${path === "/profile" ? "hovered" : ""}`}>
                        <a href="/profile">
                            <span className="icon">
                                <ion-icon name="person-circle"></ion-icon>
                            </span>
                            <span className="title">Profile</span>
                        </a>
                    </li>
                    <li className={`${path === "/parametres/collaborateur" || path === "/parametres/contact" || path === "/parametres/groupe" || path === "/parametres/message" ? "hovered" : ""}`}>
                        <a href="/parametres/collaborateur">
                            <span className="icon">
                                <ion-icon name="cog-outline"></ion-icon>
                            </span>
                            <span className="title">Paramètres</span>
                        </a>
                    </li>
                    <li className={`${path === "/corbelle" ? "hovered" : ""}`}>
                        <a href="/corbelle">
                            <span className="icon">
                                <ion-icon name="trash-outline"></ion-icon>
                            </span>
                            <span className="title">Corbelle</span>
                        </a>
                    </li> 
                </ul>
            </div>
        </div>
  );
}

export default Sidebar;
