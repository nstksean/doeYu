import Head from 'next/head'
import React from 'react'

import style from '../styles/Home.module.css'

import { RootContextProvider } from '../context/rustContext'
import SlideContainer from '../Container/SlideContainer'
import TravelSpotContainer from '../Container/TravelSpotContainer'
import GoodFoodContainer from '../Container/GoodFoodContainer'
import Subscript from '../components/Subscript/Subscript'
import CityStack from '../components/CityStacks/CityStack'

export default function Home() {
    return (
        <RootContextProvider>
            {/* <TryContextDemo /> */}
            <div className={style.container}>
                <Head>
                    <title>Sean'sDoeYu</title>
                    <link rel="icon" href="../public/favicon.ico" />
                </Head>

                <SlideContainer />
                <CityStack />
                <TravelSpotContainer />
                <GoodFoodContainer />
                <Subscript />
            </div>
        </RootContextProvider>
    )
}
