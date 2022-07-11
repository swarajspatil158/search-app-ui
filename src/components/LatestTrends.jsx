import React from "react";
import styles from "./LatestTrendsStyle.module.scss";
import trend1 from "../assets/trends/trend1.png";
import trend2 from "../assets/trends/trend2.png";
import trend3 from "../assets/trends/trend3.png";
import trend4 from "../assets/trends/trend4.png";
import trend5 from "../assets/trends/trend5.png";

const LatestTrends = ({ setShowData }) => {
  return (
    <div className={`${styles.drawer}`}>
      <div
        className={`${styles.hide}`}
        onClick={() => {
          setShowData(false);
        }}
      >
        Hide
      </div>
      <div className={`${styles.header}`}>Latest Trends</div>
      <div className={`${styles.trendContainer}`}>
        <div className={`${styles.card}`}>
          <div className={`${styles.cardImg}`}>
            <img src={trend1} alt="trend1" />
          </div>
          <div className={`${styles.cardContent}`}>
            Shirt with puffed sleeves
          </div>
        </div>
        <div className={`${styles.card}`}>
          <div className={`${styles.cardImg}`}>
            <img src={trend2} alt="trend2" />
          </div>
          <div className={`${styles.cardContent}`}>Linen jumpsuit</div>
        </div>
        <div className={`${styles.card}`}>
          <div className={`${styles.cardImg}`}>
            <img src={trend3} alt="trend3" />
          </div>
          <div className={`${styles.cardContent}`}>Linen jumpsuit</div>
        </div>
        <div className={`${styles.card}`}>
          <div className={`${styles.cardImg}`}>
            <img src={trend4} alt="trend4" />
          </div>
          <div className={`${styles.cardContent}`}>Pattern dresses</div>
        </div>
        <div className={`${styles.card}`}>
          <div className={`${styles.cardImg}`}>
            <img src={trend5} alt="trend5" />
          </div>
          <div className={`${styles.cardContent}`}>Leather shirt dress</div>
        </div>
      </div>
      <div className={`${styles.header}`}>Popular suggestions</div>

      <div className={`${styles.ul}`}>
        <div className={`${styles.li}`}>Striped shirt dress</div>
        <div className={`${styles.li}`}>Satin shirts</div>
        <div className={`${styles.li}`}>Denim jumpsuit</div>
        <div className={`${styles.li}`}>Leather dresses</div>
        <div className={`${styles.li}`}>Solid tshirts</div>
      </div>
    </div>
  );
};

export default LatestTrends;
