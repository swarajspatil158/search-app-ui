import React from "react";
import SearchBar from "../components/SearchBar";
import styles from "./home.module.scss";
import tweakStyles from "./searchResults.module.scss";
import logo from "../assets/logo.png";
import FakerDemo from "../components/faker-demo";

const SearchResults = () => {
  return (
    <div className={`${tweakStyles.resultPage}`}>
      <div className={`${tweakStyles.searchAlign}`}>
        <SearchBar className={`${tweakStyles.tweakBorder}`} />
      </div>
      <img className={`${styles.logo}`} src={logo} alt="logo" />
      <FakerDemo />
    </div>
  );
};

export default SearchResults;
