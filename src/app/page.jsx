"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
// import styles from "./page.module.css";
// import Navbar from "@/components/navbar/Navbar";
// import Hero from "@/components/Hero/Hero";
// import Footer from "@/components/footer/Footer";
import Main from "@/components/Main Page/Main";
import styles from './page.module.css'
import Link from "next/link";

export default function Home({ Component, pageProps }) {
  // console.log(window.location.pathname)
  return (
    <div className={styles.container}>
      <Main></Main>
    </div>
  );
}
