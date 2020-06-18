import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'reactstrap';
import { Link } from "gatsby"
import {useTranslation} from "react-i18next";
import "../translations/i18n.js"

const Success = () => {
    const {t} = useTranslation();
    return (
        <Layout>
            <SEO title="Success" />
        <h1>Success</h1>
        <div className="buttonLink">
      <Button color="danger" ><Link  to="/">{t("gallery.buttonBack")}</Link></Button>
    </div>
        </Layout>
    )
}
export default Success;