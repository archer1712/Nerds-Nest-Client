import React, { useEffect, useState } from "react";
import "./MyReqs.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import BuyBookDisplay from "../../Components/BuyBookDisplay/BuyBookDisplay";
import axios from "axios";
import { Books } from "../../dummyData";
import MyRequest from "../../Components/MyRequest/MyRequest";

const MyReqs = () => {
  const [BookList, setBookList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setBookList(Books);
  }, []);

  const handleChange = async (event) => {
    const querry = event.target.value;
    const filteredBooks = Books.filter((Book) => {
      return Book.title.toLowerCase().includes(querry.toLowerCase());
    });
    setBookList(filteredBooks);
    console.log(filteredBooks);
  };

  return (
    <div className="buyContainer">
      <div className="buyNav">
        <div className="buySearch">
          <IconButton className="buySearchButton">
            <SearchIcon />
          </IconButton>
          <input
            className="buySearchInput"
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <span className="title">Nerd's Nest</span>
        <div className="buyAccountButton">
          <IconButton onClick={() => navigate("/profile")}>
            <AccountCircleIcon className="buyAccountIcon" />
          </IconButton>
        </div>
      </div>
      <Divider sx={{ borderBottomWidth: 3 }} />
      <div className="buyBooks">
        {BookList.map((book) => (
          <MyRequest Request={book} />
        ))}
      </div>
    </div>
  );
};

export default MyReqs;
