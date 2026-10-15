import ContactContent from "./ContactScreen/ContactContent";
import ContactForm from "./ContactScreen/ContactForm";
import ScreenWrapper from "./ScreenWrapper";
import { motion } from "motion/react";

import "../assets/css/contact.css";
import "../assets/css/contact-queries.css";

const ContactScreen = () => {
  return (
    <>
      <ScreenWrapper>
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="contact-section"
        >
          <div className="contact-us-main-row">
            <ContactContent />
            <ContactForm />
          </div>
        </motion.section>
      </ScreenWrapper>
    </>
  );
};

export default ContactScreen;
