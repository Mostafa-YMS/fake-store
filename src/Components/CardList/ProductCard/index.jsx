import { SlOptions } from "react-icons/sl";
import "./card.scss";

const ProductCard = ({ product, getRandomColor }) => {
  return (
    <div className="product" style={{ backgroundColor: getRandomColor() }}>
      <div className="content">
        <div className="left">
          <p className="category">{product?.category}</p>
          <p className="price">{product?.price}$</p>
          <p className="title">{product.title}</p>
        </div>

        <div className="right">
          <SlOptions className="options" />
          <div className="in-store">
            <p>inStore</p>
            <p>{product?.rating?.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
