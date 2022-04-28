import * as React from "react";
import "./MyRequest.css";

const MyRequest = ({ book, status }) => {
  // const [status, setStatus] = React.useState(2);

  React.useEffect(() => {
    console.log(status);
  })
  return (
    <div className="singleBook">
      <img src={book.img} alt="" className="bookImg" />
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
          <b>Seller:</b> {book.lenderName}
        </div>
        <div>
          <b>Seller's Address:</b> {book.lenderAddress}
        </div>
        {/* <div className="bookGenres">
          {book.genres.map((genre) => (
            <span className="bookGenre">{genre}</span>
          ))}
        </div> */}
      </div>
      {/* <div className="salerent">
        {status === 0
          ? "Request Pending"
          : status === 1
          ? "Request Approved"
          : "Request Rejected"}
      </div> */}
      {status === 0 && <div className="salerent pending">Request Pending</div>}
      {status === 1 && (
        <div className="salerent approved">Request Approved</div>
      )}
      {status === -1 && (
        <div className="salerent rejected">Request Rejected</div>
      )}
    </div>
  );
};

export default MyRequest;
