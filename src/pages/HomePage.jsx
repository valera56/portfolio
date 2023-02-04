import { useContext } from "react";
import { Link } from "react-router-dom";
import MyComponent from "../components/MyComponent";
import { productContext } from "../contexts/ProductContext";

const HomePage = () => {
  const { codify } = useContext(productContext);
  return (
    <div>
      {codify}
      <MyComponent>
        
        <div>
          dsada
        </div>
        dasds
        <h3>31</h3>
      </MyComponent>
      <Link to="/category">переход на category page</Link>

    </div>
  );
};
export default HomePage;
