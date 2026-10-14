import { contactStepsData } from "../../utils/ContactScreen/contactSteps";
import contactPhoto from "../../assets/img/contact/contact-photo.png";
import { useTranslation } from "react-i18next";

const ContactContent = () => {
  const { t } = useTranslation("contact");
  return (
    <>
      <div className="contact-invitation-and-photos">
        <div className="contact-us-col">
          <p className="contact-label">{t("contactContent.label")}</p>
          <h1>{t("contactContent.title")}</h1>
          <div className="contact-us-description">
            <h2>{t("contactContent.subtitle")}</h2>
            <h3>{t("contactContent.description")}</h3>
          </div>
          <div className="contact-steps">
            {contactStepsData.map((data, index) => (
              <div className="contact-step" key={index}>
                <div className="contact-step-header">
                  <ion-icon name="document-text-outline"></ion-icon>
                  <p className="contact-step-number">{data.number}</p>
                </div>
                <h3>{t(data.header)}</h3>
                <p>{t(data.content)}</p>
              </div>
            ))}
          </div>

          <div className="image-wrapper">
            <div className="dots-pattern"></div>
            <img src={contactPhoto} alt={t("contactContent.imageAlt")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
