import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./BuyBookDisplay.css";

const BuyBookDisplay = ({ book }) => {
  const [open, setOpen] = React.useState(false);
  const [sendingRequest, setSendingRequest] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  React.useEffect(() => {
    if(sendingRequest === true){
      const sendRequest =  () => {
        

          const reqData = {
            bookid: book.id,
            lenderid: book.lender,
            borrowerid: JSON.parse(localStorage.getItem("userID")),
            status:0
          }

          console.log(reqData);
            axios.post(
            `http://localhost:8080/user/request-book`, 
            reqData
          ).then(res => {
            if (res.status === 200) {
                setMsg(res.data.message)
                setOpen(true);
            }
          }).catch(err => {
            setMsg(err.response.data.message)
            setOpen(true);
          });
          // console.log(res);
      }

      // console.log(book);
      sendRequest();
      setSendingRequest(false);
    }
    
  }, [sendingRequest])
  

  const handleClickOpen = () => {
    // setOpen(true);
    setSendingRequest(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="singleBook">
      <img src={book.img} className="bookImg" alt="Here is an img"/>
      <div className="bookInfo">
        <div className="bookTitle">{book.title}</div>
        <div className="bookDesc">{book.desc}</div>
        <div>
          <b>ISBN:</b> {book.isbn}
        </div>
        <div>
          <b>Lender:</b> {book.lenderName || ""}
        </div>
        <div>
          <b>Seller's Email Address:</b> {book.lenderEmail || ""}
        </div>
        {/* <div className="bookGenres">
          {book.genres.map((genre) => (
            <span className="bookGenre">{genre}</span>
          ))}
        </div> */}
      </div>
      <div className="salerent" onClick={handleClickOpen}>
        Request For Borrowing
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Request Sent!"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BuyBookDisplay;
