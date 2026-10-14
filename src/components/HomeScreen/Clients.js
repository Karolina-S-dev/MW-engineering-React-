import { useTranslation } from "react-i18next";
import { carouselLogosData } from "../../utils/HomeScreen/carouselLogos";

const Clients = () => {
  const { t } = useTranslation("home");
  return (
    <section className="clients">
      <h2 className="clients-header">{t("clients.title")}</h2>
      <div className="carousel-main-div">
        <div className="carousel-track">
          {/* <!-- GROUP 1 --> */}
          <ul className="carousel-group">
            {carouselLogosData.map((client) => (
              <li key={client.id}>
                <img
                  src={client.image}
                  alt={`Logo ${client.name}`}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>

          {/* <!-- GROUP 2 (animation duplicate) --> */}
          <ul className="carousel-group">
            {carouselLogosData.map((client) => (
              <li key={client.id}>
                <img src={client.image} alt="" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;
