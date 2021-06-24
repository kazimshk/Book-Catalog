import firebase from "../../component/firebase/firebase.utils";

const db = firebase.firestore();

const AddBookDetailDB = (data) => {
  const { book, genre, author } = data;
  return db.collection("Books").add({
    bookName: book,
    Genre: genre,
    Author: author,
  });
};

export default AddBookDetailDB;
