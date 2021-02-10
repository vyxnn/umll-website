import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import MerchPost from "../components/merchPost"; 

const MerchPage = () => {
    const data = useStaticQuery(query);
    const content = 
    <div>
        {data.allStrapiMerch.edges.map(function(merch){
            return <MerchPost key={merch.node.id} merch = {merch}/>
        })}
    </div>
    return (
      <Layout children = {content} pageName="Merch">
      </Layout>
    );
};

const query = graphql`
  query {
    allStrapiMerch{
        edges{
            node{
                id
                name 
                description 
                image{ 
                    url
                    id
                }
                memberPrice
                nonMemberPrice
            }
        }
    }
  }
`;

export default MerchPage;