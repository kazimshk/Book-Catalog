import React from "react";
import { useSelector } from "react-redux";

import "./author.detail.styles.scss";

const AuthorDetail = () => {
  const products = useSelector((state) => state.allProducts.products);
  const bookDetail = useSelector((state) => state.productbook);
  const { Author } = bookDetail;
  const author = Author;
  const renderList = products.map(({ bookName, Author }) => {
    if (Author === author) {
      return (
        <div>
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
