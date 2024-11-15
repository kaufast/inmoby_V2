  import React from "react";

  const InvoiceTopData = () => {
    const invoiceData = [
      {
        title: "Fecha de la factura:",
        date: "15 Octubre 2023",
        heading: "Proveedor",
        name: "Inmonbi Ltd.",
        address: (
          <>
            Calle Gran Vía, 28, <br /> 28013 Madrid, España
          </>
        ),
        columns: "col-sm-6 col-lg-7",
      },
      {
        title: "Fecha de vencimiento:",
        date: "30 Octubre 2023",
        heading: "Cliente",
        name: "José Pérez",
        address: (
          <>
            Calle Serrano, 45, <br /> 28006 Madrid, España
          </>
        ),
        columns: "col-sm-6 col-lg-5",
      },
    ];

    return (
      <>
        {invoiceData.map((data, index) => (
          <div className={data.columns} key={index}>
            <div className="invoice_date mb60">
              <div className="title mb5 ff-heading">{data.title}</div>
              <h6 className="fw400 mb0">{data.date}</h6>
            </div>
            <div className="invoice_address">
              <h6 className="mb20">{data.heading}</h6>
              <h6 className="fw400">{data.name}</h6>
              <p className="body-light-color ff-heading">{data.address}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  export default InvoiceTopData;
