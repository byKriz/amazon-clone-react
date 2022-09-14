import React from "react";
import styles from "./CardUi.module.scss";

export const CardUi = ({ title = "Product 1", image, footerText="Shop Now" }) => {
  return (
    <div className={styles.cardUi}>
      <div className={styles.cardContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.cardBody}>
          <a href="/" className={styles.aLink}>
            <div className={styles.aSection}>
              <img src={image} alt="" className={styles.cardImge}/>
            </div>
          </a>
        </div>

        <div className={styles.cardFooter}>
          <a href="/" className={styles.aLinkCardFooter}>{footerText}</a>
        </div>
      </div>
    </div>
  );
};
