import React from "react";
import Logo from '../img/logo.png'
import './profileside/profile.css'
function Logos() {
  return (
    <div className="logoser">
        <img src={Logo} alt="shit" />
        <div className="search">
            <input type="text" placeholder="#trial" />
        </div>
        

    </div>
  );
}

export default Logos;