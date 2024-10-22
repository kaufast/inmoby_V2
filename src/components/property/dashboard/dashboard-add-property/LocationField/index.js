import React from "react";
import SelectMulitField from "./SelectMulitField";
import Map from "./Map";

const LocationField = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End col-12 */}

        <SelectMulitField />

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Código Postal</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        {/* End col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Vecindario
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Vecindario"
            />
          </div>
        </div>
        {/* End col-4 */}

        <div className="col-sm-12">
          <div className="mb20 mt30">
            <label className="heading-color ff-heading fw600 mb30">
              Coloca el pin del listado en el mapa
            </label>
            <Map />
          </div>
        </div>
        {/* End col-12 */}
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Latitud
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Longitud
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
      {/* End .row */}
    </form>
  );
};

export default LocationField;
