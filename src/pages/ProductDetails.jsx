import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { productContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { getCurrentProduct, currentProduct: product } = useContext(productContext);

  const { id } = useParams();
  useEffect(() => {
    getCurrentProduct(id);
  }, []);

  return (
    <div className="general_block">
      <div className="img1">
        <img src={product.image ? product.image[0] : ""} alt="" />
      </div>
      <div className="info">
        <h2> модель телефона {product.title}</h2>
        <p>
          {" "}
          продажаная Цена {product.price} сом скидка {product.discountInPercent}{" "}
          %{" "}
        </p>
        <p>{product.description}</p>
        <p>обьем памяти {product.memory} ГБ</p>
        <p> автор {product.author}</p>
      </div>

      <div className="info_img">
        <img src={product.url} alt="" />
        <img src={product.url} alt="" />
        <img src={product.url} alt="" />
        <img src={product.url} alt="" />
      </div>
    </div>
  );
};
export default ProductDetails;
