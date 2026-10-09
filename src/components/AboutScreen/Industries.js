import { industriesData } from "../../utils/AboutScreen/industries";

const Industries = () => {
  return (
    <>
      <section className="industries-section">
        <div className="industries-header flex-col">
          <p className="section-label">DOŚWIADCZENIE</p>
          <h2 className="section-title section-title--light section-title--underline">
            Branże, w których działamy
          </h2>
        </div>

        <div className="industries-cards-container">
          {industriesData.map((item) => (
            <div className="industry-card flex-col" key={item.id}>
              <div className="industry-card-header">
                <img src={item.image} alt={item.alt} />
                <p>{item.text}</p>
              </div>
              <a className="realization-links" href={item.link}>
                <span className="realization-link">Zobacz realizacje</span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </div>
          ))}
        </div>
        <div className="industries-description flex-col">
          <p className="industries-description-text">
            Realizowaliśmy projekty w działających zakładach produkcyjnych oraz
            obiektach o wysokich wymaganiach operacyjnych, gdzie kluczowe było
            zachowanie ciągłości pracy i bezpieczeństwa.
          </p>
        </div>
      </section>
    </>
  );
};

export default Industries;
