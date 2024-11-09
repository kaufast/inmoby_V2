import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";
import { useTranslations } from "@/i18n"; // Use absolute path

const Hero = ({ locale }) => {
  const t = useTranslations(locale); // Fetch translations based on locale

  return (
    <>
      <div className="inner-banner-style1 text-center">
        <h6 className="hero-sub-title animate-up-1">{t("hero.subtitle")}</h6>
        <h2 className="hero-title animate-up-2">{t("hero.title")}</h2>
        <p className="hero-text fz15 animate-up-3">{t("hero.description")}</p>
        <HeroContent locale={locale} />
      </div>
      <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal />
        </div>
      </div>
    </>
  );
};

export default Hero;
