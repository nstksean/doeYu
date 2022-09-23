import Head from 'next/head'
import React, { useContext, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Subscript from '../components/Subscript'
import GoodFoods from '../components/GoodFoods'
import TravelSpots from '../components/TravelSpots'
import Stacks from '../components/Stacks'
import Slides from '../components/Slides'

import style from '../styles/Home.module.css'
import DemoScenicSpot from '../components/DemoScenicSpot'
import { ThemeContext, } from "../context/themeContext";
import ContextDemo from '../components/ContextDemo'



const initThemes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};


export default function Home() {
  const [first, setfirst] = useState(initThemes)
  return (
    <ThemeContext.Provider value={{ first, setfirst }}>
      <ContextDemo />
      <div className={style.container}>
        <Head>
          <title>林宇軒的島遊</title>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>

        <Slides />
        <Stacks />
        <TravelSpots />
        <GoodFoods />
        <Subscript />
        <DemoScenicSpot />
      </div >

    </ThemeContext.Provider>

  )
}
