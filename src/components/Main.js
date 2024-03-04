import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../css/main.module.css";

import searchIcon from "../images/magnifying-glass.png";
import BookCard from "./bookCard";

const MainComponent = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBook = () => {
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBtCwRP112HaLRtZRfHnyvO3auOCgL_Blo&maxResults=40`
      )
      .then((res) => setBookData(res.data.items))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    console.log(bookData);
  }, [bookData]); // Trigger when bookData changes

  return (
    <>
      <div className={styles.header}>
        
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="enter book name"
            className={styles.SearchField}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className={styles.searchspan}>
            <img src={searchIcon} alt="icon" className={styles.searchicon} />
          </span>
          <button className={styles.btn} onClick={searchBook}>
            Submit
          </button>
        </div>
      </div>
      
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <div  className={styles.container}>
        
        <BookCard bookData={bookData} />
        </div>
      )}
    </>
  );
};

export default MainComponent;
