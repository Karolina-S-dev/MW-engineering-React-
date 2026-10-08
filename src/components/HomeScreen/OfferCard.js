const OfferCard = ({ item }) => {
  return (
    <div className="home-offer-card flex-col">
      <div className="home-offer-card-icon-header-row">
        <img src={item.image} alt="" loading="lazy" />
        <h3>{item.title}</h3>
      </div>
      <p>{item.content}</p>
    </div>
  );
};

export default OfferCard;
