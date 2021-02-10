import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Nav from "./nav";
import Footer from "./footer";

import "../assets/css/reset.css";

const Layout = ({ children, pageName }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
            shareImage{
              publicURL
            }
          }
        }
      }
    `}
    render={() => (
      <>
        <Nav/>
        <div>
          <div className = "title-nav"> {pageName} </div>
        </div>
        <main>{children}</main>
        <Footer/>
      </>
    )}
  />
);

export default Layout;
