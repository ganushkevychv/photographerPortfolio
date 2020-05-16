import React from 'react';
import Logo from "../images/me.png"

const Footer = () => {
  return(
      <div className="site-footer">
      <h4 className="text-center">All rights reserved© {new Date().getFullYear()}, Created by
            {` `}
            <a href="https://vladyslav-ganushkevych.netlify.com/"><img className="link-logo" src={Logo} width="30" 
    height="30" alt="logo"/></a></h4>
      
     
      </div>
  )
  }
  export default Footer