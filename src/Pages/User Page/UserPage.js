import * as React from "react";
import "./UserPage.css";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import axios from "axios";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const UserPage = () => {
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await axios.get(`baseUrl/user/${user.email}`);
        setBorrowed(currentUser.borrowed);
        setBought(currentUser.bought);
        setRented(currentUser.rented);
        setSold(currentUser.sold);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  const user = useSelector((state) => state);
  console.log(user);
  const [borrowed, setBorrowed] = React.useState([]);
  const [bought, setBought] = React.useState([]);
  const [rented, setRented] = React.useState([]);
  const [sold, setSold] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [pwdopen, setPwdopen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePasswordOpen = () => {
    setPwdopen(true);
  };
  const handlePasswordClose = () => {
    setPwdopen(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  return (
    <div className="userContainer">
      <div className="userDetails">
        <div className="userDetailsLeft">
          <div className="userImage">
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png"></img>
          </div>
          <div className="userName">{user.name}</div>
        </div>
        {console.log(user)}
        <div className="userDetailsRight">
          <div className="userEmailID">Email ID : {user.email}</div>
          <div xlassName="userAddress">Address : {user.address}</div>
          <div className="userPhone">Wallet Balance : Rs. 100</div>
          <div className="userButtons">
            <div className="deleteAccount">
              <button className="deleteAccountButton" onClick={handleClickOpen}>
                Delete My Account
              </button>
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
                  Delete Account?
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    By deleting your account, you will loose all the previous
                    transactions and data in it. Are you sure you want to delete
                    your account?
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button autoFocus onClick={handleClose}>
                    Delete My Account
                  </Button>
                </DialogActions>
              </BootstrapDialog>
              <button
                className="changePasswordButton"
                onClick={handlePasswordOpen}
              >
                Change Password
              </button>
              <button className="logoutButton">Log Out</button>
              <BootstrapDialog
                onClose={handlePasswordClose}
                aria-labelledby="customized-dialog-title"
                open={pwdopen}
              >
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handlePasswordClose}
                >
                  Change Password
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    For changing password, please type in your new Password
                    here:
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="Location"
                    label="New Password"
                    type="password"
                    fullWidth
                    variant="standard"
                  />
                  <Button autoFocus onClick={handlePasswordClose}>
                    Cancel
                  </Button>
                  <Button autoFocus onClick={handlePasswordClose}>
                    Change Password
                  </Button>
                </DialogActions>
              </BootstrapDialog>
            </div>
          </div>
        </div>
      </div>
      <div className="bookDetails">
        <div className="borrowed">
          <div className="heading">Borrowed Books</div>
          <div className="listOfBooks">
            <ui>
              <li>Cards on Table</li>
              <li>Cards on Table</li>
              <li>Cards on Table</li>
              <li>Cards on Table</li>
              <li>Cards on Table</li>
              <li>Cards on Table</li>
            </ui>
          </div>
        </div>
        <div className="lent">
          <div className="heading">Lent Books</div>
          <div className="listOfBooks">
            <ui>
              <li>Cards on Table</li>
              <li>Cards on Table</li>
              <li>Cards on Table</li>
              <li>Cards on Table</li>
              <li>Cards on Table</li>
              <li>Cards on Table</li>
            </ui>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default UserPage;
