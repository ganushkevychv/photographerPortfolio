import React from 'react';
import Logo from "../images/me.png"

const Footer = () => {

  let style = {
    backgroundColor: "lightgrey",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "0px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "35px",
    width: "100%",
    marginTop: "10px",
}

let phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}
  return(
    <div>
    <div style={phantom}/>
    <div style={style}>
      <h4 className="text-center">All rights reserved© {new Date().getFullYear()}, Created by
            {` `}
            <a href="https://vladyslav-ganushkevych.netlify.com/"><img className="link-logo" src={Logo} width="30" 
    height="30" alt="logo"/></a></h4>
      </div>
      </div>
  )
  }
  export default Footer