import React from "react";
import "./BuyBookDisplay.css";

const BuyBookDisplay = ({ book }) => {
  return (
    <div className="singleBook">
      <img src={book.img} className="bookImg" />
      <div className="bookInfo">
        <div className="bookTitle">{book.title}</div>
        <div className="bookDesc">{book.desc}</div>
        <div>
          <b>ISBN:</b> {book.isbn}
        </div>
        <div>
          <b>Price:</b> {book.price}
        </div>
        <div>
          <b>Seller:</b> {book.seller.name}
        </div>
        <div>
          <b>Seller's Address:</b> {book.seller.address}
        </div>
        <div className="bookGenres">
          {book.genres.map((genre) => (
            <span className="bookGenre">{genre}</span>
          ))}
        </div>
      </div>
      <div className="salerent">Up for {book.upFor}</div>
    </div>
  );
};

export default BuyBookDisplay;
