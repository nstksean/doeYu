import Head from 'next/head'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Subscript from '../components/Subscript'
import GoodFoods from '../components/GoodFoods'
import TravelSpots from '../components/TravelSpots'
import Stacks from '../components/Stacks'
import Slides from '../components/Slides'

import style from '../styles/Home.module.css'
import DemoScenicSpot from '../components/DemoScenicSpot'
import ContextDemo from '../components/ContextDemo'
import { RootContextProvider } from "../context/RootContext";




export default function Home() {
  return (
    <RootContextProvider>
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

    </RootContextProvider>

  )
}
