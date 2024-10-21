import React from "react";

const InvoiceFooter = () => {
  const footerData = [
    {
      text: "inmobi.mobi",
      link: "https://inmobi.mobi",
    },
    {
      text: "info@inmobi.mobi",
      link: "mailto:info@inmobi.mobi",
    },
    {
      text: "(+34) 679 680 000",
      link: "tel:+34679680000",
    },
  ];

  return (
    <>
      {footerData.map((data, index) => (
        <div className="col-auto" key={index}>
          <div className="invoice_footer_content text-center">
            <a className="ff-heading" href={data.link}>
              {data.text}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default InvoiceFooter;
