import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import LeftFooter from "./leftFooter";
import "../assets/css/footer.css";
import facebookLogo from "../assets/icons/facebook.png";
import instaLogo from "../assets/icons/instagram.png";
import gmailLogo from "../assets/icons/gmail.png";
import discordLogo from "../assets/icons/discord.png";

const Footer = () => {
  const data = useStaticQuery(query);
  //Getting short tags
  var societyFacebookShort = data.strapiContact.societyFacebook.replace(
    "https://www.facebook.com/",
    ""
  );
  var facebookShort = data.strapiContact.facebook.replace(
    "https://www.facebook.com/",
    ""
  );
  var instagramShort = data.strapiContact.instagram.replace(
    "https://www.instagram.com/",
    ""
  );
  //HTML that makes email automatically open
  var gmail = "mailto:" + data.strapiContact.email;
  console.log(gmail);
  return (
    <div className="footer-div">
      <LeftFooter />
      <div className="footer-right">
        <div className = "heading"></div>
        <div className = "footer-subheading"> ADDRESS </div>
        <div className = "footer-address">
          Mailbox 25 
          <br/>
          1st Floor, Union House
          <br/>
          The University of Melbourne, 3010
        </div>
        <br/>
        <div className = "footer-subheading"> SOCIALS </div>
        <div className="footer-icon">
          <a href={data.strapiContact.societyFacebook}>
            <img className="footer-image" src={facebookLogo} />
            <div className="footer-text"> @ {societyFacebookShort}</div>
          </a>
        </div>
        <div className="footer-icon">
          <a href={data.strapiContact.instagram}>
            <img className="footer-image" src={instaLogo} />
            <div className="footer-text"> @ {instagramShort}</div>
          </a>
        </div>
        <div className="footer-icon">
          <a href={data.strapiContact.discord}>
            <img className="footer-image" src={discordLogo} />
            <div className="footer-text"> Unimelb Love Letters Discord</div>
          </a>
        </div>
        <div className="footer-icon">
          <a href={gmail}>
            <img className="footer-image" src={gmailLogo} />
            <div className="footer-text"> {data.strapiContact.email}</div>
          </a>
        </div>
        <div className="footer-icon">
          <a href={data.strapiContact.facebook}>
            <img className="footer-image" src={facebookLogo} />
            <div className="footer-text"> @ {facebookShort}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

const query = graphql`
  query {
    strapiContact {
      instagram
      facebook
      societyFacebook
      email
      discord
    }
  }
`;

export default Footer;
