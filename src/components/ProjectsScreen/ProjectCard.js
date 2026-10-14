import { useState } from "react";
import GalleryLightbox from "./Lightbox";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project, category }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { t } = useTranslation("projects");

  return (
    <>
      <div className={`project-card ${category.cardBackgroundColor}`}>
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
      </div>
    </>
  );
};

export default ProjectCard;
