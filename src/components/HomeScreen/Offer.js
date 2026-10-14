import { useTranslation } from "react-i18next";
import { offerCardData } from "../../utils/HomeScreen/offerCard";
import OfferCard from "./OfferCard";

const Offer = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <section className="home-offer-section section-light">
        <div className="home-offer-container">
          <div className="home-offer-intro">
            <h2>
              {t("offer.title1")} <br />
              {t("offer.title2")}
            </h2>
            <p>{t("offer.description")}</p>
          </div>
          <div className="home-offer-cards-div flex-row">
            {offerCardData.map((item) => (
              <OfferCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
