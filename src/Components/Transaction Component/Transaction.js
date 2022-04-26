import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./Transaction.css";

const Transaction = ({ book }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="singleBook">
      <img src={book.img} className="bookImg" />
      <div className="bookInfo">
        <div className="bookTitle">{book.title}</div>
        <div className="bookDesc">{book.desc}</div>
        <div className="details">
          <div className="leftCon">
            <div>Renter's Username : {book.sellerName}</div>
            <div>Renter's Email ID : {book.sellerEmail}</div>
          </div>
          <div className="middleCon">
            <div>Borrower's Username : {book.borrowerName}</div>
            <div>Borrower's Email ID : {book.borrowerEmail}</div>
          </div>
          <div className="rightCon">
            <div>Date of Renting : {book.borrowDate}</div>
            <div>Date of Returning {book.returnDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
