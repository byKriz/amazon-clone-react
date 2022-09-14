import React from "react";
import styles from "./CardUi.module.scss";

export const CardUi = ({ title = "Product 1", image }) => {
  return (
    <div className={styles.cardUi}>
      <div className={styles.cardContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.cardBody}>
          <a href="/">
            <div>
              <img src={image} alt="" />
            </div>
          </a>
        </div>

        <div className={styles.cardFooter}>
          <a href="">Shop Now</a>
        </div>
      </div>
    </div>
  );
};
