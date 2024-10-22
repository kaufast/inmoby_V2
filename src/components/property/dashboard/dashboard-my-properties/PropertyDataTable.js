"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const propertyData = [
  {
    id: 1,
    title: "Casa en el Club de Campo",
    imageSrc: "/images/listings/list-1.jpg",
    location: "Madrid, España",
    price: "14,000/mes",
    datePublished: "31 de diciembre de 2023",
    status: "Pendiente",
  },
  {
    id: 2,
    title: "Villa de Lujo en Sarrià",
    imageSrc: "/images/listings/list-2.jpg",
    location: "Barcelona, España",
    price: "14,000/mes",
    datePublished: "31 de diciembre de 2023",
    status: "Publicado",
  },
  {
    id: 3,
    title: "Villa en el Paseo de Gracia",
    imageSrc: "/images/listings/list-3.jpg",
    location: "Barcelona, España",
    price: "14,000/mes",
    datePublished: "31 de diciembre de 2023",
    status: "En proceso",
  },
  {
    id: 4,
    title: "Casa en el Club de Campo",
    imageSrc: "/images/listings/list-4.jpg",
    location: "Madrid, España",
    price: "14,000/mes",
    datePublished: "31 de diciembre de 2023",
    status: "Pendiente",
  },
  {
    id: 5,
    title: "Villa de Lujo en La Moraleja",
    imageSrc: "/images/listings/list-5.jpg",
    location: "Madrid, España",
    price: "14,000/mes",
    datePublished: "31 de diciembre de 2023",
    status: "Publicado",
  },

];

const getStatusStyle = (status) => {
  switch (status) {
    case "Pending":
      return "pending-style style1";
    case "Published":
      return "pending-style style2";
    case "Processing":
      return "pending-style style3";
    default:
      return "";
  }
};

const PropertyDataTable = () => {
  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Título del Listado</th>
          <th scope="col">Fecha de Publicación</th>
          <th scope="col">Estado</th>
          <th scope="col">Ver</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {propertyData.map((property) => (
          <tr key={property.id}>
            <th scope="row">
              <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                <div className="list-thumb">
                  <Image
                    width={110}
                    height={94}
                    className="w-100"
                    src={property.imageSrc}
                    alt="property"
                  />
                </div>
                <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                  <div className="h6 list-title">
                    <Link href={`/single-v1/${property.id}`}>{property.title}</Link>
                  </div>
                  <p className="list-text mb-0">{property.location}</p>
                  <div className="list-price">
                    <a href="#">{property.price}</a>
                  </div>
                </div>
              </div>
            </th>
            <td className="vam">{property.datePublished}</td>
            <td className="vam">
              <span className={getStatusStyle(property.status)}>
                {property.status}
              </span>
            </td>
            <td className="vam">{property.datePublished}</td>
            <td className="vam">
              <div className="d-flex">
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`edit-${property.id}`}
                >
                  <span className="fas fa-pen fa" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`delete-${property.id}`}
                >
                  <span className="flaticon-bin" />
                </button>

                <ReactTooltip
                  id={`edit-${property.id}`}
                  place="top"
                  content="Edi"
                />
                <ReactTooltip
                  id={`delete-${property.id}`}
                  place="top"
                  content="Delete"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropertyDataTable;
