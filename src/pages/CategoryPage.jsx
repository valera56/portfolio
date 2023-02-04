import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import { productContext } from "../contexts/ProductContext";

const CategoryPage = () => {
 
  return <div>
    <ProductList  />
    </div>;
};
export default CategoryPage;
