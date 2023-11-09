import { Link } from "react-router-dom";
import "./style.css";
import { Iprops } from "./type";
const ProductCard = ({ url, title, category, price, onClick }: Iprops) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={url ? url : "images/image-not-found.jpg"} alt={title} />
      </div>
      <div className="product-content">
        <Link to={""} className="product-title">
          {title}
        </Link>
        <div className="product-category">{category}</div>
        <div className="product-price">{price} ₹</div>
      </div>
      <div className="product-action">
        <button className="product-btn" onClick={onClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
