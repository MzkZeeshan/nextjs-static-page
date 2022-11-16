import React from "react";
import PropertyCard from "../PropertyCard";
import Sidebar from "../Sidebar";
import styles from "./MainHome.module.css";

export default function MainHome() {
  return (
    <div className={styles.MainHomeContainer}>
      <section className={styles.SideBarWrapper}>
        <h1>
          Frequently Asked <span>Questions</span>
        </h1>
        <Sidebar />
      </section>
      <section>
        <div className={styles.PropertyFilter}>
          <span className="material-symbols-outlined">list</span>
          <span className="material-symbols-outlined">space_dashboard</span>
        </div>
        <div className={styles.PropertiesContainer}>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </section>
    </div>
  );
}
