import React from "react";

const statisticsData = [
  {
    text: "Todas las Propiedades",
    title: "583",
    icon: "flaticon-home",
  },
  {
    text: "Vistas Totales",
    title: "192",
    icon: "flaticon-search-chart",
  },
  {
    text: "Total de Reseñas de Visitantes",
    title: "438",
    icon: "flaticon-review",
  },
  {
    text: "Total de Favoritos",
    title: "67",
    icon: "flaticon-like",
  },
];


const TopStateBlock = () => {
  return (
    <>
      {statisticsData.map((data, index) => (
        <div key={index} className="col-sm-6 col-xxl-3">
          <div className="d-flex justify-content-between statistics_funfact">
            <div className="details">
              <div className="text fz25">{data.text}</div>
              <div className="title">{data.title}</div>
            </div>
            <div className="icon text-center">
              <i className={data.icon} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopStateBlock;
