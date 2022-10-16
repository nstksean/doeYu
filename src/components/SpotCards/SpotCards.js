import style from "./spotcards.module.css"
import Image from "next/image";
import { useEffect, useState } from "react";
import { getScenicSpotUrl } from '../../api/apiClient'
import { citys } from "../../data/CityItems";

export default function SpotCards({ urlQuery, pageType }) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [querycity, setquerycity] = useState('')

    const query = ({
        $top: '12',
        $format: 'JSON'
    })
    const scenicSpotUrl = getScenicSpotUrl(querycity, query)


    useEffect(() => {
        setquerycity(urlQuery)

    })
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(scenicSpotUrl)
            // .then(  res => res.json() )
            .then(
                (res) => {
                    return res.json()
                }
            )

            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, [querycity])

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
                    {pageType.key === 'scenic' ? "旅遊景點" : "美食餐廳"}

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
                    Array.from(items).map((item) =>
                        <div className={style.hotSpotStackItem}>
                            <div className={style.ItemPhoto}>
                                <Image
                                    src={item.Picture.PictureUrl1}
                                    alt={item.ScenicSpotName}
                                    width={320}
                                    height={220}
                                    layout="responsive"
                                />
                            </div>
                            <div
                                className={style.spotTitle}>
                                {item.ScenicSpotName}
                            </div>
                            <div className={style.spotCity}>
                                {item.City}
                            </div>
                        </div>)
                }
            </div>
        </div >
    );
}