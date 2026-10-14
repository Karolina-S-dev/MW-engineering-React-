const ContactForm = () => {
  return (
    <>
      <form className="form-contact-us-main">
        <div className="form-contact-data">
          <div className="form-ion-icon-and-data-row">
            <ion-icon name="location"></ion-icon>
            <h3>MW-Engineering Mariusz Wąchocki</h3>
          </div>
          <div className="form-menu-text">
            <p>ul. Spacerowa 10H/2</p>
            <p>26-052 Zagrody</p>
          </div>
        </div>

        <div className="form-ion-icon-and-data-row">
          <ion-icon name="call"></ion-icon>
          <p>
            tel.
            <a href="tel:+48695413382">+48 695 413 382</a>
          </p>
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label for="name">Imię i nazwisko*</label>
            <input
              type="text"
              placeholder="Imię i nazwisko"
              id="name"
              name="name"
              autocomplete="name"
              required
            />
          </div>
          <div className="form-group">
            <label for="company">Firma*</label>
            <input
              type="text"
              placeholder="Firma"
              id="company"
              name="company"
              autocomplete="organization"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label for="email">Email*</label>
          <input
            type="email"
            placeholder="Adres e-mail"
            id="email"
            name="email"
            autocomplete="email"
            required
          />
        </div>
        <div className="form-group">
          <label for="phone">Numer telefonu*</label>
          <input
            type="tel"
            placeholder="Podaj swój numer telefonu"
            id="phone"
            name="phone"
            autocomplete="tel"
            required
          />
        </div>
        <div className="form-group">
          <label for="position">Stanowisko</label>
          <input
            type="text"
            placeholder="Podaj swoje stanowisko"
            id="position"
            name="position"
          />
        </div>
        <div className="form-group">
          <label for="message">Wiadomość*</label>
          <textarea
            id="message"
            placeholder="Wpisz swoją wiadomość"
            name="message"
            required
          ></textarea>
        </div>
        <label className="file-upload">
          <ion-icon name="attach-outline"></ion-icon>
          <p>Wybierz plik (opcjonalnie)</p>
          <input type="file" />
        </label>
        <div className="form-button">
          <button className="btn-submit" type="submit">
            Wyślij zapytanie
          </button>
        </div>
        <div className="response-div">
          <ion-icon name="checkmark-outline"></ion-icon>
          <p>Odpowiadamy zwykle w ciągu 24h</p>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
