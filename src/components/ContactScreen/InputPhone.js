import axios from "axios";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";

const InputPhone = ({ register, errors, control, setValue }) => {
  const [localization, setLocalization] = useState(null);

  // detection of user localization
  useEffect(() => {
    const fetchLocalization = async () => {
      try {
        const responseLocalization = await axios.get("https://ipapi.co/json/");
        const detectedCountry = responseLocalization.data.country.toLowerCase();
        setLocalization(detectedCountry);
        const detectedCallingCode =
          responseLocalization.data.country_calling_code;
        setValue("from_calling_codes", detectedCallingCode);
      } catch (error) {
        setLocalization("pl");
        setValue("from_calling_codes", "+48");
      }
    };
    fetchLocalization();
  }, [setValue]);

  return (
    <>
      <div className="form-group">
        <label htmlFor="phone">Numer telefonu*</label>

        {/* React-Phone-Input-2 (biblioteka)*/}
        <div className="flex-row">
          <Controller
            name="from_calling_codes"
            control={control}
            render={({ field }) => (
              <PhoneInput
                regions={"europe"}
                country={localization}
                enableSearch={true}
                value={field.value}
                onChange={(phone) => field.onChange(`+${phone}`)}
                placeholder=""
              />
            )}
          />

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
        </div>
        <p className="form-error-message">{errors.from_phone?.message}</p>
      </div>
    </>
  );
};

export default InputPhone;
