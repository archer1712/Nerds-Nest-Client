import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Login.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { login } from "../../Redux Use/Actions/UserActions";
// import baseUrl from "../../../BaseUrl.js"
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alert, setAlert] = useState("");
  const [userID, setUserID] = useState("");
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    var user = {
      // name: name,
      email: email,
      password: password,
      isUserAdmin: false,
      userId: ""
      // phone: "",
      // address: "",
    };
    try {
      const res = await axios.post(
        `http://localhost:8080/user/login/`,
        user
      );
      if (res.status === 200) {
        localStorage.setItem("isUserAdmin", JSON.stringify(res.data.isUserAdmin));
        localStorage.setItem("userID", JSON.stringify(res.data.userID));
        setUserID(res.data.userID);
        user.userId = res.data.userID; 
        const adm = res.data.isUserAdmin;
        if(adm){
          setIsUserAdmin(true);
          user.isUserAdmin = true;
        }
        const phone = res.data.phonenumber;
        const address = res.data.address;
        user.phone = phone;
        user.address = address;
        console.log(user);
        dispatch(login(user));
        navigate("/");
      } else {
        await setAlert(res.data);
        setAlertOpen(true);
      }
    } catch (err) {}
  };

  return (
    <div className="login">
      <div className="navbar">Nerd's Nest</div>
      <div className="divider"></div>
      <div className="formContainer">
        <div className="loginHeading">LOGIN</div>
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
        <form className="loginForm">
          <input
            className="loginInput"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="loginInput"
            placeholder="Email ID"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="loginInput"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="loginButton" onClick={handleLogin}>
            Login!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
