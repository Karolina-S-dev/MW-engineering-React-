import { howWeWorkData } from "../../utils/AboutScreen/howWeWork";
import safetyIconDark from "../../assets/img/about/safety-icon-dark.png";

const HowWeWork = () => {
  return (
    <>
      <section className="work-section flex-col">
        <div className="work-header flex-col">
          <p className="section-label">JAK PRACUJEMY</p>
          <h2 className="section-title section-title--light work-title">
            Proces dopasowany do realiów inwestycji
          </h2>
          <p className="work-subtitle">
            Każdy projekt prowadzimy etapowo — z naciskiem na przewidywalność,
            bezpieczeństwo i kontrolę kosztów.
          </p>
        </div>
        <div className="process-container-row">
          {howWeWorkData.map((item) => (
            <div className="process-card-main" key={item.id}>
              <div className="process-card flex-col">
                <h2 className="process-number">{item.number}</h2>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="work-banner">
          <img src={safetyIconDark} alt="" />
          <p>
            Każdy etap jest planowany tak, aby ograniczyć ingerencję w bieżącą
            działalność zakładu i zapewnić pełną kontrolę nad przebiegiem
            inwestycji.
          </p>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
