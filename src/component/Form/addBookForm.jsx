import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./addBookForm.styles.scss";

import AddBookDetailDB from "../firebase/addBookFirebase";
import { getBooks } from "../../redux/actions/bookAction";

const AddForm = () => {
  const [book, setBook] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="form-div">
      <form className="form-content">
        <label>Book Name:</label>
        <input
          type="text"
          id="bookname"
          value={book}
          onChange={(event) => setBook(event.target.value)}
        />
        <label>Genre:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
        <label>Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <div></div>
      </form>
      <button
        class="btn-round"
        type="submit"
        onClick={() => {
          AddBookDetailDB({ book, genre, author }).then(() => {
            setBook("");
            setAuthor("");
            setGenre("");
            setTimeout(() => dispatch(getBooks()), 7000);
          });
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddForm;
