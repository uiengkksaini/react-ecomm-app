import "./style.css";
import { FaArrowRightLong } from "react-icons/fa6";
const CartSummary = () => {
  return (
    <div className="cart-summary">
      <div className="summary">Summary</div>
      <div className="cart-summary-items-price">
        <div className="cart-summary-items">ITEMS 3</div>
        <div className="cart-summary-price">132.0</div>
      </div>
      <div className="cart-summary-coupon">
        <div className="coupon-text">COUPON CODE?</div>
        <div className="coupon-code-wrapper">
          <input
            type="text"
            placeholder="Enter your code"
            className="coupon-code"
          />
          <div className="coupon-code-btn">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
      <div className="total-price-wrapper">
        <div className="total-price">TOTAL PRICE</div>
        <div className="total-price-value">2323.00</div>
      </div>
      <button className="checkout-button">CHECKOUT</button>
    </div>
  );
};

export default CartSummary;
