import React from "react"
import { Link } from "gatsby"
import {useTranslation} from "react-i18next";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const {t} = useTranslation();

  return (
  <Layout>
    <SEO title="Home" />
<h1>{t("index.name")}</h1>
  <p>{t("index.slogan")}</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}

export default IndexPage
