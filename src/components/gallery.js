import React from "react"
import Gal from "../components/gal"
import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import {useTranslation} from "react-i18next";
import "../translations/i18n.js"
const Gallery = (props) => {
  const {t} = useTranslation();

  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="buttonContainer">
      <Button color="danger" onClick={toggle}>{t("modal.buttonOpen")}</Button>
      </div>
      <Modal centered isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <Gal/>
        </ModalBody>
        <ModalFooter>
        <div className="buttonContainer">
  <Button color="danger" onClick={toggle}>{t("modal.buttonClose")}</Button>
  </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Gallery;
 
  