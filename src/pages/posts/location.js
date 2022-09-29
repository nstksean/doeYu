import Head from "next/head"
import Link from "next/link"
import React from "react";
import DemoHotel from "../../components/DemoHotel";
import { RootContextProvider } from "../../context/rustContext";



export default function location() {
    return (
        <>
            <RootContextProvider >
                <Head>
                    <title>Location</title>
                </Head>
                {/* 
                <h1>Nice Hotel </h1>
                <h2 >
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                    <DemoHotel />

                </h2> */}
            </RootContextProvider>
        </ >


    )
}