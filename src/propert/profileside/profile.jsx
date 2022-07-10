import React from "react";
import Logos from "../logoser";
import ProfileCard from '../profilecard'
import FollowerCard from "../followerside/followercard";
import './profile.css'


function Profile() {
  return (
    <div>
   <Logos/>
   <ProfileCard/>
   <FollowerCard/>
    </div>
  
    );
}

export default Profile;