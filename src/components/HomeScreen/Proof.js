import { proofLogosData } from "../../utils/HomeScreen/proofLogos";

const Proof = () => {
  return (
    <section>
      <div className="home-proof-container">
        <h2>Doświadczenie potwierdzone w wymagających środowiskach</h2>
        <div className="home-proof-stats">
          <div className="home-proof-stat flex-col">
            <p>
              <strong>4500+</strong> zrealizowanych projektów
            </p>
          </div>
          <div className="home-proof-stat flex-col">
            <p>
              <strong>
                15 <span>lat</span>
              </strong>{" "}
              doświadczenia
            </p>
          </div>
          <div className="home-proof-stat flex-col">
            <p>
              <strong>Projekty</strong> w Polsce i Niemczech
            </p>
          </div>
        </div>
        <div className="home-proof-logos">
          {proofLogosData.map((logo) => (
            <img
              key={logo.id}
              src={logo.image}
              alt={`Logo ${logo.name}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
