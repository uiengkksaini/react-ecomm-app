import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";
import CartSummary from "../../components/CartSummary/CartSummary";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./style.css";
import { removeFromCart } from "../../hooks/cartSlice";

const Cart = () => {
  const cartData = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  // remove cart data
  const removeCartData = (id: any) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <PageTitle title="Shopping Cart" />
      <div className="cart-wrapper">
        <div className="cart-left">
          {cartData?.items?.map((cart: any) => (
            <CartCard
              url={cart?.img}
              category={cart?.category}
              title={cart?.title}
              price={cart?.price}
              qty={cart?.qty}
              onClick={() => removeCartData(cart?.id)}
            />
          ))}
        </div>
        <div className="cart-right">
          <CartSummary />
        </div>
      </div>
    </>
  );
};

export default Cart;
