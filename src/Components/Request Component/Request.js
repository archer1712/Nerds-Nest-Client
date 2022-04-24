import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import "./Request.css";
import "../BuyBookDisplay/BuyBookDisplay.css";

function Request({ request }) {
  const [rejectopen, setrejectOpen] = React.useState(false);
  const [acceptopen, setacceptOpen] = React.useState(false);

  const handleDeleteOpen = () => {
    setrejectOpen(true);
  };

  const handleDeleteClose = () => {
    setrejectOpen(false);
  };

  const handleacceptOpen = () => {
    setacceptOpen(true);
  };

  const handleacceptClose = () => {
    setacceptOpen(false);
  };

  return (
    <div className="singleBook">
      <img src={request.img} className="bookImg" />
      <div className="bookInfo">
        <div className="bookTitle">{request.title}</div>
        <div className="bookDesc">{request.desc}</div>
        <div>
          <b>ISBN:</b> {request.isbn}
        </div>
        <div>
          <b>Borrower's Name:</b> {request.borrowerName}
        </div>
        <div>
          <b>Borrower's Email Address:</b> {request.borrowerEmail}
        </div>
        <div className="bookGenres">
          {request.genres.map((genre) => (
            <span className="bookGenre">{genre}</span>
          ))}
        </div>
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
          />
          <TextField
            autoFocus
            margin="dense"
            id="Price"
            label="Price"
            type="price"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleacceptClose}>Cancel</Button>
          <Button onClick={handleacceptClose}>Accept Request</Button>
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
