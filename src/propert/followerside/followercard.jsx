import React from "react";
import './followercard.css'
import { followers } from "./data/fdata";

function FollowerCard(){
return (
<div  className="FollowerCard">
    <h3> who is following</h3>
    {followers.map((follower,id)=>{return (
        <div className="followers"> 
            <img src={follower.img} alt="shit"  className="followerImage"/>
            <div>
                <span>{follower.name}</span>
                <span>{follower.username}</span>
            </div>
            <button>Follow</button>
            </div>
    )})}
</div>


);

}

export default FollowerCard;