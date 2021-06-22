import React from "react";
import "./book-name.styles.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookNameComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { bookName } = product;
    return (
      <div key={bookName}>
        <button>{bookName}</button>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default BookNameComponent;
