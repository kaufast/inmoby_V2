"use client";
import Select from "react-select";

const Location = ({filterFunctions}) => {
  const locationOptions = [
    { value: "All Cities", label: "Todas las Ciudades" },
    { value: "California", label: "Barcelona" },
    { value: "Los Angeles", label: "Madrid" },
    { value: "New Jersey", label: "Cd. de México" },
    { value: "New York", label: "Chihuahua" },
    { value: "San Diego", label: "Londres" },
    { value: "San Francisco", label: "Monterrey" },
    { value: "Texas", label: "Nueva York" },
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
    <Select
      defaultValue={[locationOptions[0]]}
      name="colors"
      styles={customStyles}
      options={locationOptions}
      value={{value:filterFunctions.location,label:filterFunctions.location}}
      
     
      
      
      
      
      className="select-custom filterSelect"
      classNamePrefix="select"
      onChange={(e)=>filterFunctions?.handlelocation(e.value)}
      required
    />
  );
};

export default Location;
