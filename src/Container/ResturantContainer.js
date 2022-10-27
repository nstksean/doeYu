import { useEffect, useState } from "react";

import { nightMarket20, chineseFood20, exoticFood20, ice20, gift20, else20, restaurant50 } from '../data/mockAPI'
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
                return setDatas(gift20);
            case 'ChineseFood':
                return setDatas(chineseFood20);
            case 'NightMarket':

                return setDatas(nightMarket20);
            case 'ExoticFood':

                return setDatas(exoticFood20);
            case 'Ice':

                return setDatas(ice20);
            case 'Other':

                return setDatas(else20);
            default:
                return setDatas(else20);
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
                    datas?.slice(0, 12).map((data) =>
                        <ResturantCard foodDataToRender={data} key={data?.RestaurantID} />)
                }
            </div>
        </div >
    );
}