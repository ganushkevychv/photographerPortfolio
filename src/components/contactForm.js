import React from "react"
import {useTranslation} from "react-i18next";
import "../translations/i18n.js"
import { Button } from 'reactstrap';

const ContactForm = () => {

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


return (
    <div style={form}>
        <form name="contact" method="POST" data-netlify-recaptcha="true" netlify-honeypot="bot-field" action="/success" >
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
  <div data-netlify-recaptcha="true"></div>
  <p>
<Button color="danger" type="submit">{t("form.sent")}</Button>
  </p>
</form>
    </div>
)

}
export default ContactForm;