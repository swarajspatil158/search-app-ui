import React from "react";
import SearchBar from "../components/SearchBar";
import LatestTrends from "../components/LatestTrends";
import styles from "./home.module.scss";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className={`${styles.mainBg}`}>
      <img className={`${styles.logo}`} src={logo} alt="logo" />

      <div className={`${styles.flexPosition}`}>
        <SearchBar />
        <LatestTrends />
      </div>
    </div>
  );
};

export default Home;
