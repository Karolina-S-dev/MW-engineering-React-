import { useState } from "react";
import GalleryLightbox from "./Lightbox";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const ProjectCard = ({ project, category }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { t } = useTranslation("projects");

  return (
    <>
      <motion.div
        initial={{ opacity: 0.2, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`project-card ${category.cardBackgroundColor}`}
      >
        <div className="project-card-img">
          <img src={project.cardPhoto} alt={project.cardPhotoAlt} />
        </div>
        <div className="project-card-content">
          <h3>{project.cardTitle}</h3>
          <p className="project-description">
            <span> {t("categoriesCards.workRangeLabel")}</span>{" "}
            {t(project.cardWorkRange)}
          </p>
          <div className="location-div">
            <ion-icon name="location"></ion-icon>
            <p className="location-text">{t(project.cardLocation)}</p>
          </div>
          {project.cardInvestmentPhotos.length !== 0 && (
            <button
              className="btn-activate-modal"
              onClick={() => {
                setIsGalleryOpen(true);
              }}
            >
              {t("categoriesCards.projectsButton")}
            </button>
          )}
        </div>
        <GalleryLightbox
          project={project}
          isGalleryOpen={isGalleryOpen}
          setIsGalleryOpen={setIsGalleryOpen}
        />
      </motion.div>
    </>
  );
};

export default ProjectCard;
