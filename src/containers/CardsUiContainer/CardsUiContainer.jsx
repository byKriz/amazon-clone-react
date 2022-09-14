import React from "react";
import styles from "./CardsUiContainer.module.scss";

export const CardsUiContainer = ({ children }) => {
  return <div className={styles.cardsContainer}>{children}</div>;
};
