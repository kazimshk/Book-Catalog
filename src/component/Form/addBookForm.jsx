import React, { useState } from "react";
import "./addBookForm.styles.scss";
import AddBookDetailDB from "../firebase/addBookFirebase";

const AddForm = () => {
  const [book, setBook] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

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
        onClick={() => AddBookDetailDB({ book, genre, author })}
      >
        +
      </button>
    </div>
  );
};

export default AddForm;
