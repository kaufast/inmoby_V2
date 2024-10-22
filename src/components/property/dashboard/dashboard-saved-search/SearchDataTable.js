"use client";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const listingData = [
  {
    title: "Casa Familiar Ecuestre",
    date: "31 de diciembre de 2022",
  },
  {
    title: "Villa de lujo en Rego Park",
    date: "31 de diciembre de 2022",
  },
  {
    title: "Villa en Hollywood Boulevard",
    date: "31 de diciembre de 2022",
  },
  {
    title: "Casa de tres pisos en alquiler",
    date: "31 de diciembre de 2022",
  },
  {
    title: "Espacio de oficina en el noroeste",
    date: "31 de diciembre de 2022",
  },
  {
    title: "Casa en las colinas de Beverly",
    date: "31 de diciembre de 2022",
  },
  {
    title: "Villa de lujo llamada Elvado",
    date: "31 de diciembre de 2022",
  },
  {
    title: "Casa en Northridge",
    date: "31 de diciembre de 2022",
  },
  {
    title: "Casa Familiar Ecuestre",
    date: "31 de diciembre de 2022",
  },
  {
    title: "Villa de lujo en Rego Park",
    date: "31 de diciembre de 2022",
  },
  {
    title: "Villa en Hollywood Boulevard",
    date: "31 de diciembre de 2022",
  },
];

const SearchDataTable = () => {
  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Título del Listado</th>
          <th scope="col">Fecha de Creación</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {listingData.map((listing, index) => (
          <tr key={index}>
            <th scope="row">{listing.title}</th>
            <td>{listing.date}</td>
            <td>
              <div className="d-flex">
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`full_screen-${listing.id}`}
                >
                  <span className="flaticon-fullscreen-1" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`edit-${listing.id}`}
                >
                  <span className="fas fa-pen fa" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`delete-${listing.id}`}
                >
                  <span className="flaticon-bin" />
                </button>

                <ReactTooltip
                  id={`full_screen-${listing.id}`}
                  place="top"
                  content="Full Screen"
                />
                <ReactTooltip
                  id={`edit-${listing.id}`}
                  place="top"
                  content="Edi"
                />
                <ReactTooltip
                  id={`delete-${listing.id}`}
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

export default SearchDataTable;
