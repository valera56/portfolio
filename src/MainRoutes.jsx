import { Switch, BrowserRouter, Route } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContext";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetails";
import RegisterPage from "./pages/RegisterPage";

const MainRoutes = () => {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/category/">
            <CategoryPage />
          </Route>
          <Route exact path="/category/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>          
        </Switch>
      </BrowserRouter>
    </ProductContextProvider>
  );
};
export default MainRoutes;
