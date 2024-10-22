import React from "react";

const WalkScore = () => {
  const scores = [
    {
      icon: "flaticon-walking",
      type: "Índice de Caminabilidad",
      score: "57",
      description: "Algo Caminable",
    },
    {
      icon: "flaticon-bus",
      type: "Índice de Transporte",
      score: "27",
      description: "Algo de Transporte",
    },
    {
      icon: "flaticon-bike",
      type: "Índice de Ciclabilidad",
      score: "45",
      description: "Algo Apta para Bicicletas",
    },
    
  ];

  return (
    <>
      {scores.map((score, index) => (
        <div
          key={index}
          className={`walkscore d-sm-flex align-items-center ${
            index < 2 ? "mb20" : ""
          }`}
        >
          <span className={`icon mr15 mb10-sm ${score.icon}`} />
          <div className="details">
            <p className="dark-color fw600 mb-2">{score.type}</p>
            <p className="text mb-0">{`${score.score} / 100 (${score.description})`}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default WalkScore;
