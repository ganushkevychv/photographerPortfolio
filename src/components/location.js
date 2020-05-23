import React from "react"
import pin from "../images/icons/pin.svg"
import {useTranslation} from "react-i18next";
import "../translations/i18n.js"


const LocationIcons = () => {

  const {t} = useTranslation();

    return (
<div className="containerIcons">
      <ul className="list">
      <li>
        <img style={{width:"50px", height:"50px"}} src={pin} alt="pin icon"/>
      </li>
      <li className="textIcons">
{t("location.poland")}
      </li>
      </ul>
       <ul className="list">
      <li>
        <img style={{width:"50px", height:"50px"}} src={pin} alt="pin icon"/>
      </li>
      <li className="textIcons">
      {t("location.ukraine")}
      </li>
      </ul>
      </div>
    )
}
export default LocationIcons;