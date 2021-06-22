import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setBooks } from "../../redux/actions/bookAction";
import firebase from "../../component/firebase/firebase.utils";
import BookNameComponent from "../bookComponent/book-name.component";
import BookDetail from "../bookComponent/book-detail.component";
import AuthorDetail from "../bookComponent/author-detail";
import AddForm from "../Form/addBookForm";
import "./book-listing.styles.scss";
const BookListing = () => {
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();
  const db = firebase.firestore();

  const fetchProducts = async () => {
    const response = await db
      .collection("Books")
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => {
          console.log(doc.data());
          return doc.data();
        });
      });
    console.log("console result", response);
    dispatch(setBooks(response));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="base">
        <div className="left-panel div-style">
          <BookNameComponent />
        </div>
        <div className="right-panel">
          <BookDetail />
          <h3>All Books by this Author:</h3>
          <AuthorDetail />
        </div>
      </div>
      <AddForm />
    </>
  );
};
export default BookListing;
