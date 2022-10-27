import { useEffect, useState } from "react";

import {
    v2_Tourism_Restaurant_nightMarket_top20,
    v2_Tourism_Restaurant_chineseFood_top20,
    v2_Tourism_Restaurant_exoticFood_top20,
    v2_Tourism_Restaurant_ice_top20,
    v2_Tourism_Restaurant_gift_top20,
    v2_Tourism_Restaurant_else_top20,
    v2_Tourism_Restaurant_top20
} from '../data/mockAPI'
import ResturantCard from "../components/ResturantCard/ResturantCard";
import TrailAndTitle from "../components/TrailAndTitle/TrailAndTitle";
import style from "../components/ResturantCard/resturantcard.module.css"

export default function ResturantContainer({
    urlQuery,
    pageType,
}) {

    const [datas, setDatas] = useState([])
    const urlSwitch = (urlQuery) => {
        switch (urlQuery) {
            case 'Gift':
                return setDatas(v2_Tourism_Restaurant_gift_top20);
            case 'ChineseFood':
                return setDatas(v2_Tourism_Restaurant_chineseFood_top20);
            case 'NightMarket':

                return setDatas(v2_Tourism_Restaurant_nightMarket_top20);
            case 'ExoticFood':

                return setDatas(v2_Tourism_Restaurant_exoticFood_top20);
            case 'Ice':

                return setDatas(v2_Tourism_Restaurant_ice_top20);
            case 'Other':

                return setDatas(v2_Tourism_Restaurant_else_top20);
            default:
                return setDatas(v2_Tourism_Restaurant_top20);
        }
    }


    useEffect(() => {
        urlSwitch(urlQuery)
    }, [urlQuery, datas])



    return (
        <div className={style.hotSpotGroup}>


            <TrailAndTitle signpostData={datas} />
            <div className={style.hotSpotStackContainer}>
                {
                    datas?.map((data) =>
                        <ResturantCard data={data} key={data?.RestaurantID} />)
                }
            </div>
        </div >
    );
}