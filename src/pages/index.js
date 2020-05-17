import React from "react"
import { graphql } from "gatsby"

import {useTranslation} from "react-i18next";
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../translations/i18n.js"
import Logo from "../images/me.png"


const IndexPage = () => {
  const {t} = useTranslation();

  return (
  <Layout>
    <SEO title="Home" />
<h1>{t("index.name")}</h1>
  <p>{t("index.slogan")}</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     
    </div>
    
    <div className="site-footer">
      <h4 className="text-center">All rights reserved© {new Date().getFullYear()}, Created by
            {` `}
            <a href="https://vladyslav-ganushkevych.netlify.app/"><img className="link-logo" src={Logo} width="30" 
    height="30" alt="logo"/></a></h4>
      
     
      </div>
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    me: file(relativePath: { eq: "me.png" }){
      childImageSharp {
        fixed(height: 30, width: 30){
          ...GatsbyImageSharpFixed
      }
    }
  }
}`;
