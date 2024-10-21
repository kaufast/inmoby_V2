'use client'

const Amenities = ({filterFunctions}) => {
  const amenities = [
    [
      { label: "Ático" },
    { label: "Pista de Tenis", defaultChecked: true },
    { label: "Aire Acondicionado", defaultChecked: true },
    { label: "Cesped", defaultChecked: true },
    ],
    [
      { label: "TV / Cable" },
      { label: "Secadora" },
      { label: "Ducha Exterior" },
    { label: "Lavadora" },
    ],
    [
      { label: "Vista al Mar" },
      { label: "Bodega de vinos" },
      { label: "Patio delantero" },
      { label: "Frígorifico" },
    ],
  ];

  return (
    <>
      {amenities.map((column, columnIndex) => (
        <div className="col-sm-4" key={columnIndex}>
          <div className="widget-wrapper mb20">
            <div className="checkbox-style1">
              {column.map((amenity, amenityIndex) => (
                <label className="custom_checkbox" key={amenityIndex}>
                  {amenity.label}
                  <input
                  checked={filterFunctions?.categories.includes(amenity.label)}
                  onChange={()=>filterFunctions?.handlecategories(amenity.label)}
                    type="checkbox"

                  />
                  <span className="checkmark" />
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Amenities;
