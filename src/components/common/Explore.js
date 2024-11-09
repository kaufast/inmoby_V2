// src/components/common/Explore.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/i18n"; // Import translation hook

const Explore = ({ locale }) => {
  const t = useTranslations(locale); // Load translations for the specified locale

  // Array of iconbox data with translation keys
  const iconboxData = [
    {
      id: 1,
      icon: "/images/icon/property-buy.svg",
      titleKey: "explore.buyPropertyTitle",
      textKey: "explore.exclusiveAgents",
      linkTextKey: "explore.findHome",
    },
    {
      id: 2,
      icon: "/images/icon/property-sell.svg",
      titleKey: "explore.sellPropertyTitle",
      textKey: "explore.exclusiveAgents",
      linkTextKey: "explore.postAd",
    },
    {
      id: 3,
      icon: "/images/icon/property-rent.svg",
      titleKey: "explore.rentPropertyTitle",
      textKey: "explore.exclusiveAgents",
      linkTextKey: "explore.findRental",
    },
  ];

  return (
    <>
      {iconboxData.map((item) => (
        <div
          className="col-sm-6 col-lg-4"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={(item.id + 1) * 100}
        >
          <div className="iconbox-style2 text-center">
            <div className="icon">
              <Image width={150} height={150} src={item.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{t(item.titleKey)}</h4>
              <p className="text">{t(item.textKey)}</p>
              <Link href="/grid-default" className="ud-btn btn-white2">
                {t(item.linkTextKey)}
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Explore;
