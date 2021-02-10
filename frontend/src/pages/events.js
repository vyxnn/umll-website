import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Masonry from 'react-masonry-component';
import EventPost from "../components/eventPost"; 
import "../assets/css/nav.css";

//Use masonry for event posts 
const EventPage = () => {
    const data = useStaticQuery(query);
    const content = 
    <Masonry>
        {data.allStrapiEvent.edges.map(function(event){
            return <EventPost event = {event}/>
        })}
    </Masonry>
    return (
      <Layout children = {content} pageName="Events">
      </Layout>
    );
};

const query = graphql`
  query {
    allStrapiEvent{
        edges{
            node{
                image{
                    publicURL
                }
                title 
                summary
                date 
                description
                eventUrl
            }
        }
    }
  }
`;

export default EventPage;
