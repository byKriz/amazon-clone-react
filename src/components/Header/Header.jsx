import React from "react";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <nav>
      <div>Logo</div>
      <div>Location</div>
      <div>Search Bar</div>
      <div>
        right nav
        <div>
          nav tools
          <a href="">account</a>
          <a href="">orders history</a>
          <a href="">buy cart</a>
        </div>
      </div>
    </nav>
  );
};
