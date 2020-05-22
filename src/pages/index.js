import React from "react"
import { graphql } from "gatsby"
import {useTranslation} from "react-i18next";
import "../translations/i18n.js"
import Logo from "../images/me.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from '@material-ui/core/Avatar';
import { Card, CardTitle, CardBody, CardText, CardImg, CardGroup } from "reactstrap"
import Gallery from "../components/gallery"
import aAvatar from "../images/aAvatar.jpg"
import nature from "../images/nature.jpg"
import kids from "../images/kids.jpg"
import family from "../images/family.jpg"
import facebook from "../images/icons/facebook.svg"
import email from "../images/icons/email.svg"
import instagram from "../images/icons/instagram.svg"
import phone from "../images/icons/phone.svg"




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
    <div className="containerIcons">
    <div className="Instagram">
      <ul>
      <a href="https://www.instagram.com/nastkazgdanska/">
      <li>
        <img style={{width:"80px", height:"80px"}} src={instagram}/>
      </li>
      <li>
INSTAGRAM
      </li>
      <li className="textIcons">
Follow me
      </li>
      </a>
      </ul>
      </div>
      <div className="email">
       <ul>
       <a href="mailto:ganushkevycha@gmail.com">
      <li>
        <img style={{width:"80px", height:"80px"}} src={email}/>
      </li>
      <li>
EMAIL
      </li>
      <li className="textIcons">
     Mail me
      </li>
      </a>
      </ul>
      </div>
      
      <div className="facebook">
      <ul>
      <a href="https://www.facebook.com/anastasiya.kurlova.7">
      <li>
        <img style={{width:"80px", height:"80px"}} src={facebook}/>
      </li>
      <li>
FACEBOOK
      </li>
      <li className="textIcons">
Follow me
      </li>
      </a>
      </ul>
      </div>
      <div className="phone">
      <ul>
      <a href="tel:+48512371168">
      <li>
        <img style={{width:"80px", height:"80px"}} src={phone}/>
      </li>
      <li>
PHONE
      </li>
      <li className="textIcons">
+48512371168
      </li>
      </a>
      </ul>
      </div>
      </div>
      
    <div className="site-footer">
      <h4 className="text-center">All rights reserved© {new Date().getFullYear()}, Created by
            {` `}
            <a href="https://vladyslav-ganushkevych.netlify.com/"><img className="link-logo" src={Logo} width="30" 
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
