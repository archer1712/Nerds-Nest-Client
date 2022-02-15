import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./MainOptions.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";

const MainOptions = () => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.name);
  return (
    <div className="containerMainOptions">
      <Navbar />
      <div className="greeting">Hi there {username}! Let's Get Started!</div>
      <div className="mainOptions">
        <button className="button" onClick={(e) => navigate("/buyborrow")}>
          Buy a Book
        </button>
        <button className="button" onClick={(e) => navigate("/sellrent")}>
          Sell a Book
        </button>
        <button className="button" onClick={(e) => navigate("/buyborrow")}>
          Borrow a Book
        </button>
        <button className="button" onClick={(e) => navigate("/sellrent")}>
          Lend a Book
        </button>
        <div className="iconContainer">
          <IconButton onClick={(e) => navigate("/profile")}>
            <AccountCircleIcon style={{ fontSize: 62 }} className="icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default MainOptions;