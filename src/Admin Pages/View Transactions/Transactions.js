import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./Transactions.css";
import { useNavigate } from "react-router-dom";
import Transaction from "../../Components/Transaction Component/Transaction";
import axios from "axios";
import { dummyTrans } from "../../dummyData";

const Transactions = () => {
  const [Transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setTransactions(dummyTrans);
  }, []);

  console.log(typeof BookList);
  return (
    <div className="TrContainer">
      <div className="TrNav">
        <div className="TrSearch">
          <IconButton className="TrSearchButton">
            <SearchIcon />
          </IconButton>
          <input className="TrSearchInput"></input>
        </div>
        <span className="title">Nerd's Nest</span>
        <div className="TrAccountButton">
          <IconButton onClick={() => navigate("/profile")}>
            <AccountCircleIcon className="TrAccountIcon" />
          </IconButton>
        </div>
      </div>
      <Divider sx={{ borderBottomWidth: 3 }} />
      <div className="TrHeading">Transactions of Nerd's Nest</div>
      <div className="TrBooks">
        {Transactions.map((book) => (
          <Transaction book={book} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
