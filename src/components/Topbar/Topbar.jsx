// import React from "react";
// import "./Topbar.css";
import user from './user.png'
const Topbar = () => {
        const toggle = () => {
            let navigation = document.querySelector('.navigation');
            let main = document.querySelector('.main');
            navigation.classList.toggle('active');
            main.classList.toggle('active');
        }
    return (
        <div className="superbar">
            <div className="toggle" onClick={toggle}>
                <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div className="search">
                <label htmlFor="">
                    <input type="text" name="" placeholder="Recherche"/>
                    <ion-icon name="search-outline"></ion-icon>
                </label>
            </div>

            <div className="user">
                <img src={user} alt="User"/>
            </div>
        </div>
    );
};

export default Topbar;
