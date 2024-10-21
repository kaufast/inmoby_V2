"use client";
import Image from "next/image";
import React from "react";

const reviews = [
  {
    name: "Bessie Cooper",
    date: "12 Octubre 2024", // Fecha actualizada
    rating: 5,
    text: "La experiencia con el equipo de Inmonbi fue excelente. Nos ayudaron a encontrar una propiedad en el corazón de la ciudad que cumplía con todas nuestras expectativas. Su conocimiento del mercado inmobiliario es impresionante.",
    images: [
      "/images/blog/blog-single-3.jpg",
      "/images/blog/blog-single-4.jpg",
      "/images/blog/blog-single-5.jpg",
      "/images/blog/blog-single-6.jpg",
    ],
  },
  {
    name: "Darrell Steward",
    date: "12 Octubre 2024", // Fecha actualizada
    rating: 5,
    text: "Inmonbi nos brindó un servicio increíble. Nos guiaron a través de todo el proceso de compra de nuestra primera vivienda, y logramos encontrar la casa perfecta en una zona en crecimiento. Los recomiendo ampliamente.",
    images: [
      "/images/blog/blog-single-3.jpg",
      "/images/blog/blog-single-4.jpg",
      "/images/blog/blog-single-5.jpg",
      "/images/blog/blog-single-6.jpg",
    ],
  },
];

const SingleReview = () => {
  return (
    <>
      {reviews.map((review, index) => (
        <div className="col-md-12" key={index}>
          <div className="mbp_first position-relative d-flex align-items-center justify-content-start mt30 mb30-sm">
            <Image
              width={60}
              height={60}
              src="/images/blog/comments-2.png"
              className="mr-3"
              alt="comentarios"
            />
            <div className="ml20">
              <h6 className="mt-0 mb-0">{review.name}</h6>
              <div>
                <span className="fz14">{review.date}</span>
                <div className="blog-single-review">
                  <ul className="mb0 ps-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <li className="list-inline-item me-0" key={i}>
                        <a href="#">
                          <i className="fas fa-star review-color2 fz10" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End .d-flex */}

          <p className="text mt20 mb20">{review.text}</p>
          <ul className="mb20 ps-0">
            {review.images.map((image, i) => (
              <li className="list-inline-item mb5-xs" key={i}>
                <Image
                  width={110}
                  height={90}
                  className="bdrs6"
                  src={image}
                  alt="imagen de reseña"
                />
              </li>
            ))}
          </ul>

          <div className="review_cansel_btns d-flex bdrb1 pb30">
            <a href="#">
              <i className="fas fa-thumbs-up" />
              Útil
            </a>
            <a href="#">
              <i className="fas fa-thumbs-down" />
              No útil
            </a>
          </div>
        </div>
      ))}

      <div className="col-md-12">
        <div className="position-relative bdrb1 pt30 pb20">
          <a href="#" className="ud-btn btn-white2">
            Mostrar las 134 reseñas
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleReview;
