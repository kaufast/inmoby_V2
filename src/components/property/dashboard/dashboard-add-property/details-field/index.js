import React from "react";
import MultiSelectField from "./MultiSelectField";
import StructureType from "./StructureType";

const DetailsFiled = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Tamaño en pies (solo números)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Tamaño del lote en pies (solo números)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Habitaciones</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Dormitorios
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Baños
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              ID personalizado (texto)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Garajes
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Tamaño del garaje
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Año de construcción (numérico)
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Disponible desde (fecha)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="99.aa.aaaa"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Sótano
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Detalles adicionales
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Tejado
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Material exterior
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <StructureType />
      </div>
      {/* End .row */}

      <div className="row">
        <MultiSelectField />

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Notas del Propietario/Agente (no visible en la parte pública)
            </label>
            <textarea
              cols={30}
              rows={5}
              placeholder="Hay muchas variaciones de pasajes."
              defaultValue={""}
            />
          </div>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default DetailsFiled;
