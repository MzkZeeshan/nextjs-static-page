import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span>
        <h2>Tax Lien</h2>
      </span>
      <span className={styles.links}>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Dashboard</Link>
        <Link href={"/"}>Help Center</Link>
        <Link href={"/"}>Contact Us</Link>
        <Link href={"/"}>About Us</Link>
        <span className={styles.profileBtn}>
          <Image
            src={"https://source.unsplash.com/60x60/?profile"}
            width={"30"}
            height={"30"}
            alt=""
          />
          <h3>Hadeed U.</h3>
        </span>
      </span>
    </nav>
  );
}
