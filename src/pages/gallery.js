import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Button } from 'reactstrap';
import { Link } from "gatsby"
import ContactIcons from "../components/contact"
import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"
import {useTranslation} from "react-i18next";
import "../translations/i18n.js"



const Gallery = () => {
  
const {t} = useTranslation();
const data = useStaticQuery(graphql`
query Images {
  images: allFile( filter:{ relativeDirectory:{ eq: "gallery" } }) {
    nodes {
      id
      childImageSharp {
        fixed (
          width: 150,
          height: 150
        ) {
         ...GatsbyImageSharpFixed
        }
      } 
    }
  }
  image: file(relativePath: { eq: "nature.jpg" })
  {
    id
    childImageSharp {
      fixed (
        width: 400
      ) {
       ...GatsbyImageSharpFixed
      }
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`)

  return (
  <Layout>
    <SEO title="Gallery" />
    <h1 className="title">{t("gallery.title")}</h1>
    <div className="galleryPage">
      {data.images.nodes.map(image => (
        <Img className="img" key={image.id} fixed={image.childImageSharp.fixed} />
      ))}
    </div>
    
    <div className="buttonLink">
      <Button color="danger" ><Link  to="/">{t("gallery.buttonBack")}</Link></Button>
    </div>
    <h2 className="orderFoto">{t("location.h2")}</h2>
    <ContactIcons/>
    <Footer/>
  </Layout>

)
  }
export default Gallery;