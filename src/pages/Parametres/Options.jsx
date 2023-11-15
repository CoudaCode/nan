import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Options(){
    const path = useLocation().pathname;
    const validePath = ['/parametres/collaborateur', '/parametres/contact', '/parametres/groupe', '/parametres/message'];
    if(!validePath.includes(path)) window.location.href = "/parametres/collaborateur";
    
    useEffect(()=>{
        const activation = () => { 
            const allDetail = [...document.querySelectorAll('.details')];
            const isOption = document.getElementById('card-'+path.split('/')[2]);
            allDetail.map(item => {
                if(item.id.includes(isOption.id.split('-')[1])){
                    item.style.display = 'grid';
                    isOption.setAttribute('active', 'active');
                }
                else item.style.display = 'none';
                
            });
        }
        activation()
    }, []);

    return(
        <div className="cardBox">
            <div className="card" id="card-collaborateur" >
                <a href="/parametres/collaborateur">
                    <div>
                        <div className="numbers">8230</div>
                        <div className="cardName">Créer Collaborateurs</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name="bookmarks-outline"></ion-icon>
                    </div>
                </a>
            </div>

            <div className="card" id="card-contact" >
                <a href="/parametres/contact">
                <div>
                    <div className="numbers">6321</div>
                    <div className="cardName">Créer Contacts</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="call-outline"></ion-icon>
                </div>
                </a>
            </div>

            <div className="card" id="card-groupe" >
                <a href="/parametres/groupe">
                <div>
                    <div className="numbers">15</div>
                    <div className="cardName">Créer Groupes</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="people-outline"></ion-icon>
                </div>
                </a>
            </div>

            <div className="card" id="card-message" >
                <a href="/parametres/message">
                <div>
                    <div className="numbers">1472</div>
                    <div className="cardName">Créer Messages</div>
                </div>
                <div className="iconBx">
                    <ion-icon name="mail-outline"></ion-icon>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Options;