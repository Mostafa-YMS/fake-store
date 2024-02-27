import { useCallback, useEffect, useState } from "react";
import { getProductsService } from "./Services/getProducts";
import "./App.scss";

function App() {
  const [products, setProducts] = useState();

  const fetchProducts = useCallback(async () => {
    const data = await getProductsService();
    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts && fetchProducts();
  }, [fetchProducts]);

  return <div className="main-container"></div>;
}

export default App;
