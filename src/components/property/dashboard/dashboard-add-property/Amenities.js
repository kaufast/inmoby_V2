import React from "react";

const amenitiesData = {
  column1: [
    { label: "Ático", defaultChecked: false },
    { label: "Pista de Tenis", defaultChecked: true },
    { label: "Aire Acondicionado", defaultChecked: true },
    { label: "Cesped", defaultChecked: true },
    { label: "Swimming Pool", defaultChecked: false },
    { label: "Barbeque", defaultChecked: false },
    { label: "Microwave", defaultChecked: false },
  ],
  column2: [
    { label: "TV / Cable", defaultChecked: false },
    { label: "Secadora", defaultChecked: true },
    { label: "Ducha Exterior", defaultChecked: true },
    { label: "Lavadora", defaultChecked: true },
    { label: "Gym", defaultChecked: false },
    { label: "Ocean view", defaultChecked: false },
    { label: "Private space", defaultChecked: false },
  ],
  column3: [
    { label: "Vista al Mar", defaultChecked: false },
    { label: "Bodega de vinos", defaultChecked: true },
    { label: "Patio delantero", defaultChecked: true },
    { label: "Frígorifico", defaultChecked: true },
    { label: "WiFi", defaultChecked: false },
    { label: "Laundry", defaultChecked: false },
    { label: "Sauna", defaultChecked: false },
  ],
};

const Amenities = () => {
  return (
    <div className="row">
      {Object.keys(amenitiesData).map((columnKey, index) => (
        <div key={index} className="col-sm-6 col-lg-3 col-xxl-2">
          <div className="checkbox-style1">
            {amenitiesData[columnKey].map((amenity, amenityIndex) => (
              <label key={amenityIndex} className="custom_checkbox">
                {amenity.label}
                <input
                  type="checkbox"
                  defaultChecked={amenity.defaultChecked}
                />
                <span className="checkmark" />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Amenities;
