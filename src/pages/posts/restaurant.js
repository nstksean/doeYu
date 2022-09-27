import Link from "next/link"
import Head from "next/head"
import DemoRestaurants from "../../components/DemoRestaurant"

export default function location() {
    return (
        <>
            <Head>
                <title>Restaurant</title>
            </Head>
            <h1>Good Restaurant</h1>
            <h2><Link href="/">Back to home</Link>
                <DemoRestaurants />
            </h2>
        </>
    )

}