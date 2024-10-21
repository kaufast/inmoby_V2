import React from "react";

const InvoiceTable = () => {
  const tableData = [
    {
      description: "Plan Estándar",
      price: "443,00 €",
      vat: "921,80 €",
      total: "9.243,00 €",
    },
    {
      description: "Plan Extra",
      price: "443,00 €",
      vat: "921,80 €",
      total: "9.243,00 €",
    },
    {
      description: "Total a Pagar",
      price: "",
      vat: "",
      total: "9.750,00 €",
    },
  ];

  return (
    <table className="table table-borderless">
      <thead className="thead-light">
        <tr className="tblh_row">
          <th className="tbleh_title" scope="col">
            Descripción
          </th>
          <th className="tbleh_title" scope="col">
            Precio
          </th>
          <th className="tbleh_title" scope="col">
            IVA (21%)
          </th>
          <th className="tbleh_title" scope="col">
            Total
          </th>
        </tr>
      </thead>

      <tbody>
        {tableData.map((row, index) => (
          <tr
            key={index}
            className={index === tableData.length - 1 ? "tblp_row" : "bdrb1"}
          >
            <th
              className={
                index === tableData.length - 1 ? "tblp_title" : "tbl_title"
              }
              scope="row"
            >
              {row.description}
            </th>
            <td className="tbl_title">{row.price}</td>
            <td className="tbl_title">{row.vat}</td>
            <td
              className={
                index === tableData.length - 1 ? "tblp_title" : "tblpr_title"
              }
            >
              {row.total}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
