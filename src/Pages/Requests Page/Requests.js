import React from "react";
import "./Requests.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Request from "../../Components/Request Component/Request";
import { Books } from "../../dummyData";

function Requests() {
  const [requests, setRequests] = React.useState(Books);
  const [allreqs, setAllreqs] = React.useState(Books);
  const navigate = useNavigate();

  const handleChange = async (event) => {
    const querry = event.target.value;
    const filteredBooks = allreqs.filter((Book) => {
      return Book.title.toLowerCase().includes(querry.toLowerCase());
    });
    setRequests(filteredBooks);
    console.log(filteredBooks);
  };

  return (
    <div className="requestContainer">
      <div className="buyNav">
        <div className="buySearch">
          <IconButton className="buySearchButton">
            <SearchIcon />
          </IconButton>
          <input
            className="buySearchInput"
            onChange={(event) => {
              handleChange(event);
            }}
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
      <div className="requestHeading">Requests</div>
      <div className="requestlist">
        {requests.map((book) => (
          <Request request={book} />
        ))}
      </div>
    </div>
  );
}

export default Requests;
