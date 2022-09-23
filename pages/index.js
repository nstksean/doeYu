import Head from 'next/head'
import React, { useContext, useReducer } from 'react'
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
const initialState = { count: 0 };

function reducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ContextDemo />
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>

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
