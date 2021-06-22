import React from "react";
import './addBookForm.styles.scss';
import AddBookDetailDB from '../firebase/addBookFirebase';

  const AddForm = () => {
      return (
          <div className="form-div">
             <form className="form-content">
               <label>Book Name:</label>
               <input type="text" id="bookname" value="Book Name"/>
               <label>Genre:</label>
               <input type="text" id="genre" value="Genre"/>
               <label>Author:</label>
               <input type="text" id="author" value="Author"/>
               
             </form>
             <button class="btn-round" type="submit" onClick={AddBookDetailDB}>+</button>
          </div>
      )
};

export default AddForm;
