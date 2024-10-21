const Faq2 = () => {
  const faqItems = [
    {
      id: "headingOne",
      question: "¿Puede una vivienda depreciarse en valor?",
      answer:
        "En España, una vivienda puede depreciarse dependiendo del mercado inmobiliario, la ubicación y el estado de conservación. Sin embargo, los inmuebles en zonas urbanas y con buena demanda tienden a mantener o incrementar su valor.",
    },
    {
      id: "headingTwo",
      question: "¿Una vivienda antigua tiene el mismo valor que una nueva?",
      answer:
        "Las viviendas antiguas pueden ser tan valiosas como las nuevas, dependiendo de su estado, ubicación y características. Además, algunas casas antiguas tienen valor histórico o arquitectónico que incrementa su precio.",
    },
    {
      id: "headingThree",
      question: "¿Qué es un agente inmobiliario?",
      answer:
        "Un agente inmobiliario es un profesional autorizado que se encarga de mediar en la compra, venta o alquiler de propiedades. En España, deben estar registrados en el Colegio Oficial de Agentes de la Propiedad Inmobiliaria para garantizar un servicio profesional.",
    },
    {
      id: "headingFour",
      question: "¿Puedo pagar mis propios impuestos y seguro?",
      answer:
        "Sí, en España puedes encargarte directamente del pago de tus impuestos de propiedad (IBI) y de tu seguro de hogar. Sin embargo, algunas hipotecas incluyen estos pagos como parte del acuerdo.",
    },
  ];

  return (
    <div className="accordion" id="accordionExample2">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={item.id}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index + 1}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse${index + 1}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${index + 1}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={item.id}
            data-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq2;
