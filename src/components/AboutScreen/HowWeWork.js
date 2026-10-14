import { howWeWorkData } from "../../utils/AboutScreen/howWeWork";
import safetyIconDark from "../../assets/img/about/safety-icon-dark.png";
import { useTranslation } from "react-i18next";

const HowWeWork = () => {
  const { t } = useTranslation("about");
  return (
    <>
      <section className="work-section flex-col">
        <div className="work-header flex-col">
          <p className="section-label">{t("howWeWork.label")}</p>
          <h2 className="section-title section-title--light work-title">
            {t("howWeWork.title")}
          </h2>
          <p className="work-subtitle">{t("howWeWork.subtitle")}</p>
        </div>
        <div className="process-container-row">
          {howWeWorkData.map((item) => (
            <div className="process-card-main" key={item.id}>
              <div className="process-card flex-col">
                <h2 className="process-number">{item.number}</h2>
                <h3>{t(item.title)}</h3>
                <p>{t(item.content)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="work-banner">
          <img src={safetyIconDark} alt="" />
          <p>{t("howWeWork.banner")}</p>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
