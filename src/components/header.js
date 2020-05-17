import PropTypes from "prop-types"
import React from "react"

import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'; 
  import "../translations/i18n.js"
  import {useTranslation} from "react-i18next";

  const Header = (props) => {
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div className="container">
        <Navbar className="nav" color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Portfolio</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/gallery/">{t("menu.gallery")}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contacts/">{t("menu.contacts")}</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Header;
    
    


