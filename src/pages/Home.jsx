import React from "react";
import SearchBar from "../components/SearchBar";
import LatestTrends from "../components/LatestTrends";
import styles from "./home.module.scss";
import logo from "../assets/logo.png";
import { useState } from "react";

const Home = () => {
  const [showData, setShowData] = useState(false);

  return (
    <div className={`${styles.mainBg}`}>
      <img className={`${styles.logo}`} src={logo} alt="logo" />

      <div className={`${styles.flexPosition}`}>
        <SearchBar setShowData={setShowData} />
        {showData && (
          <LatestTrends
            setShowData={setShowData}
            onClick={() => {
              setShowData(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
