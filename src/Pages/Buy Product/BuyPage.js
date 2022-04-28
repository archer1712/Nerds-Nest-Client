import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./BuyPage.css";
import { useNavigate } from "react-router-dom";
import BuyBookDisplay from "../../Components/BuyBookDisplay/BuyBookDisplay";
import axios from "axios";

const BuyPage = () => {
  const [BookList, setBookList] = useState([]);
  const [allbooks, setAllbooks] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const BooksFetched = await axios.get(
          "http://localhost:8080/book/get-all-books"
        );
        setBookList(BooksFetched.data);
        setAllbooks(BooksFetched.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBooks();
  }, []);

  const handleChange = async (event) => {
    const querry = event.target.value;
    const filteredBooks = allbooks.filter((Book) => {
      return Book.title.toLowerCase().includes(querry.toLowerCase());
    });
    setBookList(filteredBooks);
    console.log(filteredBooks);
  };

  console.log(typeof BookList);
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
          <BuyBookDisplay book={book} />
        ))}
      </div>
    </div>
  );
};

export default BuyPage;
