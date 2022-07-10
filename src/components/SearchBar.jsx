import React from "react";
import styles from "./searchBarStyle.module.scss";
import searchIcon from "../assets/searchIcon.png";
const SearchBar = () => {
  return (
    <div>
      <div className={`${styles.search}`}>
        <input
          type="text"
          className={`${styles.searchTerm}`}
          placeholder="Search"
        />
        <button type="submit" className={`${styles.searchButton}`}>
          <img
            src={searchIcon}
            className={`${styles.searchButtonImg}`}
            alt="search-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
