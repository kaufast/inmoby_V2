import React from "react";

const Form = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Su Nombre"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Su apellido"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Correo eléctronico</label>
            <input
              type="email"
              className="form-control"
              placeholder="Su e-mail"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb10">
            <label className="heading-color ff-heading fw600 mb10">
              Comentarios
            </label>
            <textarea
              cols={30}
              rows={4}
              placeholder="Expliquenos aquí cual es su pregunta..."
              defaultValue={""}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-thm">
              Enviar mensaje  
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
