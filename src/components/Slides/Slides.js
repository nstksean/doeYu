import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';
import { RootContext } from '../../context/rustContext';

import style from './slides.module.css'

import jufan from '../../../public/images/fakeSlide/slideM.png'
import slideL from '../../../public/images/fakeSlide/Slide.png'
import slideR from '../../../public/images/fakeSlide/slideR.png'

export default function Slides() {
    const [Tab, setTab] = useState(0)

    const fakeSlide = [
        {
            "ScenicSpotName": '九份老街',
            "DescriptionDetail": '金山九份老街',
            "City": "臺北市",
            "Picture": {
                "PictureUrl1": jufan,
                "PictureDescription1": "大稻埕碼頭_大稻埕碼頭貨櫃市集"
            }
        },
        {
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
            "SrcUpdateTime": "2022-10-14T01:48:54+08:00",
            "UpdateTime": "2022-10-14T02:04:46+08:00"
        },
        {
            "ScenicSpotID": "C1_379000000A_000002",
            "ScenicSpotName": "關渡碼頭",
            "DescriptionDetail": "關渡原名甘豆門，因背倚觀音山和大屯山，面向淡水河，成為一處地勢險要的港口，早年先民由關渡碼頭進入移居臺灣北部開墾，因此關渡的開發甚早，後因兩河(基隆河、淡水河)河口泥沙淤積，水運才逐漸沒落。關渡碼頭位於關渡自然公園及關渡宮旁，每當假日或夜晚均可見遊客駐足關渡碼頭週邊散步休息，亦有許多單車族由八里經關渡大橋前來，或由淡水前來，沿途風光明媚，是一處極佳的賞景地點。",
            "Phone": "886-2-27208889",
            "ZipCode": "112",
            "OpenTime": "開放空間",
            "Picture": {
                "PictureUrl1": "https://www.travel.taipei/image/63313",
                "PictureDescription1": "關渡碼頭"
            },
            "Position": {
                "PositionLon": 121.46192169189453,
                "PositionLat": 25.120929718017578,
                "GeoHash": "wsqqgvju5"
            },
            "Class1": "遊憩類",
            "Level": "非古蹟",
            "ParkingPosition": {},
            "City": "臺北市",
            "SrcUpdateTime": "2022-10-14T01:48:54+08:00",
            "UpdateTime": "2022-10-14T02:04:46+08:00"
        },
        {
            "ScenicSpotID": "C1_379000000A_000003",
            "ScenicSpotName": "大佳碼頭",
            "DescriptionDetail": "大佳碼頭位於圓山基隆河左岸，圓山昔稱圓仔山，是大龍峒地形上的龍頭之地，由於基隆河流經，過去曾是海水進出的湖沼地區，經過開挖發掘的圓山遺址及貝塚，證明當時先民生活的位址。緊依著圓山的劍潭之地，因國姓爺鄭成功插劍水潭取水而得名，日據時期日人曾於今圓山飯店旁忠烈祠西側之地，興建臺灣神社及神宮外苑花園，由此可見其地理位置之重要性。大佳碼頭位於基隆河南岸、大直橋以西約200公尺的地方。這裡是「藍色水路」的遊艇碼頭，從這裡有大佳到圓山、大佳到內湖科學園區單點來回兩個航線。",
            "Phone": "886-2-27208889",
            "ZipCode": "104",
            "OpenTime": "開放空間",
            "Picture": {
                "PictureUrl1": "https://www.travel.taipei/image/63327",
                "PictureDescription1": "大佳碼頭"
            },
            "Position": {
                "PositionLon": 121.53742218017578,
                "PositionLat": 25.07588005065918,
                "GeoHash": "wsqqtsuve"
            },
            "Class1": "遊憩類",
            "Class2": "都會公園類",
            "Level": "非古蹟",
            "ParkingPosition": {},
            "City": "臺北市",
            "SrcUpdateTime": "2022-10-14T01:48:54+08:00",
            "UpdateTime": "2022-10-14T02:04:46+08:00"
        },]


    const targetItem = fakeSlide.at(Tab)


    const rootContextValue = useContext(RootContext);
    const datas = rootContextValue.state.rustAPI_data
    const loading = rootContextValue.state.rustAPI_isLoaded

    return (
        <div className={style.slideGroup}>
            <div className={style.slideBtnPre}>
                <Image
                    src={slideR}
                    alt={fakeSlide.name}

                    layout='fill'
                    objectFit='cover'
                ></Image>
                {/* <svg fill="none" viewBox="0 0 10 14"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#392A93" />
                </svg> */}
            </div>
            <div className={style.slider}>
                <div className={style.slideItem}>
                    <div className={style.bgwrap}>
                        <Image
                            src={targetItem.Picture.PictureUrl1}
                            alt={targetItem.ScenicSpotName}
                            layout="fill"
                            objectFit='cover'

                        ></Image>
                    </div>
                    <div className={style.wordArtcontainer}>

                        <div className={style.title}>{targetItem.ScenicSpotName}</div>
                        <div className={style.city}>{targetItem.City}</div>
                    </div>
                </div>
                <div className={style.slideBtnsContainer}>
                    <input className={style.slideBtns} type='radio' name="slide" value={0}
                        onClick={(e) => setTab(e.target.value)}></input>
                    <input className={style.slideBtns} type='radio' name="slide" value={1}
                        onClick={(e) => setTab(e.target.value)}></input>
                    <input className={style.slideBtns} type='radio' name="slide" value={2}
                        onClick={(e) => setTab(e.target.value)}></input>
                    <input className={style.slideBtns} type='radio' name="slide" value={3}
                        onClick={(e) => setTab(e.target.value)}></input>
                </div>
            </div>
            <div className={style.slideBtnNex}>
                <Image
                    src={slideR}
                    alt={fakeSlide.name}

                    layout="fill"
                    objectFit='cover'
                ></Image>
                {/* <svg fill="none" viewBox="0 0 10 14"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#392A93" />
                </svg> */}
            </div>
        </div >
    );
}