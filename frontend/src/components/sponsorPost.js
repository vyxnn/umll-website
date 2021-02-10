import React from "react";
import "../assets/css/sponsor.css";

const sponsorPost = ({sponsor}) => { 
    return(
        
            <div className = "sponsor-p">
                <a href={sponsor.node.link}>
                <img className = "sponsor-image" src={sponsor.node.logo.publicURL}/>
                </a>
                <div className = "sponsor-title">
                    {sponsor.node.name}
                </div>
                <div className = "sponsor-description">
                    {sponsor.node.description}
                </div>
            </div>
    )
}


export default sponsorPost;
