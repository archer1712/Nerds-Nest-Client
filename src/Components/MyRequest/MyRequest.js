import * as React from "react";
import "./MyRequest.css";

const MyRequest = ({ Request }) => {
  const [status, setStatus] = React.useState(2);
  return (
    <div className="singleBook">
      <img src={Request.img} alt="" className="bookImg" />
      <div className="bookInfo">
        <div className="bookTitle">{Request.title}</div>
        <div className="bookDesc">{Request.desc}</div>
        <div>
          <b>ISBN:</b> {Request.isbn}
        </div>
        <div>
          <b>Price:</b> {Request.price}
        </div>
        <div>
          <b>Seller:</b> book.seller.name
        </div>
        <div>
          <b>Seller's Address:</b> book.seller.address
        </div>
        <div className="bookGenres">
          {Request.genres.map((genre) => (
            <span className="bookGenre">{genre}</span>
          ))}
        </div>
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
      {status === 2 && (
        <div className="salerent rejected">Request Rejected</div>
      )}
    </div>
  );
};

export default MyRequest;
