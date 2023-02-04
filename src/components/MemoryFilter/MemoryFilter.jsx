import { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContext";
import history from "../../helpers/history";

const MemoryFilter = () => {

  const getMemoryValue = () => {
    const search = new URLSearchParams(history.location.search)
    return search.get("memory")
  }
    
  const [memoryValue, setMemoryValue] = useState(getMemoryValue());
  const { memoryFilter } = useContext(productContext);

  useEffect(() => {
    memoryFilter(memoryValue);
  }, [memoryValue]);

  return (
    <div>
      <input defaultChecked={memoryValue === "64"} name="memory" type="radio" onClick={() => setMemoryValue("64")} />
      64 Гб
      <input defaultChecked={memoryValue === "128"} name="memory" type="radio" onClick={() => setMemoryValue("128")} />
      128 Гб
      <input defaultChecked={memoryValue === "512"} name="memory" type="radio" onClick={() => setMemoryValue("512")} />
      512 Гб
      <input
        name="memory"
        type="radio"
        defaultChecked={memoryValue === "1024"}
        onClick={() => setMemoryValue("1024")}
      />
      1024 Гб
    </div>
  );
};
export default MemoryFilter;
