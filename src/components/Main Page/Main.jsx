import React from 'react'
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/footer/Footer";
import styles from './main.module.css'


// export const metadata = {
//   title: "Jeet Wasti",
// };


const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hidden}>
        <Navbar></Navbar>
      </div>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}

export default Main