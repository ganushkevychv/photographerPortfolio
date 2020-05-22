import React from 'react';
import StickyFooter from 'react-sticky-footer';
import Logo from "../images/me.png"

const Footer = () => {
  return(
      <div className="site-footer">
        <StickyFooter>
      <h4 className="text-center">All rights reserved© {new Date().getFullYear()}, Created by
            {` `}
            <a href="https://vladyslav-ganushkevych.netlify.com/"><img className="link-logo" src={Logo} width="30" 
    height="30" alt="logo"/></a></h4>
      </StickyFooter>
      </div>
  )
  }
  export default Footer