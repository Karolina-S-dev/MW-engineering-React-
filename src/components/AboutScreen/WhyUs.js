import { whyUsData } from "../../utils/AboutScreen/whyUs";

const WhyUs = () => {
  return (
    <>
      <section className="why-us-section section-padding">
        {/* <!-- LEFT-COLUMN --> */}
        <div className="why-us-intro flex-col">
          <p className="section-label">DLACZEGO MY</p>
          <h2 className="section-title section-title--dark section-title-mb-lg section-title--underline">
            Podejście dopasowane do realiów pracy przemysłu
          </h2>
          <p className="section-description">
            Modernizacja w działającym zakładzie to zawsze ryzyko operacyjne.
            Dlatego skupiamy się na rozwiązaniach, które są przewidywalne,
            bezpieczne i uzasadnione biznesowo.
          </p>
          <div className="why-us-experience-row">
            <ion-icon name="people-outline"></ion-icon>
            <p>
              Doświadczenie w branżach: chemicznej, spożywczej, automotive,
              lotniczej i ciężkiej.
            </p>
          </div>
        </div>
        {/* <!-- RIGHT-COLUMN --> */}
        <div className="why-us-flex">
          {whyUsData.map((data) => (
            <div className="why-card flex-col" key={data.id}>
              <img src={data.image} alt="" />
              <h3>{data.title}</h3>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyUs;
