import { useTranslation } from "react-i18next";
import { carouselLogosData } from "../../utils/HomeScreen/carouselLogos";
import { motion } from "motion/react";

const Clients = () => {
  const { t } = useTranslation("home");
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="clients"
    >
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
    </motion.section>
  );
};

export default Clients;
