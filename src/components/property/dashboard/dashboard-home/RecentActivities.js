import React from "react";

const activities = [
  {
    icon: "flaticon-home",
    text: "Tu anuncio Casa en el Barrio Gótico ha sido aprobado",
    highlight: "Casa en el Barrio Gótico",
  },
  {
    icon: "flaticon-review",
    text: "Dollie Horton dejó una reseña en Villa en la Costa Brava",
    highlight: "Villa en la Costa Brava",
  },
  {
    icon: "flaticon-like",
    text: "Alguien ha marcado como favorito tu anuncio de Ático en Salamanca",
    highlight: "Ático en Salamanca",
  },
  {
    icon: "flaticon-home",
    text: "Tu anuncio Casa en el Barrio Gótico ha sido aprobado",
    highlight: "Casa en el Barrio Gótico",
  },
  {
    icon: "flaticon-review",
    text: "Dollie Horton dejó una reseña en Villa en la Costa Brava",
    highlight: "Villa en la Costa Brava",
  },
  {
    icon: "flaticon-like",
    text: "Alguien ha marcado como favorito tu anuncio de Ático en Salamanca",
    highlight: "Ático en Salamanca",
  },
  {
    icon: "flaticon-home",
    text: "Tu anuncio Casa en el Barrio Gótico ha sido aprobado",
    highlight: "Casa en el Barrio Gótico",
  },
];


const RecentActivities = () => {
  return (
    <>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="recent-activity d-sm-flex align-items-center mb20"
        >
          <span className={`icon me-3 ${activity.icon} flex-shrink-0`} />
          <p className="text mb-0 flex-grow-1">
            {activity.text.split(activity.highlight).map((part, i, array) =>
              i === array.length - 1 ? (
                part
              ) : (
                <>
                  {part}
                  <span className="fw600">{activity.highlight}</span>
                </>
              )
            )}
          </p>
        </div>
      ))}
      <div className="d-grid">
        <a href="#" className="ud-btn btn-white2">
          Ver más
          <i className="fal fa-arrow-right-long" />
        </a>
      </div>
    </>
  );
};

export default RecentActivities;
