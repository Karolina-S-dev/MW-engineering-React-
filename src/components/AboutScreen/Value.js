import { valueData } from "../../utils/AboutScreen/value";
import factoryValuePhoto from "../../assets/img/about/factory-value-photo.png"

const Value = () => {
  return (
    <>
      <section className="value-section section-padding">
        <div className="value-content flex-col">
          <div className="value-section-main flex-col">
            <p className="section-label">WARTOŚĆ DLA KLIENTA</p>
            <h2 className="section-title section-title--dark section-title--underline section-title-mb-lg">
              Efekty, które mają znaczenie operacyjne
            </h2>
            <p className="section-description">
              Nasze realizacje są projektowane tak, aby przynosiły wymierne
              korzyści — zarówno na etapie inwestycji, jak i w codziennej
              eksploatacji.
            </p>
          </div>
          <div className="value-cards-container">
            {valueData.map((item) => (
              <div className="value-card flex-col" key={item.id}>
                <div className="value-row flex-col">
                  <img src={item.icon} alt="" />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.content}</p>
              </div>
            ))}
          </div>

          <div className="value-banner">
            <ion-icon name="checkmark-done-circle-outline"></ion-icon>
            <p>
              Efektem jest instalacja, która działa stabilnie, jest uzasadniona
              kosztowo i wpisuje się w realia operacyjne zakładu.
            </p>
          </div>
        </div>
        <div className="value-section-image">
          <img
            loading="lazy"
            src={factoryValuePhoto}
            alt="Rozdzielnice elektryczne w obiekcie przemysłowym"
          />
        </div>
      </section>
    </>
  );
};

export default Value;
