import Head from 'next/head'
import React from 'react'
import Subscript from '../components/Subscript/Subscript'
import GoodFoods from '../components/GoodFoods/GoodFoods'
import TravelSpots from '../components/TravelSpots/TravelSpots'
import Stacks from '../components/Stacks/Stacks'

import style from '../styles/Home.module.css'

import DemoScenicSpot from '../api/DemoApi/DemoScenicSpot'
import ContextDemo from '../components/ContextDemo/ContextDemo'
import { RootContextProvider } from "../context/rustContext";
import TryContextDemo from '../components/ContextDemo/TryContextDemo'
import SlideContainer from '../components/Slides/SlideContainer'




export default function Home() {
  return (
    <RootContextProvider>
      <TryContextDemo />
      <div className={style.container}>
        <Head>
          <title>Sean'sDoeYu</title>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>
        {/* <ContextDemo /> */}

        <SlideContainer />
        <Stacks />
        <TravelSpots />
        <GoodFoods />
        <Subscript />
      </div >

    </RootContextProvider>

  )
}
