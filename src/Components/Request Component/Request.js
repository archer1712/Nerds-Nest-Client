import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import "./Request.css";
import "../BuyBookDisplay/BuyBookDisplay.css";

function Request({requestId, book, status, borrower, setIsUpdated}) {
  const [rejectopen, setrejectOpen] = React.useState(false);
  const [acceptopen, setacceptOpen] = React.useState(false);
  const [sendingRequest, setSendingRequest] = React.useState(false);
  const [location, setLocation] = React.useState("");

  const [statusCode, setStatusCode] = React.useState(status);
  const handleDeleteOpen = () => {
    setStatusCode(1);
    setSendingRequest(true);
    setrejectOpen(true);
  };

  const handleDeleteClose = () => {
    setrejectOpen(false);
  };

  const handleacceptOpen = () => {
    setacceptOpen(true);
  };

  const handleacceptClose = () => {
    setLocation("");
    setacceptOpen(false);
  };
  const handleAcceptRequest = () => {
    setStatusCode(1);
    setSendingRequest(true);
  };


  React.useEffect(() =>{
    if(sendingRequest === true){
      const sendAccept = () => {
        const reqData = {
          id: requestId,
          status:statusCode, 
          location: location
        }
        console.log(reqData);
        axios.post(
          `http://localhost:8080/user/request-book`, 
          reqData
        ).then(res => {
          if (res.status === 200) {
            setIsUpdated(book.id);
            setacceptOpen(true);
            handleacceptClose();
          }
        }).catch(err => {
          alert(`Some Error ${err}`)

        });
      }

      sendAccept();
    }
  },[sendingRequest])

  return (
    <div className="singleBook">
      <img src={book.img} className="bookImg" alt={"Alt"} />
      <div className="bookInfo">
        <div className="bookTitle">{book.title}</div>
        <div className="bookDesc">{book.desc}</div>
        <div>
          <b>ISBN:</b> {book.isbn}
        </div>
        <div>
          <b>Borrower's Name:</b> {borrower.name}
        </div>
        <div>
          <b>Borrower's Email Address:</b> {borrower.email}
        </div>
        {/* <div className="bookGenres">
          {book.genres.map((genre) => (
            <span className="bookGenre">{genre}</span>
          ))}
        </div> */}
      </div>
      <div className="salerent accept" onClick={handleacceptOpen}>
        Accept Request
      </div>
      <div className="salerent reject" onClick={handleDeleteOpen}>
        Reject Request
      </div>
      <Dialog open={acceptopen} onClose={handleacceptClose}>
        <DialogTitle>Accept Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To accept the request, please mention the location and price and
            click on the "Accept" button.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Location"
            label="Location"
            type="location"
            fullWidth
            variant="standard"
            onChange={(e) => setLocation(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleacceptClose}>Cancel</Button>
          <Button onClick={handleAcceptRequest}>Accept Request</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={rejectopen}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Request Rejected!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Request Has Been Deleted!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose}>Okay</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Request;
