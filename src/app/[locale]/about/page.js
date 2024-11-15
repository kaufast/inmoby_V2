import React from "react";
import { useTranslations } from "@/i18n";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Agents from "@/components/pages/about/Agents";
import Features from "@/components/pages/about/Features";
import FunFact from "@/components/pages/about/FunFact";
import Mission from "@/components/pages/about/Mission";
import Image from "next/image";
import Link from "next/link";

const About = ({ params: { locale } }) => {
  const t = useTranslations(locale);

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav */}
      <MobileMenu />
      {/* End Mobile Nav */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">{t("aboutPage.breadcrumb.title")}</h2>
                <div className="breadcumb-list">{t("aboutPage.breadcrumb.path")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Our About Area */}
      <section className="our-about pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6">
              <h2>{t("aboutPage.mission.heading")}</h2>
            </div>
            <div className="col-lg-6">
              <p className="text mb25">{t("aboutPage.mission.description1")}</p>
              <p className="text mb55">{t("aboutPage.mission.description2")}</p>
              <div className="row">
                <Mission />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our About Area */}

      {/* About Banner */}
      <section className="our-about pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-12">
              <div className="about-page-img">
                <Image
                  width={1206}
                  height={515}
                  priority
                  className="w-100 h-100 cover"
                  src="/images/about/about-page-banner.jpg"
                  alt="about banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Banner */}

      {/* Funfact */}
      <section className="pt-0">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
            <FunFact />
          </div>
        </div>
      </section>
      {/* End Funfact */}

      {/* Exclusive Agents */}
      <section className="pb90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="main-title" data-aos="fade-up" data-aos-delay="100">
                <h2 className="title">{t("aboutPage.agents.heading")}</h2>
                <p className="paragraph">{t("aboutPage.agents.description")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <Agents />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Exclusive Agents */}

      {/* About Intro */}
      <section className="pt30 pb-0">
        <div className="cta-banner3 bgc-thm-light mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-5 pl30-md pl15-xs" data-aos="fade-left" data-aos-delay="300">
                <div className="mb30">
                  <h2 className="title text-capitalize">{t("aboutPage.cta.heading")}</h2>
                </div>
                <div className="why-chose-list style2">
                  <Features />
                </div>
                <Link href="#" className="ud-btn btn-dark">
                  {t("aboutPage.cta.button")}
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Intro */}

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

export default About;
