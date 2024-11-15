import React from "react";
import { useTranslations } from "../../../i18n"; // Adjust path as needed

const Form = ({ locale }) => {
  const t = useTranslations(locale);

  return (
    <form className="form-style1">
      <h2 className="form-title">{t("form.title")}</h2>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              {t("form.fields.firstName.label")}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={t("form.fields.firstName.placeholder")}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              {t("form.fields.lastName.label")}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={t("form.fields.lastName.placeholder")}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              {t("form.fields.email.label")}
            </label>
            <input
              type="email"
              className="form-control"
              placeholder={t("form.fields.email.placeholder")}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb10">
            <label className="heading-color ff-heading fw600 mb10">
              {t("form.fields.comments.label")}
            </label>
            <textarea
              cols={30}
              rows={4}
              placeholder={t("form.fields.comments.placeholder")}
              defaultValue={""}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-thm">
              {t("form.submitButton")}  
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
