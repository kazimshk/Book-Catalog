import React from "react";
import firebase from "../../component/firebase/firebase.utils";

const db = firebase.firestore();

const AddBookDetailDB = async (data) => {
  const { book, genre, author } = data;
  const response = await db.collection("Books").add({
    bookName: book,
    Genre: genre,
    Author: author,
  });

  console.log("Hey see, i am here", response);
};

export default AddBookDetailDB;

//.then((snapshot) => {
//   return snapshot.docs.map((doc) => {
//     return doc.data();
//   });
// });
