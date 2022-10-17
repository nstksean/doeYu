import Head from "next/head"
import Link from "next/link"
import React from "react";
import SlideItem from "../../components/SlideItem/SlideItem";
import { RootContextProvider } from "../../context/rustContext";
import style from '../../styles/Home.module.css'


export default function location() {
    return (
        <>
            <RootContextProvider  >
                <div className={style.container}>
                    <Head>
                        <title>Location</title>
                    </Head>
                    <SlideItem />
                </div>
            </RootContextProvider>
        </ >


    )
}