import React from "react";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Llamanos a:",
      phone: "+(34) 679 680 000",
      phoneLink: "tel:+34679680000", // Changed phoneLink to tel: URI
    },
    {
      title: "Necesitas ayuda en linea?",
      mail: "info@inmobi.mobi",
      mailLink: "mailto:info@inmobi.mobi", // Changed mailLink to direct email address
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <div className="contact-info">
            <p className="info-title">{contact.title}</p>
            {contact.phone && (
              <h6 className="info-phone">
                <a href={contact.phoneLink}>{contact.phone}</a>
              </h6>
            )}
            {contact.mail && (
              <h6 className="info-mail">
                <a href={contact.mailLink}>{contact.mail}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
