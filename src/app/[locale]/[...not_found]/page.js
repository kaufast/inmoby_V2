import { useTranslations } from "../../../i18n";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = ({ params: { locale } }) => {
  const t = useTranslations(locale);

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav */}
      <MobileMenu />
      {/* End Mobile Nav */}

      {/* Error/404 Section Area */}
      <section className="our-error">
        <div className="container">
          <div className="row align-items-center">
            {/* Error Image */}
            <div className="col-xl-6" data-aos="fade-left">
              <div className="animate_content text-center text-xl-start">
                <div className="animate_thumb">
                  <Image
                    width={591}
                    height={452}
                    className="w-100 h-100 cover"
                    src="/images/icon/error-page-img.svg"
                    alt="error-page-img"
                  />
                </div>
              </div>
            </div>
            {/* End .col-xl-6 */}

            {/* Error Text Content */}
            <div
              className="col-xl-5 offset-xl-1 wow fadeInLeft"
              data-aos="fade-right"
            >
              <div className="error_page_content mt80 mt50-lg text-center text-xl-start">
                <div className="erro_code">
                  <span className="text-thm">40</span>4
                </div>
                <h2 className="error_title">{t('notFound.title')}</h2>
                <p className="text fz15 mb20">{t('notFound.description')}</p>
                <Link href="/" className="ud-btn btn-dark">
                  {t('notFound.homeButton')}
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            {/* End .col-xl-5 */}
          </div>
        </div>
      </section>
      {/* End Error/404 Section Area */}

      {/* Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Footer */}
    </>
  );
};

export default NotFound;
