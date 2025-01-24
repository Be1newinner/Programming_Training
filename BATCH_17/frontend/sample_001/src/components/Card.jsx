import { string } from "prop-types";

function Card({ title, price, description }) {
  return (
    <div className="card_container">
      <p>{title}</p>
      <p>Rs. {price}/-</p>
      <p>{description}</p>
    </div>
  );
}

Card.propTypes = {
  title: string.isRequired,
  price: string.isRequired,
  description: string.isRequired,
};

export default Card;
