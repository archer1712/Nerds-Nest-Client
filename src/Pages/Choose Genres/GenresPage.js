import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Genres.css";
import axios from "axios";

function GenresPage() {
  const [art, setArt] = useState(false);
  const [biography, setBiography] = useState(false);
  const [business, setBusiness] = useState(false);
  const [children, setChildren] = useState(false);
  const [classic, setClassic] = useState(false);
  const [comic, setComic] = useState(false);
  const [crime, setCrime] = useState(false);
  const [fantasy, setFantasy] = useState(false);
  const [fiction, setFiction] = useState(false);
  const [history, setHistory] = useState(false);
  const [horror, setHorror] = useState(false);
  const [music, setMusic] = useState(false);
  const [nonfiction, setNonfiction] = useState(false);
  const [philosophy, setPhilosophy] = useState(false);
  const [psychology, setPsychology] = useState(false);
  const [romance, setRomance] = useState(false);
  const [science, setScience] = useState(false);
  const [suspense, setSuspense] = useState(false);
  const [thriller, setThriller] = useState(false);
  const [travel, setTravel] = useState(false);
  const [genres, setGenres] = useState([]);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handlePutbook = async (e) => {
    e.preventDefault();
    const Book = { ...state, genres };
    try {
      const res = await axios.post(
        "https://nerds-nest-server.herokuapp.com/book/sellrent",
        Book
      );
      console.log(res);
      navigate("/buyborrow");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="genres">
      <div className="navbar">Nerd's Nest</div>
      <div className="divider"></div>
      <div className="genresContainer">
        <div className="genresHeading">
          Choose Atmost 4 Genres of Your Book!
        </div>
        <div className="genresList">
          <div
            className={art ? "genre selected" : "genre"}
            onClick={() => {
              if (!art) {
                setGenres([...genres, "Art"]);
              }
              setArt(true);
              console.log(genres);
            }}
          >
            Art
          </div>
          <div
            className={biography ? "genre selected" : "genre"}
            onClick={() => {
              if (!biography) {
                setGenres([...genres, "Biography"]);
              }
              setBiography(true);
            }}
          >
            Biography
          </div>
          <div
            className={business ? "genre selected" : "genre"}
            onClick={() => {
              if (!business) {
                setGenres([...genres, "Business"]);
              }
              setBusiness(true);
            }}
          >
            Business
          </div>
          <div
            className={children ? "genre selected" : "genre"}
            onClick={() => {
              if (!children) {
                setGenres([...genres, "Children"]);
              }
              setChildren(true);
            }}
          >
            Children
          </div>
          <div
            className={classic ? "genre selected" : "genre"}
            onClick={() => {
              if (!classic) {
                setGenres([...genres, "Classic"]);
              }
              setClassic(true);
            }}
          >
            Classic
          </div>
          <div
            className={comic ? "genre selected" : "genre"}
            onClick={() => {
              if (!comic) {
                setGenres([...genres, "Comic"]);
              }
              setComic(true);
            }}
          >
            Comic
          </div>
          <div
            className={crime ? "genre selected" : "genre"}
            onClick={() => {
              if (!crime) {
                setGenres([...genres, "Crime"]);
              }
              setCrime(true);
            }}
          >
            Crime
          </div>
          <div
            className={fantasy ? "genre selected" : "genre"}
            onClick={() => {
              if (!fantasy) {
                setFantasy([...genres, "Fantasy"]);
              }
              setFantasy(true);
            }}
          >
            Fantasy
          </div>
          <div
            className={fiction ? "genre selected" : "genre"}
            onClick={() => {
              if (!fiction) {
                setGenres([...genres, "Fiction"]);
              }
              setFiction(true);
            }}
          >
            Fiction
          </div>
          <div
            className={history ? "genre selected" : "genre"}
            onClick={() => {
              if (!history) {
                setHistory([...genres, "History"]);
              }
              setHistory(true);
            }}
          >
            History
          </div>
          <div
            className={horror ? "genre selected" : "genre"}
            onClick={() => {
              if (!horror) {
                setGenres([...genres, "Horror"]);
              }
              setHorror(true);
            }}
          >
            Horror
          </div>
          <div
            className={music ? "genre selected" : "genre"}
            onClick={() => {
              if (!music) {
                setGenres([...genres, "Music"]);
              }
              setMusic(true);
            }}
          >
            Music
          </div>
          <div
            className={nonfiction ? "genre selected" : "genre"}
            onClick={() => {
              if (!nonfiction) {
                setGenres([...genres, "Non Fiction"]);
              }
              setNonfiction(true);
            }}
          >
            Non Fiction
          </div>
          <div
            className={philosophy ? "genre selected" : "genre"}
            onClick={() => {
              if (!philosophy) {
                setGenres([...genres, "Philosophy"]);
              }
              setPhilosophy(true);
            }}
          >
            Philosophy
          </div>
          <div
            className={psychology ? "genre selected" : "genre"}
            onClick={() => {
              if (!psychology) {
                setGenres([...genres, "Psychology"]);
              }
              setPsychology(true);
            }}
          >
            Psychology
          </div>
          <div
            className={romance ? "genre selected" : "genre"}
            onClick={() => {
              if (!romance) {
                setGenres([...genres, "Romance"]);
              }
              setRomance(true);
            }}
          >
            Romance
          </div>
          <div
            className={science ? "genre selected" : "genre"}
            onClick={() => {
              if (!science) {
                setGenres([...genres, "Science"]);
              }
              setScience(true);
            }}
          >
            Science
          </div>
          <div
            className={suspense ? "genre selected" : "genre"}
            onClick={() => {
              if (!suspense) {
                setGenres([...genres, "Suspense"]);
              }
              setSuspense(true);
            }}
          >
            Suspense
          </div>
          <div
            className={thriller ? "genre selected" : "genre"}
            onClick={() => {
              if (!thriller) {
                setGenres([...genres, "Thriller"]);
              }
              setThriller(true);
            }}
          >
            Thriller
          </div>
          <div
            className={travel ? "genre selected" : "genre"}
            onClick={() => {
              if (!travel) {
                setGenres([...genres, "Travel"]);
              }
              setTravel(true);
            }}
          >
            Travel
          </div>
        </div>
        <button className="genreButton" onClick={(e) => handlePutbook(e)}>
          Put up my Book!
        </button>
      </div>
    </div>
  );
}

export default GenresPage;
