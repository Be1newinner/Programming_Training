function Card({ title, price, description }) {
  return (
    <div className="card_container">
      <p>{title}</p>
      <p>Rs. {price}/-</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;
