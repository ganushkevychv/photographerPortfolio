
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contacts = () => (
  <Layout>
    <SEO title="Contacts" />
    <h1>Hi from the Contacts</h1>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contacts
