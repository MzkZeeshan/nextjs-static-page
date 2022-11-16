import Head from "next/head";
import Image from "next/image";
import HeroSearch from "../components/HeroSearch";
import MainHome from "../components/MainHome";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSearch/>
      <MainHome/>
    </div>
  );
}
