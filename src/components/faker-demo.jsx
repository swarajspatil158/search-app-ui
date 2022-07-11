import React, { useState, useLayoutEffect } from "react";
import "../index.css";
import { faker } from "@faker-js/faker";
import ratings from "../assets/ratings.png";
import styles from "./fakerDemoStyles.module.scss";

export default function FakerDemo() {
  const [list, setList] = useState([]);

  useLayoutEffect(() => {
    let arr = [];
    function createRandomUser() {
      return {
        userId: faker.datatype.uuid(),
        fashion: faker.image.fashion(1234, 2345, true),
        prod: faker.commerce.productName(),
        price: faker.commerce.price(500, 3000, 0, "Rs."),
      };
    }
    Array.from({ length: 30 }).forEach(() => {
      arr.push(createRandomUser());
    });
    setList(arr);
  }, []);
  return (
    <div className={`${styles.drawer}`}>
      <div className={`${styles.trendFlex}`}>
        {list.map((el) => (
          <div key={el.userId} className={`${styles.trend}`}>
            <div className={`${styles.trendA}`}>
              <img
                src={el.fashion}
                width="239px"
                height="325px"
                alt={el.prod}
              />
            </div>
            <div className={`${styles.trendB}`}>{el.prod}</div>
            <div className={`${styles.price}`}>{el.price}</div>
            <img src={ratings} width="153px" height="21px" alt={el.prod} />
          </div>
        ))}
      </div>
    </div>
  );
}
