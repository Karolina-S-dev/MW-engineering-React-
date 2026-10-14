import { contactStepsData } from "../../utils/ContactScreen/contactSteps";
import contactPhoto from "../../assets/img/contact/contact-photo.png";

const ContactContent = () => {
  return (
    <>
      <div className="contact-invitation-and-photos">
        <div className="contact-us-col">
          <p className="contact-label">KONTAKT</p>
          <h1>Skontaktuj się w sprawie realizacji</h1>
          <div className="contact-us-description">
            <h2>
              Realizujesz inwestycję, modernizację lub utrzymanie infrastruktury
              elektrycznej i oświetleniowej?
            </h2>
            <h3>
              Jeśli szukasz partnera, który rozumie realia pracy zakładów
              przemysłowych i dowozi projekty bez przestojów — zostaw kontakt.
              Od lat wspieramy firmy produkcyjne w projektach wymagających
              niezawodności, optymalizacji kosztów i sprawnej realizacji.
              Odezwiemy się i zaproponujemy konkretne rozwiązania dopasowane do
              Twojego zakładu.
            </h3>
          </div>
          <div className="contact-steps">
            {contactStepsData.map((data) => (
              <div className="contact-step">
                <div className="contact-step-header">
                  <ion-icon name="document-text-outline"></ion-icon>
                  <p className="contact-step-number">{data.number}</p>
                </div>
                <h3>{data.header}</h3>
                <p>{data.content}</p>
              </div>
            ))}
          </div>

          <div className="image-wrapper">
            <div className="dots-pattern"></div>
            <img
              src={contactPhoto}
              alt="Analiza instalacji elektrycznej w zakładzie przemysłowym"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
