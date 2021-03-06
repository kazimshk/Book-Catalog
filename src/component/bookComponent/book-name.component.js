import React from "react";
import "./book-name.styles.scss";
import { useSelector } from "react-redux";
import { selectedBook } from "../../redux/actions/bookAction";
import { useDispatch } from "react-redux";

const BookNameComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  <div>
    <h3>Kazim's books</h3>;
  </div>;
  const renderList = products.map((product) => {
    const { bookName } = product;
    return (
      <div>
        <button
          className="btn-book-name"
          onClick={() => dispatch(selectedBook(product))}
        >
          {bookName}
        </button>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default BookNameComponent;
