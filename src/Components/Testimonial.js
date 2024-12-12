import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonios</p>
        <h1 className="primary-heading">Referencias de clientes</h1>
        <p className="primary-text">
        Nuestros clientes son la mejor prueba de la calidad y estilo de nuestras prendas. Aquí te dejamos algunas de sus experiencias para que puedas ver por qué siempre eligen nuestra marca.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Excelente calidad y ajuste perfecto. Los jeans son cómodos y el estilo es justo lo que buscaba. El envío fue rápido y llegó en perfecto estado. Sin duda, volveré a comprar.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jhoan Alvarez</h2>
      </div>
    </div>
  );
};

export default Testimonial;
