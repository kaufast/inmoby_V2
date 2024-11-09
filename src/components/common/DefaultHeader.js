// src/components/common/DefaultHeader.js
"use client";

import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";
import LoginSignupModal from "@/components/common/login-signup-modal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslations } from "@/i18n"; // Translation hook

const DefaultHeader = ({ locale }) => {
  const [navbar, setNavbar] = useState(false);
  const t = useTranslations(locale);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header
        className={`header-nav nav-homepage-style light-header menu-home4 main-menu ${
          navbar ? "sticky slideInDown animated" : ""
        }`}
      >
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <Link className="header-logo" href="/">
                  <Image
                    width={138}
                    height={44}
                    src="/images/inmobi-black-txt.png"
                    alt="Header Logo"
                  />
                </Link>
                <MainMenu />
              </div>

              <div className="col-auto">
                <div className="d-flex align-items-center">
                  <a
                    href="#"
                    className="login-info d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#loginSignupModal"
                  >
                    <i className="far fa-user-circle fz16 me-2" />
                    <span className="d-none d-xl-block">
                      {t("header.myAccount")}
                    </span>
                  </a>
                  <Link
                    className="ud-btn btn-white add-property bdrs60 mx-2 mx-xl-4"
                    href="/dashboard-add-property"
                  >
                    {t("header.postProperty")}
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                  <a
                    className="sidemenu-btn filter-btn-right"
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#SidebarPanel"
                  >
                    <Image
                      width={25}
                      height={9}
                      src="/images/dark-nav-icon.svg"
                      alt="menu"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Modals and Offcanvas Menu */}
      <div className="signup-modal">
        <div className="modal fade" id="loginSignupModal">
          <div className="modal-dialog modal-dialog-centered">
            <LoginSignupModal />
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" id="SidebarPanel">
        <SidebarPanel />
      </div>
    </>
  );
};

export default DefaultHeader;
