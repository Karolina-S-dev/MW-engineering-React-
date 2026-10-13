import { useState } from "react";
import GalleryLightbox from "./Lightbox";

const ProjectCard = ({ project, category }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <div className={`project-card ${category.cardBackgroundColor}`}>
        <div className="project-card-img">
          <img src={project.cardPhoto} alt={project.cardPhotoAlt} />
        </div>
        <div className="project-card-content">
          <h3>{project.cardTitle}</h3>
          <p className="project-description">
            <span> Zakres wykonanych prac:</span> {project.cardWorkRange}
          </p>
          <div className="location-div">
            <ion-icon name="location"></ion-icon>
            <p className="location-text">{project.cardLocation}</p>
          </div>
          {project.cardInvestmentPhotos.length != 0 && (
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

      {/* /* <div className="modal-gallery-background" id="gallery1">
        <div className="modal-gallery-content">
          <ion-icon name="close-outline"></ion-icon>
          <div class="gallery-scroll">
            <img
              src="./img/photos-from-investments/amazon/Amazon-1.jpeg"
              alt="Trasy oświetleniowe w centrum logistycznym Amazon"
              loading="lazy"
            />
            <img
              src="./img/photos-from-investments/amazon/Amazon-3.jpeg"
              alt="Trasy oświetleniowe w centrum logistycznym Amazon"
              loading="lazy"
            />
            <img
              src="./img/photos-from-investments/amazon/Amazon-4.jpeg"
              alt="Instalacja oświetlenia w centrum logistycznym Amazon"
              loading="lazy"
            />
            <img
              src="./img/photos-from-investments/amazon/Amazon-6.jpeg"
              alt="System oświetlenia przemysłowego Amazon"
              loading="lazy"
            />
            <img
              src="./img/photos-from-investments/amazon/Amazon-7.jpeg"
              alt="Oświetlenie generalne w centrum logistycznym Amazon"
              loading="lazy"
            />
            <img
              src="./img/photos-from-investments/amazon/Amazon-8.jpeg"
              alt="Realizacja MW-Engineering dla centrum logistycznego Amazon"
              loading="lazy"
            />
            <img
              src="./img/photos-from-investments/amazon/Amazon-9.jpeg"
              alt="Instalacja oświetlenia i systemu sterowania w centrum logistycznym Amazon"
              loading="lazy"
            />
            <img
              src="./img/photos-from-investments/amazon/project-amazon.jpg"
              alt="Montaż instalacji elektrycznej Amazon"
              loading="lazy"
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProjectCard;
