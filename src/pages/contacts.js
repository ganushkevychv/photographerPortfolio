import React from "react";
import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { Button } from 'reactstrap';
import { Link } from "gatsby"
import ContactForm from "../components/contactForm";
import ContactIcons from "../components/contact";
import {useTranslation} from "react-i18next";
import "../translations/i18n.js"
 
const Contacts = () => {

const {t} = useTranslation();

return(
<Layout>
<SEO title="Contacts" />
<ContactForm/>
<div className="buttonLink">
<Button color="danger" ><Link  to="/">{t("gallery.buttonBack")}</Link></Button>
</div>
<ContactIcons/>
<Footer/>
</Layout>
)

}
export default Contacts;