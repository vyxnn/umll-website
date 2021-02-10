import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import '../assets/css/bootstrap.css';
import "../assets/css/main.css";

const IndexPage = () => {
  const content = 
  <div>
  </div>
  return (
    <Layout children = {content} pageName="Home">
    </Layout>
  );
};

export default IndexPage;
