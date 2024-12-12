import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Estilo y adaptación</p>
        <h1 className="primary-heading">
             Cuando te vistes bien, te sientes bien
        </h1>
        <p className="primary-text">
        La moda tiene el poder de transformar tu estado de ánimo y darte la confianza que necesitas para conquistar cualquier desafío.
        </p>
        <p className="primary-text">
       Te invitamos a aprovechar nuestras promociones.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Obtener Descuento</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
