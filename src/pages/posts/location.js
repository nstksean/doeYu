import Head from "next/head"
import Link from "next/link"
import React from "react";
import DemoHotel from "../../components/DemoHotel";


export default function location() {
    return (
        <>
            <Head>
                <title>Location</title>
            </Head>
            <h1>Nice Hotel </h1>
            <h2 >
                <Link href="/">
                    <a>Back to home</a>
                </Link>
                <DemoHotel />
                <ContextDemo />
            </h2>
        </ >
    )
}