import { useTranslation } from "react-i18next";

const ContactBanner = () => {
  const { t } = useTranslation("projects");
  return (
    <>
      <section className="projects-contact-section">
        <div className="projects-contact-banner">
          <div className="flex-row">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            <div className="projects-contact-col">
              <h4>{t("contactBanner.title")}</h4>
              <p>{t("contactBanner.description")}</p>
            </div>
          </div>
          <a href="/contact" className="projects-contact-button">
            <span>{t("contactBanner.contactButton")}</span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
