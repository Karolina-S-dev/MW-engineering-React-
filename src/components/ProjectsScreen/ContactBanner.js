const ContactBanner = () => {
  return (
    <>
      <section className="projects-contact-section">
        <div className="projects-contact-banner">
          <div className="flex-row">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            <div className="projects-contact-col">
              <h4>Planujesz inwestycję?</h4>
              <p>
                Porozmawiajmy o rozwiązaniach dopasowanych do Twojego obiektu.
              </p>
            </div>
          </div>
          <a href="/contact" className="projects-contact-button">
            <span>Skontaktuj się z nami</span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
