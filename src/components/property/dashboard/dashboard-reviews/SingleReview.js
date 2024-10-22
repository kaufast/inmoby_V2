import Image from "next/image";
import React from "react";

const reviews = [
  {
    name: "María García",
    date: "12 Marzo 2024",
    rating: 5,
    text: "La experiencia de compra fue excelente. La propiedad tiene un diseño moderno y elegante, con una cocina espaciosa y equipada con electrodomésticos de alta calidad. El jardín es amplio y perfecto para reuniones familiares. Estamos muy contentos con nuestra nueva casa.",
    images: [
      "/images/blog/blog-single-3.jpg",
      "/images/blog/blog-single-4.jpg",
      "/images/blog/blog-single-5.jpg",
      "/images/blog/blog-single-6.jpg",
    ],
  },
  {
    name: "Alejandro López",
    date: "12 Marzo 2024",
    rating: 5,
    text: "Nos enamoramos de la vista desde la terraza de nuestra nueva villa. La ubicación es perfecta, cerca de colegios y supermercados. La atención recibida durante todo el proceso de compra fue impecable. No podríamos estar más satisfechos.",
    images: [],
  },
  {
    name: "Lucía Fernández",
    date: "12 Marzo 2024",
    rating: 5,
    text: "La casa es simplemente perfecta. Cada habitación es espaciosa y bien iluminada. Nos encantó el diseño del salón y la cercanía a parques y zonas verdes. El proceso de compra fue muy claro y sin complicaciones. Definitivamente recomendaría esta inmobiliaria.",
    images: [],
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
              alt="comments-2.png"
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
                  alt="review-img"
                />
              </li>
            ))}
          </ul>

          <div className="review_cansel_btns d-flex bdrb1 pb30">
            <a href="#">
              <i className="fas fa-thumbs-up" />
              Helpful
            </a>
            <a href="#">
              <i className="fas fa-thumbs-down" />
              Not helpful
            </a>
          </div>
        </div>
      ))}

      <div className="col-md-12">
        <div className="position-relative bdrb1 pt30 pb20">
          <a href="#" className="ud-btn btn-white2">
          Ver todas las 56 propiedades
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleReview;
