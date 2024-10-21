import Details from "@/components/blog/blog-single/Details";
import Features from "@/components/blog/blog-single/Features";
import Pagination from "@/components/blog/blog-single/Pagination";
import ReviewBoxForm from "@/components/blog/blog-single/ReviewBoxForm";
import Social from "@/components/blog/blog-single/Social";
import Tags from "@/components/blog/blog-single/Tags";
import TopComments from "@/components/blog/blog-single/TopComments";
import AllReviews from "@/components/blog/blog-single/reviews";
import Blog from "@/components/common/Blog";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Image from "next/image";

export const metadata = {
  title: "Blog Individual || Inmonbi - Plantilla NextJS de Bienes Raíces",
};

const BlogSingle = ({params}) => {
  return (
    <>
      {/* Menú Principal */}
      <DefaultHeader />
      {/* Fin del Menú Principal */}

      {/* Menú Móvil */}
      <MobileMenu />
      {/* Fin del Menú Móvil */}

      {/* Sección del Blog */}
      <section className="our-blog pt50">

        <Details id={params.id} />

        <div className="container">
          <div className="roww" data-aos="fade-up" data-aos-delay="500">
            <div className="col-xl-8 offset-xl-2">
              <div className="ui-content mt40 mb60">
                <h4 className="mb10">1. Reduce el desorden</h4>
                <p className="mb25 ff-heading">
                  No importa lo organizado que estés, un exceso de juguetes
                  siempre garantizará que tu casa sea un desorden esperando ocurrir.
                  Afortunadamente, lograr que los niños se deshagan de sus cosas
                  es más fácil de lo que parece.
                </p>
                <p className="ff-heading">
                  El truco es hacer de esto una oportunidad para que definan
                  quiénes son y sus intereses. Anímalos a hacer una pila de
                  "juguetes de bebé" para donar, y a apartar cualquier juguete
                  que ya no les interese, como figuras de acción de un programa
                  de TV olvidado. Separar estos juguetes les ayudará a apreciar
                  cuánto han crecido y redescubrir los que más les gustan.
                </p>
              </div>

              <div className="blockquote-style1 mb60">
                <blockquote className="blockquote">
                  <p className="fst-italic fz15 fw500 ff-heading">
                  Anímalos a hacer una pila de
                  "juguetes de bebé" para donar, y a apartar cualquier juguete
                  que ya no les interese...
                  </p>
                  <h6 className="quote-title">Luis Pickford</h6>
                </blockquote>
              </div>
              {/* Fin de blockquote */}

              <div className="col-12 ui-content">
                <h4 className="title">2. Elige juguetes sabiamente</h4>
              </div>

              <div className="row">
                <Features />
              </div>
              {/* Fin de .row */}

              <div className="col-lg-12 mt40">
                <Image
                  width={804}
                  height={470}
                  priority
                  src="/images/blog/blog-single-2.jpg"
                  alt="blog"
                  className="bdrs12 post-img-2 w-100 h-100 cover"
                />
              </div>
              {/* Fin de .col-12 */}

              <div className="ui-content mt40 mb30">
                <h4 className="mb10">3. Deja algunos juguetes fuera de su alcance</h4>
                <div className="custom_bsp_grid">
                  <ul className="list-style-type-bullet p-0 ml20">
                    <li>
                      Guarda algunos juguetes para ocasiones especiales y así mantener el interés.
                    </li>
                    <li>
                      Coloca los juguetes frágiles o difíciles de limpiar fuera de su alcance.
                    </li>
                    <li>
                      Mantén fuera los juguetes que no usen a diario para evitar el desorden.
                    </li>

                  </ul>
                </div>
              </div>
              {/* Fin de .ui-content */}

              <div className="bdrt1 bdrb1 d-block d-sm-flex justify-content-between pt50 pt30-sm pb50 pb30-sm">
                <div className="blog_post_share d-flex align-items-center mb10-sm">
                  <span className="mr30">Comparte esta publicación</span>
                  <Social />
                </div>
                <div className="bsp_tags d-flex">
                  <Tags />
                </div>
              </div>
              {/* Fin compartir en redes y etiquetas */}

              <TopComments />
              {/* Fin TopComments */}

              <Pagination />
              {/* Fin de la paginación del blog individual */}

              <AllReviews />
              {/* Fin de AllReviews */}

              <div className="bsp_reveiw_wrt">
                <h6 className="fz17">Deja una Reseña</h6>
                <ReviewBoxForm />
              </div>
              {/* Fin de ReviewBoxForm */}
            </div>
          </div>
        </div>
      </section>
      {/* Fin de Detalles del Blog */}

      {/* Publicaciones Relacionadas */}
      <section className="pb90 pb20-md pt-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="main-title text-start text-md-center">
                <h2 className="title">Publicaciones Relacionadas</h2>
                <p className="paragraph">
                  Explora más contenido sobre este tema.
                </p>
              </div>
            </div>
          </div>
          {/* Fin de .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
        </div>
      </section>
      {/* Fin de Publicaciones Relacionadas */}

      {/* Inicio de Nuestro Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* Fin de Nuestro Footer */}
    </>
  );
};

export default BlogSingle;
