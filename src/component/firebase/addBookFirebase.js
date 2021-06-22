import React from "react";
import firebase from "../../component/firebase/firebase.utils";



  const db = firebase.firestore();

  const AddBookDetailDB = async () => {
    const response = await db
      .collection("Books")
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => {
         
          return doc.data();
        });
      });
    console.log("Hey see, i am here", response);
  };


export default AddBookDetailDB;
