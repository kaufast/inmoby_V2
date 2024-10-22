"use client";
import Select from "react-select";

const PropertyDescription = () => {
  const catergoryOptions = [
    { value: "Apartments", label: "Apartamentos" },
    { value: "Bungalow", label: "Bungalow" },
    { value: "Houses", label: "Casas" },
    { value: "Loft", label: "Loft" },
    { value: "Office", label: "Oficina" },
    { value: "Townhome", label: "Casa Adosada" },
    { value: "Villa", label: "Villa" },
  ];

  const listedIn = [
    { value: "All Listing", label: "Todos los Listados" },
    { value: "Active", label: "Activo" },
    { value: "Sold", label: "Vendido" },
    { value: "Processing", label: "En Proceso" },
  ];

  const PropertyStatus = [
    { value: "All Cities", label: "Todas las Ciudades" },
    { value: "Pending", label: "Pendiente" },
    { value: "Processing", label: "En Proceso" },
    { value: "Published", label: "Publicado" },
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
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Título</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Descripción
            </label>
            <textarea
              cols={30}
              rows={5}
              placeholder="Hay muchas variaciones de pasajes."
              defaultValue={""}
            />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Seleccionar Categoría
            </label>
            <div className="location-area">
              <Select
                defaultValue={[catergoryOptions[1]]}
                name="colors"
                options={catergoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Listado en
            </label>
            <div className="location-area">
              <Select
                defaultValue={[listedIn[1]]}
                name="colors"
                options={listedIn}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Estado de la Propiedad
            </label>
            <div className="location-area">
              <Select
                defaultValue={[PropertyStatus[1]]}
                name="colors"
                options={PropertyStatus}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Precio en
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Tasa Anual de Impuestos
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Etiqueta de Precio Posterior
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>
        {/* End .col-6 */}
      </div>
    </form>
  );
};

export default PropertyDescription;
