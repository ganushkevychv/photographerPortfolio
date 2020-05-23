import React from "react"
import { graphql } from "gatsby"
import {useTranslation} from "react-i18next";
import "../translations/i18n.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import ContactIcons from "../components/contact"
import Avatar from '@material-ui/core/Avatar';
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
  <CardTitle><h1>{t("index.name")}</h1></CardTitle>
  <CardText><h2>{t("index.slogan")}</h2></CardText>
  <CardText><h2>{t("index.slogan")}</h2></CardText>
</Card>
    </div> 
    <div className="containerGallery">
      <CardGroup>
    <Card style={{margin:"10px", marginTop:"100px"}} >
        <CardImg top width="250px" height="200px" src={nature} alt="nature" />
        <CardBody>
  <CardTitle>{t("modal.titleNature")}</CardTitle>
          <Gallery />
        </CardBody>
      </Card>
      <Card style={{margin:"10px", marginTop:"100px"}}>
        <CardImg top width="250px" height="200px" src={kids} alt="girl with soap ballons" />
        <CardBody>
  <CardTitle>{t("modal.titleKids")}</CardTitle>
          <Gallery />
        </CardBody>
      </Card>
      <Card style={{margin:"10px", marginTop:"100px"}}>
        <CardImg top width="250px" height="200px" src={family} alt="family" />
        <CardBody>
  <CardTitle>{t("modal.titleFamily")}</CardTitle>
          <Gallery />
        </CardBody>
      </Card>
      </CardGroup>
</div>
    </div>
    <ContactIcons/>
      <Footer/>
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
