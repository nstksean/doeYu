import Head from 'next/head'
import React from 'react'
import Subscript from '../components/Subscript/Subscript'
import GoodFoods from '../components/GoodFoods/GoodFoods'
import TravelSpots from '../components/TravelSpots/TravelSpots'
import Stacks from '../components/Stacks/Stacks'
import Slides from '../components/Slides/Slides'

import style from '../styles/Home.module.css'

import DemoScenicSpot from '../components/DemoScenicSpot'
import ContextDemo from '../components/ContextDemo'
import { RootContextProvider } from "../context/RootContext";




export default function Home() {
  return (
    <RootContextProvider>
      <div className={style.container}>
        <Head>
          <title>Sean'sDoeYu</title>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>

        <Slides />
        <Stacks />
        <TravelSpots />
        <GoodFoods />
        <Subscript />
        {/* <DemoScenicSpot /> */}
      </div >

    </RootContextProvider>

  )
}
