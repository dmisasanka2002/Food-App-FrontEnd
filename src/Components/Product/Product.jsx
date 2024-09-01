import "./Product.css";
import { assets } from "../../assets/frontend_assets/assets";
import CartButton from "../CartButtons/CartButton";

// display a single product
function Product(props) {
  return (
    <>
      <div className="food-img">
        <img src={props.img} alt={props.name} />
        <CartButton id={props.id} />
      </div>
      <div className="food-description">
        <h3>{props.name}</h3>
        <img src={assets.rating_starts} alt="" />
        <h4>{props.des}</h4>
      </div>
      <div className="price">
        <h4>${props.price}</h4>
      </div>
    </>
  );
}

export default Product;
