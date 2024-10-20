import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="cta-banner4 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mx-auto" data-aos="fade-in">
            <div className="cta-style4 position-relative text-center">
              <h6 className="sub-title fw400 text-white">BUY OR SELL</h6>
              <h1 className="cta-title mb30 text-white">
              ¿Buscas comprar una nueva propiedad o vender una existente? Inmobi te ofrece una solución increíble.
              </h1>
              <div className="d-block d-sm-flex justify-content-center">
                <Link
                  href="/dashboard-add-property"
                  className="ud-btn btn-thm me-0 me-sm-4"
                >
                  Enviar Propiedad
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Link href="/grid-default" className="ud-btn btn-white">
                  Buscar Propiedades
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
