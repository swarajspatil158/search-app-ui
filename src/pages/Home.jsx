import React from "react";
import SearchBar from "../components/SearchBar";
import LatestTrends from "../components/LatestTrends";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={`${styles.mainBg}`}>
      <SearchBar />
      <LatestTrends />
    </div>
  );
};

export default Home;
