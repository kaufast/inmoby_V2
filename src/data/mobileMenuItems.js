module.exports = [
  {
    label: "Inmobi",
    subMenu: [
      { path: "/home-v1", label: "Inmobi" },

    ],
  },
  {
    label: "Listings",
    subMenu: [
      {
        label: "Vista",
        subMenu: [
          { label: "Vista", path: "/grid-default" },
          { label: "Mapa", path: "/map-v1" },
          { label: "Lista v1", path: "/list-v1" },

        ],
      },


    ],
  },
  {
    label: "Propiedades",
    subMenu: [
      {
        label: "Agentes",
        subMenu: [
          { label: "Perfil del Agente", path: "/agent-single/1" },
          { label: "Perfil de la Agencia", path: "/agency-single/1" },
        ],
      },

      {
        label: "Estilos",
        subMenu: [
          { label: "Propiedad Versión 1", path: "/single-v1/1" },

        ],
      },
    ],
  },
  {
    label: "Panel",
    subMenu: [
    { label: "Inicio del Panel", path: "/dashboard-home" },
    { label: "Mensajes", path: "/dashboard-message" },
    { label: "Nueva Propiedad", path: "/dashboard-add-property" },
    { label: "Mis Propiedades", path: "/dashboard-my-properties" },
    { label: "Mis Favoritos", path: "/dashboard-my-favourites" },
    { label: "Búsquedas Guardadas", path: "/dashboard-saved-search" },
    { label: "Reseñas", path: "/dashboard-reviews" },
    { label: "Mi Paquete", path: "/dashboard-my-package" },
    { label: "Mi Perfil", path: "/dashboard-my-profile" },
    ],
  },
  {
    label: "Blog",
    subMenu: [
      { path: "/blog-list-v1", label: "Lista de Blog V1" },
      { path: "/blogs/2", label: "Entrada de Blog" },
    ],
  },

  {
    label: "Contacto",
    subMenu: [
      { path: "/about", label: "Acerca de Nosotros" },
      { path: "/contact", label: "Contacto" },
      { path: "/faq", label: "Preguntas Frecuentes" },
      { path: "/login", label: "Iniciar Sesión" },
      { path: "/register", label: "Registrarse" },
      { path: "/404", label: "Página No Encontrada (404)" },
      { path: "/invoice", label: "Factura" },
    ],
  },
];
