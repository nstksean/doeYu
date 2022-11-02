import { useEffect, useState } from "react";

import { getScenicSpotUrl } from '../api/apiClient'

import ScenicCard from "../components/ScenicCard/ScenicCard";
import style from "../components/ScenicCard/sceniccard.module.css"
import NoFound from "../components/Nofound/NoFound";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";

export default function ScenicContainer({ urlQuery, pageType }) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([{
        "ScenicSpotID": "C1_379000000A_000001",
        "ScenicSpotName": "大稻埕碼頭_大稻埕碼頭貨櫃市集",
        "DescriptionDetail": "大稻埕原是平埔族的居住地，因萬華（艋舺）同安人發生激烈的械鬥，造成族人移至大稻埕定居，開始大稻埕淡水河旁商店和房屋的興建，淡水港開放後，大稻埕在劉銘傳的治理下成為臺北城最繁華的物資集散中心，當中以茶葉、布料為主要貿易交易，當時的延平北路及貴德街一帶便是商業活動的重心，也讓大稻埕早年的歷史多采多姿、令人回味。",
        "Phone": "886-2-27208889",
        "ZipCode": "103",
        "OpenTime": "平常日以團體預約包船為主，例假日行駛固定航次，請洽詢各船公司。強烈季風、漲退潮水位差影響航行及靠泊安全，當日實際航班得由現場公告或網站預告調整。",
        "Picture": {
            "PictureUrl1": "https://www.travel.taipei/image/182690",
            "PictureDescription1": "大稻埕碼頭_大稻埕碼頭貨櫃市集"
        },
        "Position": {
            "PositionLon": 121.50760650634766,
            "PositionLat": 25.056400299072266,
            "GeoHash": "wsqqscrhh"
        },
        "Class1": "遊憩類",
        "Level": "非古蹟",
        "ParkingPosition": {},
        "City": "臺北市",
        "SrcUpdateTime": "2022-10-25T01:49:06+08:00",
        "UpdateTime": "2022-10-25T02:34:46+08:00"
    }]);
    const [querycity, setquerycity] = useState('')
    const [signpostData, setSignpostData] = useState([{
        "ScenicSpotID": "C1_379000000A_000001",
        "ScenicSpotName": "大稻埕碼頭_大稻埕碼頭貨櫃市集",
        "DescriptionDetail": "大稻埕原是平埔族的居住地，因萬華（艋舺）同安人發生激烈的械鬥，造成族人移至大稻埕定居，開始大稻埕淡水河旁商店和房屋的興建，淡水港開放後，大稻埕在劉銘傳的治理下成為臺北城最繁華的物資集散中心，當中以茶葉、布料為主要貿易交易，當時的延平北路及貴德街一帶便是商業活動的重心，也讓大稻埕早年的歷史多采多姿、令人回味。",
        "Phone": "886-2-27208889",
        "ZipCode": "103",
        "OpenTime": "平常日以團體預約包船為主，例假日行駛固定航次，請洽詢各船公司。強烈季風、漲退潮水位差影響航行及靠泊安全，當日實際航班得由現場公告或網站預告調整。",
        "Picture": {
            "PictureUrl1": "https://www.travel.taipei/image/182690",
            "PictureDescription1": "大稻埕碼頭_大稻埕碼頭貨櫃市集"
        },
        "Position": {
            "PositionLon": 121.50760650634766,
            "PositionLat": 25.056400299072266,
            "GeoHash": "wsqqscrhh"
        },
        "Class1": "遊憩類",
        "Level": "非古蹟",
        "ParkingPosition": {},
        "City": "臺北市",
        "SrcUpdateTime": "2022-10-25T01:49:06+08:00",
        "UpdateTime": "2022-10-25T02:34:46+08:00"
    }])

    const query = ({
        $top: '12',
        $format: 'JSON'
    })
    const scenicSpotUrl = getScenicSpotUrl(querycity, query)


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
                    setDatas(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            ).then((result) => {
                setSignpostData(result)
            })

    }, [querycity])

    useEffect(() => {
        setquerycity(urlQuery)
    })




    return (
        <div className={style.hotSpotGroup}>

            <Breadcrumb signpostData={datas} urlQuery={urlQuery} />
            {datas?.message != undefined ?
                (<NoFound data={datas} />)
                : ('')}

            <div className={style.hotSpotStackContainer}>
                {datas?.message === undefined ? (Array.from(datas).map((data) => <ScenicCard data={data} key={data?.ScenicSpotID} />
                ))
                    : ('')
                }
            </div>
        </div >
    );
}