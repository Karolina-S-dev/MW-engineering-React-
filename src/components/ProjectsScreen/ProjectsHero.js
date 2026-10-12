import { useEffect, useRef } from "react";
import heroMovie from "../../assets/img/movies/hero-movie.mp4";

const ProjectsHero = () => {
  const videoRef = useRef(null);

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
        <div className="hero-content">
          <p className="section-label">REALIZACJE</p>
          <h1>Doświadczenie potwierdzone w wymagających środowiskach</h1>
          <p className="hero-description">
            Od 15 lat realizujemy projekty elektryczne i oświetleniowe dla
            przemysłu w Polsce i w Niemczech. Każda inwestycja to realne efekty
            i długofalowa wartość dla klienta.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <ion-icon name="list-circle-outline"></ion-icon>
              <div className="hero-stat-col">
                <p className="hero-stat-text">
                  <span>4500+</span>
                </p>
                <p>zrealizowanych projektów</p>
              </div>
            </div>
            <div className="hero-stat">
              <ion-icon name="calendar-outline"></ion-icon>
              <div className="hero-stat-col">
                <p className="hero-stat-text">
                  <span>15 lat</span>
                </p>
                <p>doświadczenia</p>
              </div>
            </div>
            <div className="hero-stat">
              <ion-icon name="globe-outline"></ion-icon>
              <div className="hero-stat-col">
                <p className="hero-stat-text">
                  <span>PL + DE</span>
                </p>
                <p>realizacje w Polsce i Niemczech</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsHero;
