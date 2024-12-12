import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Trabaja con nosotros</span>
          <span>Ayuda</span>
          <span>Compartir</span>
          <span>Promociones</span>
          <span>Testimonios</span>
          <span>Productos</span>
        </div>
        <div className="footer-section-columns">
          <span>+57 302-261-0105</span>
          <span>quest@info.com</span>
          <span>queststore@.com</span>
          <span>contacto@quest.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terminos & Conditiones</span>
          <span>Politica de privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
