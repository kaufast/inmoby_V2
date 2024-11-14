import { useTranslations } from '../../../i18n';
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Form from "@/components/pages/contact/Form";
import Office from "@/components/pages/contact/Office";

export const metadata = {
  title: "Contacto | Realton - Servicios Inmobiliarios",
};

const Contact = ({ params: { locale } }) => {
  const t = useTranslations(locale);

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Our Contact With Map */}
      <section className="p-0">
        <iframe
          className="home8-map contact-page"
          loading="lazy"
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
          title={t('contact.office.locations.madrid.city')}
          aria-label={t('contact.office.locations.madrid.city')}
        />
      </section>

      <section>
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-lg-5 position-relative">
              <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white">
                <h4 className="form-title mb25">
                  {t('contact.form.title')}
                </h4>
                <Form locale={locale} />
              </div>
            </div>

            <div className="col-lg-5 offset-lg-2">
              <h2 className="mb30 text-capitalize">
                {t('contact.hero.title')} <br className="d-none d-lg-block" />
              </h2>
              <p className="text">
                {t('contact.hero.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt0 pb90 pb10-md">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="main-title text-center">
                <h2 className="title">
                  {t('contact.office.title')}
                </h2>
                <p className="paragraph">
                  {t('contact.office.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <Office locale={locale} />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Visit our Office */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Contact;
