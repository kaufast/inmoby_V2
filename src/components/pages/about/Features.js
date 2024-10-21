const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: "Gestión de Propiedades",
      description:
        "Brindamos un servicio completo para la administración de propiedades, asegurando su buen estado y rendimiento.",
    },
    {
      icon: "flaticon-keywording",
      title: "Servicios Hipotecarios",
      description:
        "Te ayudamos a encontrar la hipoteca ideal para tu hogar con las mejores condiciones del mercado.",
    },
    {
      icon: "flaticon-investment",
      title: "Servicios de Divisas",
      description:
        "Ofrecemos servicios de cambio de divisas con tasas competitivas y transacciones seguras.",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-start mb30" key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="mb-1">{feature.title}</h6>
            <p className="text mb-0 fz15">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
