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
const text = {
    color:"white",
}
const form = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    textAlign: "center",
    paddingTop: "30px",
  }
  const recaptcha = {
    paddingTop: "30px",
  }

return(
<Layout>
<SEO title="Contacts" />
<div style={form}>
<form  name="contact" method="post" data-netlify-recaptcha="true" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
  <p>
    <label style={text} >{t("form.name")}</label>   
  </p>
  <p>
  <input type="text" name="name" placeholder={t("form.name")}/>
  </p>
  <p>
    <label style={text}>{t("form.email")}</label>
  </p>
  <p>
  <input type="email" name="email" placeholder={t("form.email")} />
  </p>
  <p>
    <label style={text}>{t("form.message")}</label>
  </p>
  <p>
  <textarea name="message" placeholder={t("form.message")}></textarea>
  </p>
  <div style={recaptcha} data-netlify-recaptcha="true"></div>
  <p>
<Button color="danger" type="submit">{t("form.sent")}</Button>
  </p>
</form>
</div>
<div className="buttonLink">
<Button color="danger" ><Link  to="/">{t("gallery.buttonBack")}</Link></Button>
</div>
<ContactIcons/>
<Footer/>
</Layout>
)

}
export default Contacts;