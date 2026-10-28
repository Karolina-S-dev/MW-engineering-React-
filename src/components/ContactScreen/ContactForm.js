import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import InputPhone from "./InputPhone";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation("contact");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    resetField,
    setValue,
    control,
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

  const submitFunction = async (data) => {
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        },
      );

      resetField("from_full_name");
      resetField("from_company");
      resetField("from_email");
      resetField("from_phone");
      resetField("from_position");
      resetField("from_message");
      resetField("from_privacy");

      toast.success(t("toast.success"), {
        position: "top-center",
        className: "toast-success",
      });
    } catch (error) {
      toast.error(t("toast.error"), {
        position: "top-center",
        className: "toast-error",
      });
    }
  };

  const errorFunction = () => {
    toast.error(t("toast.validation"), {
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
        <div className="flex-col form-contact-data-wrapper">
        <div className="form-contact-data">
          <div className="form-ion-icon-and-data-row">
            <ion-icon name="location"></ion-icon>
            <h3>MW-Engineering Mariusz Wąchocki</h3>
          </div>
          <div className="form-menu-text">
            <p>ul. Spacerowa 10H/2 </p>
            <p>26-052 Zagrody, {t("form.country")}</p>
          </div>
        </div>
        <div className="form-ion-icon-and-data-row">
          <ion-icon name="call"></ion-icon>
          <p>
            tel. <a href="tel:+48695413382">+48 695 413 382</a>
          </p>
        </div>
        </div>
        <div className="form-group-row">
          {/* --------------- Input Name -------------- */}
          <div className="form-group">
            <label htmlFor="name">* {t("form.fullName")}</label>
            <input
              type="text"
              placeholder={t("form.namePlaceholder")}
              id="name"
              autoComplete="name"
              {...register("from_full_name", {
                required: t("validation.required"),
                validate: (value) =>
                  value.trim().length >= 2 || t("validation.fullName"),
              })}
              className={errors.from_full_name?.message && "error-border"}
            />
            <p className="form-error-message">
              {errors.from_full_name?.message}
            </p>
          </div>
          {/* --------------- Input Company -------------- */}
          <div className="form-group">
            <label htmlFor="company">* {t("form.company")}</label>
            <input
              type="text"
              placeholder={t("form.companyPlaceholder")}
              id="company"
              autoComplete="organization"
              {...register("from_company", {
                required: t("validation.required"),
              })}
              className={errors.from_company?.message && "error-border"}
            />
            <p className="form-error-message">{errors.from_company?.message}</p>
          </div>
        </div>
        <div className="form-group-row">
          {/* --------------- Input E-mail -------------- */}
          <div className="form-group">
            <label htmlFor="email">* {t("form.email")}</label>
            <input
              type="email"
              placeholder={t("form.emailPlaceholder")}
              id="email"
              autoComplete="email"
              {...register("from_email", {
                required: t("validation.required"),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t("validation.email"),
                },
              })}
              className={errors.from_email?.message && "error-border"}
            />
            <p className="form-error-message">{errors.from_email?.message}</p>
          </div>

          {/* --------------- Input Position -------------- */}
          <div className="form-group">
            <label htmlFor="position">{t("form.position")}</label>
            <input
              type="text"
              placeholder={t("form.positionPlaceholder")}
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
          <label htmlFor="message">* {t("form.message")}</label>
          <textarea
            id="message"
            placeholder={t("form.messagePlaceholder")}
            {...register("from_message", {
              required: t("validation.required"),
              validate: (value) =>
                value.trim().length > 0 || t("validation.message"),
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
              required: t("validation.required"),
            })}
            className={errors.from_privacy?.message && "error-checkbox"}
          />
          <label htmlFor="privacy">
            {t("form.privacyBefore")}{" "}
            <a href="/privacy-policy">{t("form.privacyLink")}</a>{" "}
            {t("form.privacyAfter")}
          </label>
        </div>
        <p className="form-error-message">{errors.from_privacy?.message}</p>

        {/* --------------- Submit Button -------------- */}
        <div className="form-button">
          <button className="btn-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? t("form.submitting") : t("form.submit")}
          </button>
        </div>

        {/* --------------- Company Info -------------- */}
        <div className="response-div">
          <ion-icon name="checkmark-outline"></ion-icon>
          <p>{t("form.responseTime")}</p>
        </div>

        {/* --------------- Documentation Info -------------- */}
        <a
          href="mailto:biuro@mw-engineering.pl"
          className="form-documentation-info flex-row"
        >
          <ion-icon name="attach-outline"></ion-icon>
          <div className="flex-col">
            <p className="form-documentation-info-desc">
              {t("documentation.description")}
            </p>
            <div className="flex-row form-documentation-info-button">
              <p>{t("documentation.button")}</p>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </a>
      </motion.form>
    </>
  );
};

export default ContactForm;
