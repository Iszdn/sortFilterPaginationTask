import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const ProductsProps = ({colButton, image, category, name, price, brand }) => {
  return (
    <div className={`cards col-6 col-lg-4 col-md-4 ${colButton}`}>
      <div className="image-product">
        <img src={image} alt="" />
      </div>
      <div>
      <h3 className="category-prod">{category}</h3>
      <h3 className="name-prod">{name}</h3>
      <div className="price-prod">${price}</div>
      <p className="brand-prod">{brand}</p></div>
    </div>
  );
};

export default ProductsProps;
