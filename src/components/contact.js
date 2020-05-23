import React from "react"
import facebook from "../images/icons/facebook.svg"
import email from "../images/icons/email.svg"
import instagram from "../images/icons/instagram.svg"
import phone from "../images/icons/phone.svg"



const ContactIcons = () => {

    return (
<div className="containerIcons">
    <div className="Instagram">
      <ul className="list">
      <a href="https://www.instagram.com/nastkazgdanska/">
      <li>
        <img style={{width:"80px", height:"80px"}} src={instagram} alt="instagram icon"/>
      </li>
      <li>
INSTAGRAM
      </li>
      <li className="textIcons">
Follow me
      </li>
      </a>
      </ul>
      </div>
      <div className="email">
       <ul className="list">
       <a href="mailto:ganushkevycha@gmail.com">
      <li>
        <img style={{width:"80px", height:"80px"}} src={email} alt="mail icon"/>
      </li>
      <li>
EMAIL
      </li>
      <li className="textIcons">
     Mail me
      </li>
      </a>
      </ul>
      </div>
      
      <div className="facebook">
      <ul className="list">
      <a href="https://www.facebook.com/anastasiya.kurlova.7">
      <li>
        <img style={{width:"80px", height:"80px"}} src={facebook} alt="facebook icon"/>
      </li>
      <li>
FACEBOOK
      </li>
      <li className="textIcons">
Follow me
      </li>
      </a>
      </ul>
      </div>
      <div className="phone">
      <ul className="list">
      <a href="tel:+48512371168">
      <li>
        <img style={{width:"80px", height:"80px"}} src={phone} alt="phone icon"/>
      </li>
      <li>
PHONE
      </li>
      <li className="textIcons">
+48512371168
      </li>
      </a>
      </ul>
      </div>
      </div>
    )
}
export default ContactIcons