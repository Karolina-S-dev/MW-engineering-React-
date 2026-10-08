const Hero = () => {
  return (
    <section className="home-hero-section flex-col">
      <div className="home-hero-content">
        <h1>
          Oświetlenie przemysłowe <br />i instalacje elektryczne dopasowane do
          pracy zakładu
        </h1>
        <p>
          Realizujemy modernizacje w istniejącej infrastrukturze —
          <br />z uwzględnieniem organizacji produkcji, wymagań BHP i
          optymalizacji kosztów inwestycji.
        </p>
        <div className="home-hero-buttons flex-row">
          <a href="contact.html" className="btn btn-primary">
            Skontaktuj się
          </a>
          <a href="projects.html" className="btn btn-secondary">
            Zobacz realizacje
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
