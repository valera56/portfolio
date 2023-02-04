import { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext";
import "./ProductItem.css";
const ProductItem = (props) => {
  const { codify } = useContext(productContext);

  return (
    <li>
      {codify}
      <img src={props.product.image[1]} alt={props.product.title} />
      <h3>{props.product.title}</h3>
      <div className="price">{props.product.price} сом</div>
      <div>Memory: {props.product.memory}</div>
      <Link to={`/category/${props.product.id}`} className="btn_details">
        Подробнее
      </Link>
    </li>
  );
};
export default ProductItem;
