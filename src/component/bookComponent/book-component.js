import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { bookName, Genre, Author } = product;
    return (
      <div className="four column wide" key={bookName}>
        <Link to={`/product/${bookName}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image"></div>
              <div className="content">
                {<div className="header">{bookName}</div>}
                <div className="meta price">$ {Genre}</div>
                <div className="meta">{Author}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default ProductComponent;
