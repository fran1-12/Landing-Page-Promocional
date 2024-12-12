import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Estilo que Ajusta",
      text: "Cuando eliges ropa de calidad, no solo estás invirtiendo en tu estilo, sino también en tu comodidad.",
    },
    {
      image: ChooseMeals,
      title: "Comodidad en tus Manos",
      text: "La ropa adecuada te da confianza y comodidad. Es como una extensión de ti mismo, y esta a tu alcance.",
    },
    {
      image: DeliveryMeals,
      title: "Entrega Rápida y Segura",
      text: "Nos encargamos de que tu ropa llegue rápidamente y en perfectas condiciones.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Reseña</p>
        <h1 className="primary-heading">El Estilo Si Importa</h1>
        <p className="primary-text">
        Descubre la solución perfecta para tus necesidades. Nuestra ropa pro combina innovación, calidad y un diseño pensado especialmente para ti.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
