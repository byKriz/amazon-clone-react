import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

export const Header = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.logoContainer}>
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
            <IoMdArrowDropdown className={styles.arrowIcon} />
          </div>

          <div className={styles.navFill}>
            <div className={styles.navSearchFill}>
              <input
                type="text"
                name="field-keywords"
                className={styles.navSearchInput}
              />
            </div>
          </div>
          <div className={styles.navRightSearch}>
            <GoSearch className={styles.navRightSearchIcon} size={20} />
          </div>
        </form>
      </div>

      <div className={styles.navRight}>
        <Link to="/account" className={styles.accountSection}>
          <span className={styles.accountLine_1}>Hello, sign in</span>
          <span className={styles.accountLine_2}>
            Account & List
            <span>
              <IoMdArrowDropdown className={styles.arrowIcon} />
            </span>
          </span>
        </Link>

        <a href="">orders history</a>
        <a href="">buy cart</a>
      </div>
    </div>
  );
};
