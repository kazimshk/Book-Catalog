import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./book-detail.styles.scss";

import { resetBook } from "../../redux/actions/bookAction";

const BookDetail = () => {
  const bookDetail = useSelector((state) => state.productbook);
  const dispatch = useDispatch();
  const { bookName, Genre, Author } = bookDetail;
  return (
    <div key={bookName}>
      <div className="div-close">
        <button
          className="close"
          onClick={() => {
            dispatch(resetBook());
          }}
        >
          close
        </button>
      </div>
      <div className="content-detail">
        <h2>{bookName}</h2>
        <h3>{Genre}</h3>
        <h3>{Author}</h3>
      </div>
    </div>
  );
};

export default BookDetail;
