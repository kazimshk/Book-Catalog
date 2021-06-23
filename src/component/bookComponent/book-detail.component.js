import React from "react";
import { useSelector } from "react-redux";
import "./book-detail.styles.scss";
import { selectedBook } from "../../redux/actions/bookAction";
import { useDispatch } from "react-redux";

const BookDetail = () => {
  const bookDetail = useSelector((state) => state.productbook);
  const dispatch = useDispatch();
  const { bookName, Genre, Author } = bookDetail;
  return (
    <div key={bookName}>
      <div className="content-detail">
        <h2>{bookName}</h2>
        <h3>{Genre}</h3>
        <h3>{Author}</h3>
      </div>
    </div>
  );
};

export default BookDetail;
