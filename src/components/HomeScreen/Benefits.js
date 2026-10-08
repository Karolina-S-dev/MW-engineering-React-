import industrialEngineeringPhoto from "../../assets/img/home/industrial-engineering-photo.png"

const Benefits = () => {
  return (
    <section className="section-dark">
      <div className="home-benefits-container">
        <div className="home-benefits-content">
          <h2>Podejście dopasowane do realiów przemysłu</h2>
          <ul className="home-benefits-container-list">
            <li>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Dostosowanie do pracy zakładu</span>
            </li>
            <li>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Wykorzystanie istniejącej infrastruktury</span>
            </li>
            <li>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Bezpieczeństwo i zgodność z normami</span>
            </li>
            <li>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span>Rozwiązania dopasowane do realnych warunków pracy</span>
            </li>
          </ul>
        </div>
        <div className="home-benefits-image">
          <img
            loading="lazy"
            src={industrialEngineeringPhoto}
            alt="Inżynierowie analizujący dokumentację przy rozdzielnicach elektrycznych"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
