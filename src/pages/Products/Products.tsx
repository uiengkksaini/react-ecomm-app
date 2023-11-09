import { useDispatch } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";
import { Iprops } from "./type";
import { addToCart } from "../../hooks/cartSlice";
const products = [
  {
    id: 1,
    category: "Camera",
    title: "Camera-Samsung",
    img: "images/camera.jpg",
    price: 3000,
    qty: 1,
  },
  {
    id: 2,
    category: "Coke",
    title: "Coke-Pepsico",
    img: "images/coke.jpg",
    price: 199,
    qty: 1,
  },
  {
    id: 3,
    category: "Sunglass",
    title: "Sunglasses- Protect your eyes",
    img: "images/goggles.jpg",
    price: 249,
    qty: 1,
  },
  {
    id: 4,
    category: "Headphone",
    title: "Headphone-Realme",
    img: "images/headphone.jpg",
    price: 4985,
    qty: 1,
  },
  {
    id: 5,
    category: "Lipstick",
    title: "Lipstick- Nykaa",
    img: "images/lipstick.jpg",
    price: 399,
    qty: 1,
  },
];

const Products = () => {
  const dispatch=useDispatch();
  const addItemToCart=(product: any)=>{
    dispatch(addToCart(product))
  }
  return (
    <div className="products-wrapper">
      <PageTitle title="Products" />
      <div className="products">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            url={product.img}
            title={product.title}
            price={product.price}
            category={product.category}
            onClick={() => addItemToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
