
import React from "react"
import { Link } from "gatsby"
import {useTranslation} from "react-i18next";
import "../translations/i18n.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'reactstrap';

const Contacts = () => {
  const {t} = useTranslation();
  return (
  <Layout>
    <SEO title="Contacts" />
    <h1>{t("menu.contacts")}</h1>
    
    <div className="buttonLink">
      <Button color="danger" ><Link  to="/">{t("gallery.buttonBack")}</Link></Button>
    </div>
  </Layout>
  )
}

export default Contacts
