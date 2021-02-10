import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import "../assets/css/about.css";
import ReactMarkdown from 'react-markdown'; 

const AboutPage = () => {
  const data = useStaticQuery(query);
  const description = data.strapiAbout.description; 
  const content = (
    <div className="about-div">
      <div className="about-left">
        <img className = "about-image" src={data.strapiAbout.image.publicURL} />
      </div>
      <div className="about-right">
          <div className = "about-title">
              {data.strapiAbout.title}
              </div>
              <br/>
              <div className = "about-description">
              <ReactMarkdown source={description}> </ReactMarkdown>
              </div>
          </div>
    </div>
  );
  return <Layout children={content} pageName="About"></Layout>;
};

const query = graphql`
  query {
    strapiAbout {
      title
      description
      image {
        publicURL
      }
    }
  }
`;

export default AboutPage;
