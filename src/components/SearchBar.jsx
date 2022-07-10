import React from "react";
import styles from "./searchBarStyle.module.scss";
import searchIcon from "../assets/searchIcon.png";
import { Link } from "react-router-dom";

const SearchBar = ({ setShowData, showData }) => {
  return (
    <div>
      <div className={`${styles.search}`}>
        <input
          onClick={() => {
            setShowData(true);
          }}
          type="text"
          className={`${styles.searchTerm}`}
          placeholder="Search"
        />
        <button type="submit" className={`${styles.searchButton}`}>
          <Link to={`/results`}>
            <img
              src={searchIcon}
              className={`${styles.searchButtonImg}`}
              alt="search-icon"
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
