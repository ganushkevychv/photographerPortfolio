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
        
    </div>
)

}
export default ContactForm;