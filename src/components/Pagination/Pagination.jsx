import { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContext";
import "./Pagination.css"
const Pagination = () => {
  const { limit, totalCount, getPagination, page, setPage } =
    useContext(productContext);

  useEffect(() => {
    getPagination(page);
  }, [page]);

  const pageLength = Math.ceil(totalCount / limit);
  return [...Array(pageLength).keys()].map((el) => (
    <button className={page === el + 1 ? "active" : ""} onClick={() => setPage(el + 1)}>{el + 1}</button>
  ));
};
export default Pagination;
