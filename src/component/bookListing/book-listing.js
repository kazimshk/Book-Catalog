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
  const bookDetail = useSelector((state) => state.productbook);
  const { Author } = bookDetail;

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
  let authorDetail;
  if (Author === undefined) {
    authorDetail = false;
  } else {
    authorDetail = true;
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="div-title">
        <h1>Ninja's Book Catalog</h1>
      </div>
      <div className="base">
        <div className="flexbox-item left-panel div-style">
          <BookNameComponent />
        </div>
        {authorDetail && (
          <div className="flexbox-item right-panel">
            <BookDetail />
            <h3 className="h3-all-books">All Books by this Author:</h3>
            <AuthorDetail />
          </div>
        )}
      </div>
      <AddForm />
    </>
  );
};
export default BookListing;
