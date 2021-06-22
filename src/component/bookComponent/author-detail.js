import React from "react";
import { useSelector } from "react-redux";
import "./author.detail.styles.scss";

const AuthorDetail = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { bookName, Author } = product;
    if (Author === "Robert") {
      return (
        <div key={Author}>
          <div className="content-detail">
            <ul>
              <li>{bookName}</li>
            </ul>
          </div>
        </div>
      );
    }
    return;
  });
  return <>{renderList}</>;
};

export default AuthorDetail;
