import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { GoSearch } from "react-icons/go";
import {IoMdArrowDropdown} from "react-icons/io"

export const Header = () => {
  return (
    <div className={styles.navBar}>
      <div>
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.navSearch}>
        <form action="" method="GET" className={styles.navForm}>
          <div className={styles.navLeft}>
            <span className={styles.navSearchLabel}>All</span>
            <IoMdArrowDropdown className={styles.navSearchLabelIcon}/>
          </div>

          <div className={styles.navFill}>
            <input
              type="text"
              name="field-keywords"
              className={styles.navInput}
            />
          </div>

          <div className={styles.navRight}>
            <GoSearch />
          </div>
        </form>
      </div>
      <div>
        right nav
        <div>
          nav tools
          <a href="">account</a>
          <a href="">orders history</a>
          <a href="">buy cart</a>
        </div>
      </div>
    </div>
  );
};
