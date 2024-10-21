import React from "react";

const featuresData = [
  {
    points: [
      "Prefiere juguetes creativos.",
      "Elige juguetes fáciles de guardar.",
      "Selecciona juguetes según el espacio.",
      "Involucra a los niños en la elección.",
      "Rota juguetes para mantener el orden.",
    ],
  },
  {
    points: [
      "Guarda juguetes por tipo.",
      "Usa muebles que combinen con el hogar.",
      "Elige juguetes que también decoren.",
      "Utiliza cajas para organizar.",
      "Aprovecha estantes altos.",
    ],
  },
  
];

const Features = () => {
  return (
    <>
      {featuresData.map((featureSection, index) => (
        <div className="col-auto" key={index}>
          <div className="ui-content">
            <div className="list-style1">
              <ul>
                {featureSection.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <i className="far fa-check text-thm3 bgc-thm3-light" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
