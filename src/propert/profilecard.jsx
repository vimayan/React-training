import React from "react";
import cover from '../img/cover.jpg'
import profile from '../img/profileImg.jpg'
import './profileside/profile.css'

function ProfileCard() {
  return (
  <div className="ProfileCard">
    <img src={cover} alt="shit" />
    <img src={profile} alt="shit" />
    <div className="profileName">
      <span>Hello</span>
      <span>lets  explore</span>

    </div>
    <div className="following">
      <hr />
      <div>
      <div className="follow">
        <span>2022</span>
        <span>following</span>
      </div>
      <div className="vl">
         
      </div>
      <div className="follow">
        <span>855</span>
        <span>followers</span>
      </div>
      </div>
     
<hr />
<span> My profile</span>
    </div>
    
    
  </div>

  );
}

export default ProfileCard;