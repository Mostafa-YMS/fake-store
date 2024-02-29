import { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProductsService } from "../../Services/getProducts";
import "./card-list.scss";

function getRandomColor() {
  const colors = [
    "#FF8B64",
    "#55C2E6",
    "#FF5E7D",
    "#7335D2",
    "#F1C75B",
    "#4BCF82",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const CardList = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState();

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const data = await getProductsService();
    setProducts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts && fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="card-grid">
          {products?.map((product) => (
            <div key={product?.id} className="grid-item">
              <ProductCard product={product} getRandomColor={getRandomColor} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CardList;
