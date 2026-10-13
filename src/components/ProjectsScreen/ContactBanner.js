const ContactBanner = () => {
  return (
    <>
      <section class="projects-contact-section">
        <div class="projects-contact-banner">
          <div class="flex-row">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            <div class="projects-contact-col">
              <h4>Planujesz inwestycję?</h4>
              <p>
                Porozmawiajmy o rozwiązaniach dopasowanych do Twojego obiektu.
              </p>
            </div>
          </div>
          <a href="contact.html" class="projects-contact-button">
            <span>Skontaktuj się z nami</span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
