import { motion } from "motion/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputPhone from "./InputPhone";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    setValue,
    control,
    setFocus,
  } = useForm({
    defaultValues: {
      from_full_name: "",
      from_company: "",
      from_email: "",
      from_calling_codes: null,
      from_phone: "",
      from_position: "",
      from_message: "",
      from_privacy: "",
    },
  });

  useEffect(() => {
    setFocus("from_full_name");
  }, [setFocus]);

  const submitFunction = async (data) => {
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    );

    resetField("from_full_name");
    resetField("from_company");
    resetField("from_email");
    resetField("from_phone");
    resetField("from_position");
    resetField("from_message");
    resetField("from_privacy");

    toast.success("Dziękujemy. Wiadomość została wysłana!", {
      position: "top-center",
      className: "toast-success",
    });
  };

  const errorFunction = () => {
    toast.error("Uzupełnij wymagane pola", {
      position: "top-center",
      className: "toast-error",
    });
  };

  return (
    <>
      <motion.form
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="form-contact-us-main"
        onSubmit={handleSubmit(submitFunction, errorFunction)}
        noValidate
      >
        <div className="form-contact-data">
          <div className="form-ion-icon-and-data-row">
            <ion-icon name="location"></ion-icon>
            <h3>MW-Engineering Mariusz Wąchocki</h3>
          </div>
          <div className="form-menu-text">
            <p>ul. Spacerowa 10H/2 </p>
            <p>26-052 Zagrody, Polska</p>
          </div>
        </div>
        <div className="form-ion-icon-and-data-row">
          <ion-icon name="call"></ion-icon>
          <p>
            tel. <a href="tel:+48695413382">+48 695 413 382</a>
          </p>
        </div>
        <div className="form-group-row">
          {/* --------------- Input Name -------------- */}
          <div className="form-group">
            <label htmlFor="name">Imię i nazwisko*</label>
            <input
              type="text"
              placeholder="Imię i nazwisko"
              id="name"
              autoComplete="name"
              {...register("from_full_name", {
                required: "To pole jest wymagane",
                validate: (value) =>
                  value.trim().length >= 2 || "Wpisz poprawne imię i nazwisko",
              })}
              className={errors.from_full_name?.message && "error-border"}
            />
            <p className="form-error-message">
              {errors.from_full_name?.message}
            </p>
          </div>
          {/* --------------- Input Company -------------- */}
          <div className="form-group">
            <label htmlFor="company">Firma*</label>
            <input
              type="text"
              placeholder="Firma"
              id="company"
              autoComplete="organization"
              {...register("from_company", {
                required: "To pole jest wymagane",
              })}
              className={errors.from_company?.message && "error-border"}
            />
            <p className="form-error-message">{errors.from_company?.message}</p>
          </div>
        </div>
        <div className="form-group-row">
          {/* --------------- Input E-mail -------------- */}
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              placeholder="Adres e-mail"
              id="email"
              autoComplete="email"
              {...register("from_email", {
                required: "To pole jest wymagane",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Nieprawidłowy adres e-mail",
                },
              })}
              className={errors.from_email?.message && "error-border"}
            />
            <p className="form-error-message">{errors.from_email?.message}</p>
          </div>

          {/* --------------- Input Position -------------- */}
          <div className="form-group">
            <label htmlFor="position">Stanowisko</label>
            <input
              type="text"
              placeholder="Podaj swoje stanowisko"
              id="position"
              {...register("from_position")}
            />
          </div>
        </div>

        {/* ----------- Component InputPhone ----------- */}

        <InputPhone
          register={register}
          errors={errors}
          control={control}
          setValue={setValue}
        />

        {/* --------------- Input Message -------------- */}
        <div className="form-group">
          <label htmlFor="message">Wiadomość*</label>
          <textarea
            id="message"
            placeholder="Wpisz swoją wiadomość"
            {...register("from_message", {
              required: "To pole jest wymagane",
              validate: (value) =>
                value.trim().length > 0 || "Wpisz treść wiadomości",
            })}
            className={errors.from_message?.message && "error-border"}
          ></textarea>
          <p className="form-error-message">{errors.from_message?.message}</p>
        </div>

        {/* --------------- Input Attachment -------------- */}
        {/* <label htmlFor="attachment" className="file-upload">
          <ion-icon name="attach-outline"></ion-icon>
          <p>Wybierz plik (opcjonalnie)</p>
          <input type="file" id="attachment" {...register("from_attachment")} />
        </label> */}

        {/* --------------- Input Checkbox -------------- */}
        <div className="form-checkbox flex-row">
          <input
            type="checkbox"
            id="privacy"
            {...register("from_privacy", {
              required: "To pole jest wymagane",
            })}
            className={errors.from_privacy?.message && "error-checkbox"}
          />
          <label htmlFor="privacy">
            Zapoznałem(-am) się z{" "}
            <a href="/privacy-policy">Polityką Prywatności</a> i wyrażam zgodę
            na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi
            na przesłane zapytanie.
          </label>
        </div>
        <p className="form-error-message">{errors.from_privacy?.message}</p>

        {/* --------------- Submit Button -------------- */}
        <div className="form-button">
          <button className="btn-submit" type="submit">
            Wyślij zapytanie
          </button>
        </div>

        {/* --------------- Company Info -------------- */}

        <div className="response-div">
          <ion-icon name="checkmark-outline"></ion-icon>
          <p>Odpowiadamy zwykle w ciągu 24h</p>
        </div>
      </motion.form>
    </>
  );
};

export default ContactForm;
