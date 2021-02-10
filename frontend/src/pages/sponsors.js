import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SponsorPost from "../components/sponsorPost"; 
import "../assets/css/sponsor.css";
import ReactMarkdown from 'react-markdown'; 

//Use masonry for event posts 
const SponsorPage = () => {
    const data = useStaticQuery(query);
    const content = 
    <div className = "sponsor-div">
        {data.allStrapiSponsor.edges.map(function(sponsor){
            return <SponsorPost key = {sponsor.node.id} sponsor = {sponsor}/>
        })}
    </div>
    return (
      <Layout children = {content} pageName="Sponsors">
      </Layout>
    );
};

const query = graphql`
  query {
    allStrapiSponsor{
        edges{
            node{
                id
                name 
                description 
                logo{ 
                    publicURL 
                }
                link
            }
        }
    }
  }
`;

export default SponsorPage;