import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./book-name.styles.scss";

import { selectedBook } from "../../redux/actions/bookAction";

const BookNameComponent = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.allProducts.products);

  const renderList = books.map((book) => {
    const { bookName } = book;
    return (
      <div>
        <button
          className="btn-book-name"
          onClick={() => dispatch(selectedBook(book))}
        >
          {bookName}
        </button>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default BookNameComponent;
