import React from "react";
import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterA}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>TAX <span>LIENS</span></div>
          <p className={styles.tagline}>
            Our vision is to provide convenience and help increase your sales
            business
          </p>
        </div>
        <div className={styles.links}>
          <ul>
            <h3>About</h3>
            <Link href={"/"}>How it works?</Link>
            <Link href={"/"}>Featured</Link>
            <Link href={"/"}>Partnership</Link>
            <Link href={"/"}>Business Relation</Link>
          </ul>
          <ul>
            <h3>Community</h3>
            <Link href={"/"}>Events</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>Podcasts</Link>
            <Link href={"/"}>Invite a Friend</Link>
          </ul>
          <ul>
            <h3>Social</h3>
            <Link href={"/"}>Discord</Link>
            <Link href={"/"}>Instagram</Link>
            <Link href={"/"}>Twitter</Link>
            <Link href={"/"}>Facebook</Link>
          </ul>
        </div>
      </div>
      <div className={styles.FooterB}>
        <span>&copy; Tax Liens. All Rights Reserved</span>
        <span>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Terms & Condition</Link>
        </span>
      </div>
    </footer>
  );
}
