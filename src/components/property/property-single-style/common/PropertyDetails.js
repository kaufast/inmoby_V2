import React from "react";

const PropertyDetails = () => {
  const columns = [
    [
      {
        label: "ID Propiedad",
        value: "RT48",
      },
      {
        label: "Precio",
        value: "252.000 ",
      },
      {
        label: "Tamaño  ",
        value: "1500 sqft",
      },
      {
        label: "Baños",
        value: "3",
      },
      {
        label: "Dormitorios",
        value: "2",
      },
    ],
    [
      {
        label: "Garaje",
        value: "2",
      },
      {
        label: "Tamaño Garaje",
        value: "200 sqft",
      },
      {
        label: "Año Construcción",
        value: "2022",
      },
      {
        label: "Tipo",
        value: "Apartamento",
      },
      {
        label: "Estado",
        value: "En Venta",
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
