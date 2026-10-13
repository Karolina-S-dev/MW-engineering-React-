// ------- YET ANOTHER REACT LIGHTBOX -------
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const GalleryLightbox = ({ isGalleryOpen, setIsGalleryOpen, project }) => {
  const [index, setIndex] = useState(null);

  return (
    <>
      <Lightbox
        plugins={[Counter, Thumbnails, Zoom]}
        index={index}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        open={isGalleryOpen}
        close={() => setIsGalleryOpen(false)}
        slides={project.cardInvestmentPhotos.map((photo) => ({
          src: photo,
        }))}
        render={{
          controls: () => (
            <div className="lightbox-title">{project.cardTitle}</div>
          ),
        }}
      ></Lightbox>
    </>
  );
};

export default GalleryLightbox;
