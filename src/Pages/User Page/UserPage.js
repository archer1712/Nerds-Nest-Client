import React, { useEffect, useState } from "react";
import "./UserPage.css";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import axios from "axios";

const UserPage = () => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await axios.get(
          `https://nerds-nest-server.herokuapp.com/user/${user.email}`
        );
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
  const [borrowed, setBorrowed] = useState([]);
  const [bought, setBought] = useState([]);
  const [rented, setRented] = useState([]);
  const [sold, setSold] = useState([]);
  return (
    <div className="userContainer">
      <div className="userLeft">
        <div className="userpic">
          <div className="userpicCard">
            <div className="userImage">
              <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png"></img>
            </div>
            <div className="userFullName">
              <b>{user.name}</b>
            </div>
          </div>
        </div>
        <div className="userdetails">
          <div className="userdetailsCard">
            <div className="subheading">Email ID</div>
            <div className="useremail">{user.email}</div>
            <Divider variant="middle" />
            <div className="subheading">Address</div>
            <div className="useraddress">{user.address}</div>
            <Divider variant="middle" />
            <div className="subheading">Phone Number</div>
            <div className="userphone">{user.phone}</div>
          </div>
        </div>
      </div>
      <div className="userRight">
        <div className="userRightCard">
          <div className="urSemi">
            <div className="urQuarter">
              <div className="urHeading">Borrowed Books</div>
              <ul>
                <li>Cards on the Table</li>
                <li>Secret of the Nagas</li>
                <li>Memory Man</li>
              </ul>
            </div>
            <Divider variant="middle" orientation="vertical" />
            <div className="urQuarter">
              <div className="urHeading">Lent Books</div>
              <ul>
                <li>Cards on the Table</li>
                <li>Secret of the Nagas</li>
                <li>Memory Man</li>
              </ul>
            </div>
          </div>
          <Divider variant="middle" />
          <div className="urSemi">
            <div className="urQuarter">
              <div className="urHeading">Sold Books</div>
              <ul>
                <li>Cards on the Table</li>
                <li>Secret of the Nagas</li>
                <li>Memory Man</li>
              </ul>
            </div>
            <Divider variant="middle" orientation="vertical" />
            <div className="urQuarter">
              <div className="urHeading">Bought Books</div>
              <ul>
                <li>Cards on the Table</li>
                <li>Secret of the Nagas</li>
                <li>Memory Man</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
