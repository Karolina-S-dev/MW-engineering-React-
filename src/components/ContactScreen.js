import ContactContent from "./ContactScreen/ContactContent";
import ContactForm from "./ContactScreen/ContactForm";
import ScreenWrapper from "./ScreenWrapper";

import "../assets/css/contact.css";
import "../assets/css/contact-queries.css";

const ContactScreen = () => {
  return (
    <>
      <ScreenWrapper>
        <section className="contact-section">
          <div className="contact-us-main-row">
            <ContactContent />
            <ContactForm />
          </div>
        </section>
      </ScreenWrapper>
    </>
  );
};

export default ContactScreen;
