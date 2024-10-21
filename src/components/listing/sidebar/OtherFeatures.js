'use client'

import React from "react";

const OtherFeatures = ({filterFunctions}) => {
  const featuresLeftColumn = [
    { label: "Ático" },
    { label: "Pista de Tenis", defaultChecked: true },
    { label: "Aire Acondicionado", defaultChecked: true },
    { label: "Cesped", defaultChecked: true },
    { label: "TV / Cable" },
    { label: "Secadora" },
  ];

  const featuresRightColumn = [
    { label: "Ducha Exterior" },
    { label: "Lavadora" },
    { label: "Vista al Mar" },
    { label: "Bodega de vinos" },
    { label: "Patio delantero" },
    { label: "Frígorifico" },
  ];



  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="checkbox-style1">
          {featuresLeftColumn.map((feature, index) => (
            <label className="custom_checkbox" key={index}>
              {feature.label}
              <input checked={filterFunctions?.categories.includes(feature.label)}
             type="checkbox" onChange={()=>filterFunctions?.handlecategories(feature.label)}  />
              <span className="checkmark" />
            </label>
          ))}
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-lg-6">
        <div className="checkbox-style1">
          {featuresRightColumn.map((feature, index) => (
            <label className="custom_checkbox" key={index}>
              {feature.label}
              
              <input type="checkbox" onChange={()=>filterFunctions?.handlecategories(feature.label)}  defaultChecked={feature.defaultChecked} />
              <span className="checkmark" />
            </label>
          ))}
        </div>
      </div>
      {/* End .col-6 */}
    </div>
  );
};

export default OtherFeatures;
