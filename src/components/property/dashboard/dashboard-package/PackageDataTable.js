import React from "react";

const packageData = [
  {
    type: "Disponible",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "Diciembre 31, 2024",
  },
  {
    type: "Disponible",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "Diciembre 31, 2024",
  },
  {
    type: "Disponible",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "Diciembre 31, 2024",
  },
  {
    type: "Disponible",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "Diciembre 31, 2024",
  },
  {
    type: "Disponible",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "Diciembre 31, 2024",
  },
  {
    type: "Disponible",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "Diciembre 31, 2024",
  },
  {
    type: "Disponible",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "Diciembre 31, 2024",
  },
  {
    type: "Disponible",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "Diciembre 31, 2024",
  },
  {
    type: "Disponible",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "Diciembre 31, 2024",
  },
  {
    type: "Disponible",
    propertiesRemaining: 3,
    featuredRemaining: 2,
    renewalRemaining: 7,
    storageSpace: "2 MB / 20 MB",
    expiryDate: "Diciembre 31, 2024",
  },
];

const PackageDataTable = () => {
  return (
    <table className="table-style3 table">
      <thead className="t-head">
        <tr>
          <th scope="col">Paquete Actual</th>
          <th scope="col">Propiedades Restantes</th>
          <th scope="col">Destacados Restantes</th>
          <th scope="col">Renovaciones Restantes</th>
          <th scope="col">Espacio en Mbs</th>
          <th scope="col">Fecha de Expiración</th>

        </tr>
      </thead>
      <tbody className="t-body">
        {packageData.map((packageItem, index) => (
          <tr key={index}>
            <th scope="row">{packageItem.type}</th>
            <td>{packageItem.propertiesRemaining}</td>
            <td>{packageItem.featuredRemaining}</td>
            <td>{packageItem.renewalRemaining}</td>
            <td>{packageItem.storageSpace}</td>
            <td>{packageItem.expiryDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PackageDataTable;
