import { offerCardData } from "../../utils/HomeScreen/offerCard";
import OfferCard from "./OfferCard";

const Offer = () => {
  return (
    <>
      <section className="home-offer-section section-light">
        <div className="home-offer-container">
          <div className="home-offer-intro">
            <h2>
              Kompleksowa realizacja projektów elektrycznych <br />i
              oświetleniowych
            </h2>
            <p>
              Realizujemy projekty w formule „zaprojektuj i wybuduj” — od
              audytu, przez projekt, po wdrożenie i uruchomienie instalacji.
            </p>
          </div>
          <div className="home-offer-cards-div flex-row">
            {offerCardData.map((item, index) => (
              <OfferCard item={item} key={item.id} />
            ))}           
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
