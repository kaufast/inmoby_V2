"use client";
import Select from "react-select";
import SingleAgentInfo from "./SingleAgentInfo";

const InfoWithForm = () => {
  const inqueryType = [
    { value: "Engineer", label: "Ingeniero" },
    { value: "Doctor", label: "Doctor" },
    { value: "Employee", label: "Empleado" },
    { value: "Businessman", label: "Empresario" },
    { value: "Other", label: "Otro" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  return (
    <>
      <SingleAgentInfo />

      <div className="row">
  <div className="col-md-12">
    <form className="form-style1 row">
      <div className="col-md-6">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Introducir nombre completo"
          />
        </div>
      </div>
      {/* Fin .col */}

      <div className="col-md-6">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">Teléfono</label>
          <input
            type="text"
            className="form-control"
            placeholder="Introduce tu teléfono"
          />
        </div>
      </div>
      {/* Fin .col */}

      <div className="col-md-6">
        <div className="mb20">
          <label className="heading-color ff-heading fw600 mb10">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="su correo..."
          />
        </div>
      </div>
      {/* Fin .col */}

      <div className="col-md-6">
        <div className="widget-wrapper sideborder-dropdown">
          <label className="heading-color ff-heading fw600 mb10">Soy un</label>
          <div className="form-style2 input-group">
            <Select
              defaultValue={[inqueryType[0]]}
              name="colors"
              options={inqueryType}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              isClearable={false}
            />
          </div>
        </div>
      </div>
      {/* Fin .col */}

      <div className="col-md-12">
        <div className="mb10">
          <label className="heading-color ff-heading fw600 mb10">Mensaje</label>
          <textarea
            cols={30}
            rows={4}
            placeholder="Hola, estoy interesado en [Apartamento renovado en la última planta]"
            defaultValue={""}
          />
        </div>
      </div>
      {/* Fin .col */}

      <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
        <label className="custom_checkbox fz14 ff-heading">
          Al enviar este formulario, acepto los Términos de Uso
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
      </div>
      {/* Fin .col */}

      <div className="btn-area mt20">
        <button className="ud-btn btn-white2">
          Solicitar Información <i className="fal fa-arrow-right-long" />
        </button>
      </div>
    </form>
  </div>
</div>
</>

  );
};

export default InfoWithForm;
