import { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContext";
import history from "../../helpers/history";

const SearchFilter = () => {
  const { searchFilter } = useContext(productContext);

  const getSearchValue = () => {
    const search = new URLSearchParams(history.location.search)
    return search.get("q")
  }
  
  const [searchValue, setSearchValue] = useState(getSearchValue());

  useEffect(() => {
    searchFilter(searchValue)
  }, [searchValue])

  return (
    <input
      value={searchValue}
      type="text"
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};
export default SearchFilter;
