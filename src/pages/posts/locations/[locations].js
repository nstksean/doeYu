import { useRouter } from 'next/router'
import Head from "next/head"

import style from '../../../styles/Home.module.css'
import SlideItem from "../../../components/SlideItem/SlideItem";
import { v2_Tourism_Scenic_fakeslide_top4 as fakeSlide } from '../../../data/mockAPI';

const Post = () => {

    // console.log('router:', useRouter().query)
    const router = useRouter()
    const { locations } = router.query
    const slideDatas = fakeSlide?.filter((fakeSlide) => fakeSlide.ScenicSpotID == locations)

    // console.log('router:', restaurants, typeof restaurants)

    return <>
        <div className={style.container}>
            <Head>
                <title>Location</title>
            </Head>
            <SlideItem slideDatas={slideDatas} />
        </div>
    </>

}
export default Post