import React from "react";
import "./Requests.css";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Request from "../../Components/Request Component/Request";
import { Books } from "../../dummyData";

function Requests() {
  const [requests, setRequests] = React.useState([]);
  const navigate = useNavigate();

  const [dataRecieved, setDataRecieved] = React.useState(false);

  React.useEffect(() => {
    const fetchRequests = async () => {
      const userID = JSON.parse(localStorage.getItem("userID"))
      try {
        const BooksFetched = await axios.get(
          `http://localhost:8080/user/get-all-lending-requests?userid=${userID}` 
        );
        console.log(BooksFetched.data);

        if(BooksFetched.status === 200){
          setRequests(BooksFetched.data);
          setDataRecieved(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchRequests();
  }, []);


  return (
    <div className="requestContainer">
      <div className="buyNav">
        <div className="buySearch">
          <IconButton className="buySearchButton">
            <SearchIcon />
          </IconButton>
          <input className="buySearchInput"></input>
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
      {dataRecieved ? <div className="requestlist">
        {requests.map((req) => (
          <Request book={req.book} status = {req.status} borrower = {req.borrower} />
        ))}
      </div> : "Loading Data"}
    </div>
  );
}

export default Requests;
