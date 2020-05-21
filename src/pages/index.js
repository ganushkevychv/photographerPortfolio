import React from "react"
import { graphql } from "gatsby"
import {useTranslation} from "react-i18next";
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../translations/i18n.js"
import Avatar from '@material-ui/core/Avatar';
import Logo from "../images/me.png"
import { Card, CardTitle, CardBody, CardText, CardImg, CardGroup } from "reactstrap"
import Gallery from "../components/gallery"
import aAvatar from "../images/aAvatar.jpg"
import nature from "../images/nature.jpg"
import kids from "../images/kids.jpg"
import family from "../images/family.jpg"


const IndexPage = (props) => {
  const {t} = useTranslation();

  return (
  <Layout>
    <SEO title="Home" />
    <div className="container">
    <div className="containerAvatar">
      <Avatar alt="my avatar" src={aAvatar} />
    </div>
    <div className="containerCard">
<Card>
<CardBody>
  <CardTitle><h1>{t("index.name")}</h1></CardTitle>
  <CardText><h2>{t("index.slogan")}</h2></CardText>
</CardBody>
</Card>
    </div> 
    <div className="containerGallery">
      <CardGroup>
    <Card>
        <CardImg top width="30%" src={nature} alt="nature" />
        <CardBody>
  <CardTitle>{t("modal.titleNature")}</CardTitle>
          <Gallery />
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="30%" src={kids} alt="girl with soap ballons" />
        <CardBody>
  <CardTitle>{t("modal.titleKids")}</CardTitle>
          <Gallery />
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="30%" src={family} alt="family" />
        <CardBody>
  <CardTitle>{t("modal.titleFamily")}</CardTitle>
          <Gallery />
        </CardBody>
      </Card>
      </CardGroup>
</div>
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
    aAvatar: file(relativePath: { eq: "aAvatar.jpg" }){
      childImageSharp {
        fluid(maxWidth: 500, quality: 100){
          ...GatsbyImageSharpFluid
      }
    }
  }
}`;
