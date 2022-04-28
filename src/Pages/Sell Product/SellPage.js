import React, { useState } from "react";
import "./SellPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios"

const SellPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [isbn, setIsbn] = useState("");
  const selleraddress = useSelector((state) => state.address);
  const sellername = useSelector((state) => state.name);
  const sellphone = useSelector((state) => state.phone);
  const navigate = useNavigate();
  const seller = {
    address: selleraddress,
    phone: sellphone,
    name: sellername,
  };

  const handlePutUp = async (e) => {
    e.preventDefault();
      const Book = {
        title: title,
        author: author,
        desc: desc,
        img: img,
        isbn: isbn,
        price: price,
        seller: seller,
      };
    
    navigate("/genres", { state: Book });
  };

  return (
    <div className="sellContainer">
      <div className="navbar">Nerd's Nest</div>
      <div className="divider"></div>
      <div className="sellFormContainer">
        <h2 className="sellTitle">
          Don't Need a Book Anymore? You're at the right place!
        </h2>
        <form className="sellForm">
          <div className="titleauthor">
            <input
              className="sellInput halfInput"
              placeholder="Title of the Book"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <input
              className="sellInput halfInput"
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
          </div>
          <textarea
            className="sellInput sellTextarea"
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <input
            className="sellInput"
            placeholder="Paste the link to it's image here"
            onChange={(e) => setImg(e.target.value)}
          ></input>
          <div className="titleauthor">
            <input
              className="sellInput halfInput"
              placeholder="ISBN"
              onChange={(e) => setIsbn(e.target.value)}
            ></input>
            {/* <input
              className="sellInput halfInput"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            ></input> */}
          </div>
        </form>
        <button className="sellButton" onClick={handlePutUp}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SellPage;
