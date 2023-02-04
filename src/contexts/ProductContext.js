import axios from "axios";
import { createContext, useReducer } from "react";
import history from "../helpers/history";

export const productContext = createContext();

const INITIAL_STATE = {
  products: [],
  currentProduct: {},
  limit: 4,
  page: 1,
  totalCount: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        totalCount: action.payload.totalCount,
      };
    case "GET_CURRENT_PRODUCT":
      return { ...state, currentProduct: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getProducts = async () => {
    const { data, headers } = await axios(
      `http://localhost:8000/products${history.location.search}`
    );

    dispatch({
      type: "GET_PRODUCTS",
      payload: {
        data: data,
        totalCount: Number(headers["x-total-count"]),
      },
    });
  };

  const getCurrentProduct = async (id) => {
    const { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: "GET_CURRENT_PRODUCT",
      payload: data,
    });
  };

  const setQuery = (key, value) => {
    const search = new URLSearchParams(history.location.search);
    if (value) {
      search.set(key, value);
    } else {
      search.delete(key);
    }
    history.push(`/category?${search.toString()}`);
  };

  const searchFilter = (value) => {
    setQuery("q", value);
    getProducts();
  };

  const memoryFilter = (value) => {
    setQuery("memory", value);
    getProducts();
  };

  const getPagination = (value) => {
    setQuery("_limit", state.limit);
    setQuery("_page", value);
    getProducts();
  };

  const registerUser = async(obj) => {
    const {data} = await axios.post("http://localhost:8000/register", obj)
    localStorage.setItem("token", data.accessToken)
  }

  const loginUser = async(obj) => {
    const {data} = await axios.post("http://localhost:8000/login", obj)
    localStorage.setItem("token", data.accessToken)

  }
  const setPage = (page) => {

    dispatch({
      type: "SET_PAGE",
      payload: page,
    });
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        currentProduct: state.currentProduct,
        limit: state.limit,
        totalCount: state.totalCount,
        page: state.page,
        getProducts,
        searchFilter,
        getCurrentProduct,
        memoryFilter,
        getPagination,
        registerUser,
        loginUser,
        setPage
      }}
    >
      {children}
    </productContext.Provider>
  );
};
export default ProductContextProvider;
