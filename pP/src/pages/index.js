import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import {useTranslation} from "react-i18next";
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "../translations/i18n.js"


const IndexPage = (props) => {
  const {t} = useTranslation();

  return (
  <Layout>
    <SEO title="Home" />
<h1>{t("index.name")}</h1>
  <p>{t("index.slogan")}</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <div className="site-footer">
      <h4 className="text-center">All rights reserved© {new Date().getFullYear()}, Created by
            {` `}
            <a href="https://vladyslav-ganushkevych.netlify.app/"><Img className="link-logo" fluid={props.data.me.childImageSharp.fluid} alt="logo"/></a></h4>
      
     
      </div>
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    me: file(relativePath: { eq: "me.png" }){
      childImageSharp {
        fluid(maxHeight: 50, maxWidth: 50){
          ...GatsbyImageSharpFluid
      }
    }
  }
}`;
