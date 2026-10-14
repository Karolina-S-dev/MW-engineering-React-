import { useTranslation } from "react-i18next";

const OfferCard = ({ item }) => {
  const {t} = useTranslation("home")
  return (
    <div className="home-offer-card flex-col">
      <div className="home-offer-card-icon-header-row">
        <img src={item.image} alt="" loading="lazy" />
        <h3>{t(item.title)}</h3>
      </div>
      <p>{t(item.content)}</p>
    </div>
  );
};

export default OfferCard;
