import { useTranslation } from "react-i18next";
import { industriesData } from "../../utils/AboutScreen/industries";

const Industries = () => {
  const { t } = useTranslation("about");
  return (
    <>
      <section className="industries-section">
        <div className="industries-header flex-col">
          <p className="section-label">{t("industries.label")}</p>
          <h2 className="section-title section-title--light section-title--underline">
            {t("industries.title")}
          </h2>
        </div>

        <div className="industries-cards-container">
          {industriesData.map((item) => (
            <div className="industry-card flex-col" key={item.id}>
              <div className="industry-card-header">
                <img src={item.image} alt={item.alt} />
                <p>{t(item.text)}</p>
              </div>
              <a className="realization-links" href={item.link}>
                <span className="realization-link">
                  {t("industries.projectsButton")}
                </span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </div>
          ))}
        </div>
        <div className="industries-description flex-col">
          <p className="industries-description-text">
            {t("industries.description")}
          </p>
        </div>
      </section>
    </>
  );
};

export default Industries;
