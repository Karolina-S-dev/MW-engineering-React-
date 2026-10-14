const InputPhone = ({ register, errors }) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="phone">Numer telefonu*</label>
        <input
          type="tel"
          placeholder="Podaj swój numer telefonu"
          id="phone"
          autoComplete="tel"
          {...register("from_phone", {
            required: "To pole jest wymagane",
          })}
          className={errors.from_phone?.message && "error-border"}
        />
        <p className="form-error-message">{errors.from_phone?.message}</p>
      </div>
    </>
  );
};

export default InputPhone;
