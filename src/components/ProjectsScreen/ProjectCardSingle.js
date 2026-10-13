import { useState } from "react";
import GalleryLightbox from "./Lightbox";

const ProjectCardSingle = ({ category }) => {
  const project = category.projects[0];
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <div className="single-card">
        <img src={project.cardPhoto} alt={project.cardPhotoAlt} />
        <div className="single-card-overlay">
          <h3>{project.cardTitle}</h3>
          <p className="project-description">
            <span>Zakres wykonanych prac: </span>
            {project.cardWorkRange}
          </p>
          <div className="location-div">
            <ion-icon name="location"></ion-icon>
            <p className="location-text">{project.cardLocation}</p>
          </div>
          {project.cardInvestmentPhotos.length !== 0 && (
            <button
              className="btn-activate-modal"
              onClick={() => {
                setIsGalleryOpen(true);
              }}
            >
              Zobacz realizację
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

export default ProjectCardSingle;
