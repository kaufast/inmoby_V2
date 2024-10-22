import React from "react";

const ProperytyDescriptions = () => {
  return (
    <>
 <p className="text mb10">
  Esta casa de 3 habitaciones con un altillo y 2 baños en la comunidad cerrada de The Hideout lo tiene todo. Desde el plano de planta abierto hasta la abundancia de luz que entra por las ventanas, esta casa es perfecta para recibir invitados. La sala de estar y el comedor cuentan con techos abovedados y una hermosa chimenea. Te encantará pasar tiempo en la terraza disfrutando de las hermosas vistas. En la cocina, encontrarás electrodomésticos de acero inoxidable, un salpicadero de azulejos, así como una barra de desayuno.
</p>

      <div className="agent-single-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              style={{}}
            >
              <div className="accordion-body p-0">
                <p className="text">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the class. This is the first item&apos;s accordion
                  body you get groundbreaking performance and amazing battery
                  life. Add to that a stunning Liquid Retina XDR display, the
                  best camera and audio ever in a Mac notebook, and all the
                  ports you need.
                </p>
              </div>
            </div>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button p-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Mostrar más
              </button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
