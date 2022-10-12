import Head from "next/head"
import Link from "next/link"
import React from "react";
import SpotCards from "../../components/SpotCards/SpotCards";
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
                    <SpotCards />
                </div>
            </RootContextProvider>
        </ >


    )
}