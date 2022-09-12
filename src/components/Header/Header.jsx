import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import {BsCart} from "react-icons/bs"

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

      {/* barra de busqueda */}
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

      {/* seccion derecha del header */}
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

        <Link to="/history" className={styles.historySection}>
          <span className={styles.accountLine_1}>Returns</span>
          <span className={styles.accountLine_2}>& Orders</span>
        </Link>

        <Link to='/cart' className={styles.cartSection}>
          <div className={styles.cartCountContainer}>
            <span className={styles.cartCount}>0</span>
            <span className={styles.cartIcon}>
              <BsCart size={35}/>
            </span>
          </div>
          <div className={styles.cartTextContainer}>
            <span className={styles.cartText}>Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
