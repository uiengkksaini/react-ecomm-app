import { AiOutlineCloseCircle } from "react-icons/ai";
import { Iprops } from "./type";
import "./style.css";
const CartCard = ({ url, category, title, price, qty, onClick }: Iprops) => {
  return (
    <div className="cart-card">
      <div className="cart-card-img">
        <img src={url} alt={title} />
      </div>
      <div className="cart-card-content">
        <div className="cart-card-title">
          {category}
          <br />
          {title}
        </div>
        <div className="cart-card-qty">
          <span className="increment">-</span>
          <input type="text" className="cart-card-value" value={qty} />
          <span className="decrement">+</span>
        </div>
        <div className="cart-card-price">{price}</div>
        <div className="cart-card-close" onClick={onClick}>
          <AiOutlineCloseCircle />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
