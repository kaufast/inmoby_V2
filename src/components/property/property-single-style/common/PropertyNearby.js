import React from "react";

const PropertyNearby = () => {
  const tabsData = [
    {
      title: "Education",
      details: [
        {
          rating: "4",
          schoolName: "Escola Superior de Música de Catalunya",
          grades: "PK-6",
          distance: "5.9 km", // Conversión de millas a kilómetros
        },
        {
          rating: "5",
          schoolName: "Colegio Alemán de Barcelona",
          grades: "PK-6",
          distance: "5.9 km",
        },
        {
          rating: "5",
          schoolName: "Escuela The British School of Barcelona",
          grades: "PK-6",
          distance: "5.9 km",
        },
        
      ],
    },
    {
      title: "Salud y Medicina",
      details: [
        { rating: "4", facilityName: "Hospital de la Santa Creu i Sant Pau", distance: "3.7 km" },
        { rating: "5", facilityName: "Hospital Clínic", distance: "3.7 km" },
        { rating: "5", facilityName: "Hospital Universitario Vall d'Hebron", distance: "3.7 km" },
      ],
    },
    {
      title: "Transporte",
      details: [
        {
          rating: "4",
          transportationName: "Metro",
          distance: "1.3 km",
        },
        {
          rating: "5",
          transportationName: "Bus",
          distance: "0.7 km",
        },
        {
          rating: "5",
          transportationName: "Taxi",
          distance: "1.2 km",
        },
      ],
    },
  ];

  return (
    <div className="col-md-12">
      <div className="navtab-style1">
        <nav>
          <div className="nav nav-tabs mb20" id="nav-tab2" role="tablist">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={`nav-link fw600 ${index === 0 ? "active" : ""}`}
                id={`nav-item${index + 1}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#nav-item${index + 1}`}
                type="button"
                role="tab"
                aria-controls={`nav-item${index + 1}`}
                aria-selected={index === 0 ? "true" : "false"}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </nav>
        {/* End nav tabs */}

        <div className="tab-content" id="nav-tabContent">
          {tabsData.map((tab, index) => (
            <div
              key={index}
              className={`tab-pane fade fz15 ${
                index === 0 ? "active show" : ""
              }`}
              id={`nav-item${index + 1}`}
              role="tabpanel"
              aria-labelledby={`nav-item${index + 1}-tab`}
            >
              {tab.details.map((detail, detailIndex) => (
                <div
                  key={detailIndex}
                  className="nearby d-sm-flex align-items-center mb20"
                >
                  <div className="rating dark-color mr15 ms-1 mt10-xs mb10-xs">
                    <span className="fw600 fz14">{detail.rating}</span>
                    <span className="text fz14">/10</span>
                  </div>
                  <div className="details">
                    <p className="dark-color fw600 mb-0">
                      {tab.title === "Education"
                        ? detail.schoolName
                        : detail.facilityName || detail.transportationName}
                    </p>
                    <p className="text mb-0">
                      {tab.title === "Education"
                        ? `Grades: ${detail.grades} Distance: ${detail.distance}`
                        : `Distance: ${detail.distance}`}
                    </p>
                    <div className="blog-single-review">
                      <ul className="mb0 ps-0">
                        {[1, 2, 3, 4, 5].map((starIndex) => (
                          <li key={starIndex} className="list-inline-item me-0">
                            <a href="#">
                              <i className="fas fa-star review-color2 fz10" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyNearby;
