import style from "./foodcards.module.css"
import Image from "next/image";
import { useEffect, useState } from "react";
import { getScenicSpotUrl } from '../../api/apiClient'
import { citys } from "../../data/CityItems";
import { nightMarket20, chineseFood20, exoticFood20, ice20, gift20, else20, restaurant50 } from '../../data/mockAPI'

export default function FoodCards({
    urlQuery,
    pageType,
}) {

    const [datas, setDatas] = useState([])

    console.log(nightMarket20, chineseFood20, exoticFood20, ice20, gift20, else20, restaurant50)

    const urlSwitch = (urlQuery) => {
        switch (urlQuery) {
            case 'Gift':
                return setDatas(ice20);
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


            <div className={style.signpost}>
                <div className={style.home}>首頁</div>
                <div className={style.morethan}>
                    <svg fill="none" viewBox="0 0 10 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#A9D3FF" />
                    </svg>
                </div>
                <div className={style.spotorfood}>
                    美食餐廳
                </div>
                <div className={style.morethan}>
                    <svg fill="none" viewBox="0 0 10 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#A9D3FF" />
                    </svg>
                </div>
                <div className={style.cityorkind}>
                    {urlQuery}
                </div>
            </div>

            <div className={style.title}>
                {pageType.key === 'scenic' ? "旅遊景點" : "美食餐廳"}
            </div>

            <div className={style.hotSpotStackContainer}>

                {
                    datas?.slice(0, 12).map((data) =>
                        <div className={style.hotSpotStackItem}>
                            <div className={style.ItemPhoto}>
                                <Image
                                    src={data.Picture.PictureUrl1}
                                    alt={data.RestaurantName}
                                    width={320}
                                    height={220}
                                    layout="responsive"
                                />
                            </div>
                            <div
                                className={style.spotTitle}>
                                {data.RestaurantName}
                            </div>
                            <div className={style.spotCity}>
                                {data.Class}
                            </div>
                        </div>)
                }
            </div>
        </div >
    );
}