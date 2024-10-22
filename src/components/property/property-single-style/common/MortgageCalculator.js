import React from "react";

const resultItems = [
  {
    label: "Índice de Caminabilidad",
    value: "2.412 ", // Cambiado a euros
  },
  {
    label: "Impuestos sobre la Propiedad",
    value: "2.412 ", // Cambiado a euros
  },
  {
    label: "Seguro del Propietario",
    value: "2.412 ", // Cambiado a euros
  },
];

const MortgageCalculator = () => {
  return (
    <>
      <div className="col-md-12">
        <div className="d-flex align-items-center flex-wrap calculator-chart-percent">
          <div className="principal-interest-st" />
          <div className="property-tax-st" />
          <div className="home-insurance-st" />
        </div>
        {/* End chart */}

        <ul className="list-result-calculator d-md-flex flex-wrap justify-content-between bdrb1 mt20 ps-0 pb15 mb-0">
          {resultItems.map((item, index) => (
            <li key={index} className="d-sm-flex align-items-center">
              <span className="name-result text">{item.label}</span>
              <span className="principal-interest-val fw600">{item.value}</span>
            </li>
          ))}
        </ul>
        {/* End .list-result-calculator */}

        <form className="comments_form mt30">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Monto Total</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$250"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Pago Inicial</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$2304"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Tasa de Interés</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="3.5%"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">
                Plazo del Préstamo (Años)
                </label>
                <input type="text" className="form-control" placeholder={12} />
                required
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Impuesto sobre la Propiedad</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$1000"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Seguro del Hogar</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$1000"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-12">
              <button type="submit" className="ud-btn btn-white2">
                Calcular
                <i className="fal fa-arrow-right-long" />
              </button>
            </div>
            {/* End .col */}
          </div>
        </form>
      </div>
    </>
  );
};

export default MortgageCalculator;
