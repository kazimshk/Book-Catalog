import React from "react";
import { useSelector } from "react-redux";
import "./book-detail.styles.scss";

const BookDetail = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { bookName, Genre, Author } = product;
    if (bookName === "Harry potter") {
      return (
        <div key={bookName}>
          <div className="content-detail">
            <h2>{bookName}</h2>
            <h3>{Genre}</h3>
            <h3>{Author}</h3>
          </div>
        </div>
      );
    }
  });
  return <>{renderList}</>;
};

export default BookDetail;
