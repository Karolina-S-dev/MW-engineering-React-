import { useEffect, useRef } from "react";
import heroMovie from "../../assets/img/movies/hero-movie.mp4";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const ProjectsHero = () => {
  const videoRef = useRef(null);
  const { t } = useTranslation("projects");

  useEffect(() => {
    videoRef.current.playbackRate = 0.6;
  }, []);

  return (
    <>
      <section className="hero">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroMovie} type="video/mp4" />
        </video>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <p className="section-label">{t("hero.label")}</p>
          <h1>{t("hero.title")}</h1>
          <p className="hero-description">{t("hero.description")}</p>

          <div className="hero-stats">
            <div className="hero-stat">
              <ion-icon name="list-circle-outline"></ion-icon>
              <div className="hero-stat-col">
                <p className="hero-stat-text">
                  <span>4500+</span>
                </p>
                <p>{t("hero.projectsCount")}</p>
              </div>
            </div>
            <div className="hero-stat">
              <ion-icon name="calendar-outline"></ion-icon>
              <div className="hero-stat-col">
                <p className="hero-stat-text">
                  <span>15 lat</span>
                </p>
                <p>{t("hero.experience")}</p>
              </div>
            </div>
            <div className="hero-stat">
              <ion-icon name="globe-outline"></ion-icon>
              <div className="hero-stat-col">
                <p className="hero-stat-text">
                  <span>PL + DE</span>
                </p>
                <p>{t("hero.locations")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ProjectsHero;
