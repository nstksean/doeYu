import Head from "next/head"
import Link from "next/link"
import React from "react";
import Layout from "../../components/layout"


export default function location() {
    return (
        <>
            <Head>
                <title>Location</title>
            </Head>
            <h1>Location to play! yeaeaeaeaeaeh!</h1>
            <h2 >
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </ >
    )
}