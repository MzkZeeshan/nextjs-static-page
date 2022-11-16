import React from "react";
import Collapsable from "../Collapsable";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <Collapsable
        title={
          <p className={styles.title}>
            Lorem Ipsum is simply dummy text of the printing
          </p>
        }
        content={
          <p className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        }
      />
      <Collapsable
        title={
          <p className={styles.title}>
            Lorem Ipsum is simply dummy text of the printing
          </p>
        }
        content={
          <p className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        }
      />
      <Collapsable
        title={
          <p className={styles.title}>
            Lorem Ipsum is simply dummy text of the printing
          </p>
        }
        content={
          <p className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        }
      />
      <Collapsable
        title={
          <p className={styles.title}>
            Lorem Ipsum is simply dummy text of the printing
          </p>
        }
        content={
          <p className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        }
      />
      <Collapsable
        title={
          <p className={styles.title}>
            Lorem Ipsum is simply dummy text of the printing
          </p>
        }
        content={
          <p className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        }
      />
    </aside>
  );
}
