import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Lo más buscado",
      links: [
        { label: "Pisos en Renta", href: "#" },
        { label: "Apartmentos de lujo", href: "#" },
        { label: "Oficinas para comprar", href: "#" },
        { label: "Oficinas para alquilar", href: "#" },
      ],
    },
    {
      title: "Enlaces de ayuda",
      links: [
        { label: "Terminos de Uso", href: "#" },
        { label: "Políticas de Privacidad", href: "#" },
        { label: "Planes de Barcelona", href: "#" },
        { label: "Nuestros Servicios", href: "#" },
        { label: "Soporte y Contacto", href: "#" },
        { label: "Trabaja con nosotros", href: "#" },
        { label: "Preguntas Frequentes", href: "#" },
      ],
    },
    {
      title: "Descubre",
      links: [
        { label: "Barcelona", href: "#" },
        { label: "Mexico", href: "#" },
        { label: "Chihuahua", href: "#" },
        { label: "Londres", href: "#" },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb25">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
