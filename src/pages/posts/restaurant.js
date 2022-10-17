import Link from "next/link"
import Head from "next/head"
import DemoRestaurants from "../../api/DemoApi/DemoRestaurant"
import style from '../../styles/Home.module.css'

export default function location() {
    return (
        <>
            <div className={style.container}>

                <Head>
                    <title>Restaurant</title>
                </Head>
                <h1>Good Restaurant</h1>
                <h2><Link href="/">Back to home</Link>
                    <DemoRestaurants />
                </h2>
            </div>
        </>
    )

}