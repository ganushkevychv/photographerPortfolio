import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'reactstrap';
import { Link } from "gatsby"
import {useTranslation} from "react-i18next";
import "../translations/i18n.js"
import success from "../images/icons/success.gif"

const Success = () => {
    const {t} = useTranslation();
    const gif = {
        width:"100px",
        height:"100px",
    }
    const conSuccess = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        textAlign: "center",
        paddingTop: "30px",
        color:"white",
      }
    return (
        <Layout>
            <SEO title="Success" />
            <div style={conSuccess} >
            <img style={gif} src={success} alt="success icon"/>
            </div>
            <div style={conSuccess} >
    <h1>{t("success.message")}</h1>
    </div>
        <div className="buttonLink">
      <Button color="danger" ><Link  to="/">{t("gallery.buttonBack")}</Link></Button>
    </div>
   
        </Layout>
    )
}
export default Success;