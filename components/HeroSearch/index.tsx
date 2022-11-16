import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSearch() {
  return (
    <div className={styles.HeroSearch}>
      <h1>Find Liens in one step</h1>
      <div>
        <span className={styles.searchInputContainer}>
          <span className={`${styles.searchIcon} material-symbols-outlined`}>
            search
          </span>
          <input type={"search"} placeholder="search by address, town, state" />
        </span>
        <span className={styles.searchBtnContainer}>
          <button>Find Results</button>
          <span className={`${styles.arrowIcon} material-symbols-outlined`}>
            arrow_forward
          </span>
        </span>
      </div>
    </div>
  );
}
