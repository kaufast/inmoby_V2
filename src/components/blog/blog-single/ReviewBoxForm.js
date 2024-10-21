"use client";
import Select from "react-select";

const ReviewBoxForm = () => {
  const inqueryType = [
    { value: "Five Star", label: "Cinco Estrellas" },
    { value: "Four Star", label: "Cuatro Estrellas" },
    { value: "Three Star", label: "Tres Estrellas" },
    { value: "Two Star", label: "Dos Estrellas" },
    { value: "One Star", label: "Una Estrella" },
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

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario
    // Aquí se puede añadir lógica adicional o llamadas a API
  };

  return (
    <form className="comments_form mt30" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-4">
            <label className="fw600 ff-heading mb-2">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="fw600 ff-heading mb-2">Título</label>
            <input
              type="text"
              className="form-control"
              placeholder="Introduce el Título"
              required
            />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-md-6">
          <div className="widget-wrapper sideborder-dropdown mb-4">
            <label className="fw600 ff-heading mb-2">Calificación</label>
            <div className="form-style2 input-group">
              <Select
                defaultValue={[inqueryType[0]]}
                name="rating"
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
        {/* End .col-6 */}

        <div className="col-md-12">
          <div className="mb-4">
            <label className="fw600 ff-heading mb-2">Reseña</label>
            <textarea
              className="pt15"
              rows={6}
              placeholder="Escribe una reseña"
              defaultValue={""}
              required
            />
          </div>
          <button type="submit" className="ud-btn btn-white2">
            Enviar Reseña
            <i className="fal fa-arrow-right-long" />
          </button>
        </div>
        {/* End .col-6 */}
      </div>
    </form>
  );
};

export default ReviewBoxForm;
