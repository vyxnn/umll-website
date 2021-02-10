import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";
import "../assets/css/about.css";

const SignUpPage = () => {
  const data = useStaticQuery(query);
  const content = (
    <div className="about-div">
      <div className="about-left">
        <img
          className="about-image"
          src={data.strapiSignUp.membershipCard.publicURL}
        />
      </div>
      <div className="about-right">
        <div className="about-title"> {data.strapiSignUp.title} </div>
        <br/>
        <div className="signup-subheading"> BENEFITS </div>
        <br/>
        <div className="about-description">
            Year long memberships are: ${data.strapiSignUp.price}
          <ReactMarkdown source={data.strapiSignUp.description} />
        </div>
        <div className="signup-subheading"> SIGN UP HERE </div>
        <br/>
        <div className="about-description">
          <a href={data.strapiSignUp.signUpLink}> Sign Up: {data.strapiSignUp.signUpLink}</a>
          <br/><br/>
          <a href={data.strapiSignUp.paymentLink}> Payment: {data.strapiSignUp.paymentLink}</a>
        </div>
        <br/>
      </div>
    </div>
  );
  return <Layout children={content} pageName="Sign Up"></Layout>;
};

const query = graphql`
  query {
    strapiSignUp {
      title
      description
      paymentLink
      signUpLink
      price
      membershipCard {
        publicURL
      }
    }
  }
`;

export default SignUpPage;
