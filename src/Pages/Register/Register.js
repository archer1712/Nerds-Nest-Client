import React, { useState } from "react";
import "./Register.css";
import "axios";
import axios from "axios";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../Redux Use/Actions/UserActions";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      address.length === 0
    ) {
      setAlert("Fill all Details to register!");
      setAlertOpen(true);
      return;
    }
    if (password.length < 8) {
      setAlert("Password should have atleast 8 Characters!");
      setAlertOpen(true);
      return;
    }
    const newUser = {
      name: name,
      email: email,
      phonenumber: phone,
      address: address,
      password: password,
      borrowed: [],
      bought: [],
      sold: [],
      rented: [],
      isUserAdmin: false,
    };
    try {
      const res = await axios.post(
        `http://localhost:8080/user/register/`,
        newUser
      );
      localStorage.setItem("isUserAdmin", false);
      localStorage.setItem("userID", res.data.userID);
      newUser.userId = res.data.userID;
      dispatch(login(newUser));
      if (res.status === 400) {
        setAlert("You already have an account with this email!");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="navbar">Nerd's Nest</div>
      <div className="divider"></div>
      <div className="formRegister">
        <div className="registerHeading">REGISTER</div>
        <Box sx={{ width: "90%" }}>
          <Collapse in={alertOpen}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlertOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 1 }}
            >
              {alert}
            </Alert>
          </Collapse>
        </Box>

        <form className="registerForm">
          <input
            className="registerInput"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="registerInput"
            placeholder="Email ID"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="registerInput"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <textarea
            className="registerInputAddress"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          <input
            className="registerInput"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="registerButton" onClick={handleRegister}>
            Register My Account!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
