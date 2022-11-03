import { useState, useEffect } from 'react'
import style from './slideitem.module.css'
import { fakeSlide } from '../../data/mockAPI'
import Image from 'next/image'

export default function SlideItem({ slideDatas }) {
    const [datas, setdatas] = useState([
        {
            ScenicSpotID: 'C1_379000000A_000013',
            ScenicSpotName: '大屯山系_忠義山親山步道',
            DescriptionDetail:
                '忠義山又叫小八里分山，石階攀登、林蔭密佈是其最大特色，慢步攀登、享受林間涼爽，是極佳的有氧運動場地。忠義山親山步道位於臺北藝術大學後山的忠義山親山步道，沿途林木密集，路徑遮陽率在百分之九十以上，是一條原始幽靜的步道，對怕晒的山友來說，這裡是最佳之選的路徑；只不過沿途多處石階，尤其是登頂前盡是上坡石階，須不錯的腳力和體力才能勝任，呼吸的節奏更應適時調整，否則會走得氣喘吁吁、上氣接不到下氣。有氧健行　美麗一身忠義山親山步道離市區近，所以不論晨昏，附近居民常會來這裡練腳力和體力；到了假日，就算是陽光熾熱的天氣，步道上上下下的人潮始終沒斷過。登頂前盡是上坡步階，雖然路程不算長，隨著石階攀升，呼吸也變得急促，尤其後段直挺挺的步道最是需要好好調勻呼吸，不然免不了要氣喘吁吁。前一小段路還能拐到岔路旁、在行天宮後院步道的涼亭歇歇腳，後半段若要小歇，接近指標之前的石階護欄較寬敞，可以就地取材充當便椅。看到綠色欄杆出現，山頂就不遠了。到了頂上寬廣的平台，不但有長排座椅好休息，如果想趁全身帶氧量正充沛之際，好好活絡一下全身細胞，就踏上樹蔭下的卵石步道，直接從腳底喚醒平日久怠不興的循環系統。那麼，接下來要挑戰陡峭山徑就能得心應手啦。走一趟忠義山步道，像進入天然的有氧教室，讓全身「缺氧」的細胞Up Up，而且這回不須繳會員費，也不怕店家突然歇業，只要邁開腳步上山去就成了。自然樂章　健康一生沿捷運軌道旁的綠色步道往行天宮走去，眼前就是山川美景，還沒走到登山口就見青翠山色躍然於前，欣喜雀躍之情油然而生，腳步也跟著輕盈了起來。拾級而上，沿路常見高大的樹木，松林、刺竹等茂盛樹林擋住了大半刺目的陽光，此起彼落的蟲鳴鳥叫生氣蓬勃，像是用高亢聲調歡迎來訪的客人。途中瞥見北投市景，登上山頂視野更好，可遠望觀音山和淡水河。聽說在忠義山看觀音山，山形最美，可得把握好好瞧一瞧。山頂高原平坦寬闊，有時引來小白鷺駐足停歇，和眼前一片貧脊的紅土層相映成趣。才「豁然開朗」，轉入下坡路段，景觀全然不同。林間綠蔭更密，幾乎見不到樹林外的風景，也更顯得遺世獨立。尤其由寬敞的空間乍然轉換至狹窄的小徑，初入步徑可能會納悶前方可還有道路，或是以為走錯路徑。在路旁輔助繩索的引導之下，中途來到一處遠眺的好據點。停駐岩塊上，更可好好欣賞觀音山和淡水河，此時山水美景不偏不倚，直立於正前方。走出林蔭小徑，眼前視野又逐步開展。最後一段路程途中，整個關渡平原一覽無遺，捷運北投機房、醒目的焚化爐高塔，一一清晰分明映入眼簾，為今天的行程畫個完美的句點。',
            Phone: '886-2-27593001',
            ZipCode: '112',
            OpenTime: '開放空間',
            Picture: {
                PictureUrl1: 'https://www.travel.taipei/image/63420',
                PictureDescription1: '大屯山系_忠義山親山步道',
            },
            Position: {
                PositionLon: 121.47840118408203,
                PositionLat: 25.137279510498047,
                GeoHash: 'wsqrh21g7',
            },
            Class1: '自然風景類',
            Class2: '體育健身類',
            Level: '非古蹟',
            ParkingPosition: {},
            City: '臺北市',
            SrcUpdateTime: '2022-10-14T01:48:54+08:00',
            UpdateTime: '2022-10-14T02:04:46+08:00',
        },
    ])
    useEffect(() => {
        setdatas(slideDatas)
    }, [slideDatas])

    return (
        <div className={style.slideItem}>
            {datas.map((data) => (
                <>
                    <div className={style.signpost}>
                        <div className={style.home}>首頁</div>
                        <div className={style.morethan}>
                            <svg
                                fill="none"
                                viewBox="0 0 10 14"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z"
                                    fill="#A9D3FF"
                                />
                            </svg>
                        </div>
                        <div className={style.spotorfood}>旅遊景點</div>
                        <div className={style.morethan}>
                            <svg
                                fill="none"
                                viewBox="0 0 10 14"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z"
                                    fill="#A9D3FF"
                                />
                            </svg>
                        </div>
                        <div className={style.cityorkind}>
                            {datas?.[0].City}
                        </div>
                        <div className={style.morethan}>
                            <svg
                                fill="none"
                                viewBox="0 0 10 14"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z"
                                    fill="#A9D3FF"
                                />
                            </svg>
                        </div>
                        <div className={style.cityorkind}>
                            {datas?.[0].ScenicSpotName}
                        </div>
                    </div>

                    <div className={style.secnicCard}>
                        <div className={style.secnicCardKnows}>
                            <div className={style.secnicCardPhoto}>
                                <Image
                                    src={datas?.[0].Picture.PictureUrl1}
                                    alt={datas?.[0]?.ScenicSpotName}
                                    width={630}
                                    height={440}
                                    layout="responsive"
                                ></Image>
                            </div>
                            <div className={style.secnicWordsGroup}>
                                <div className={style.secnicSpotCity}>
                                    {datas?.[0].City}
                                </div>
                                <div className={style.secnicSpotFeatures}>
                                    <div
                                        className={
                                            style.secnicSpotFeaturesTag +
                                            ` ` +
                                            `${
                                                datas?.[0].Class1
                                                    ? ' '
                                                    : style.none
                                            }`
                                        }
                                    >
                                        {datas?.[0].Class1
                                            ? datas?.[0].Class1
                                            : ' '}
                                    </div>
                                    <div
                                        className={
                                            style.secnicSpotFeaturesTag +
                                            ` ` +
                                            `${
                                                datas?.[0].Level
                                                    ? ' '
                                                    : style.none
                                            }`
                                        }
                                    >
                                        {datas?.[0].Level
                                            ? datas?.[0].Level
                                            : ' '}
                                    </div>
                                    <div
                                        className={
                                            style.secnicSpotFeaturesTag +
                                            ` ` +
                                            `${
                                                datas?.[0].Class2
                                                    ? ' '
                                                    : style.none
                                            }`
                                        }
                                    >
                                        {datas?.[0].Class2
                                            ? datas?.[0].Class2
                                            : ' '}
                                    </div>
                                    <div
                                        className={
                                            style.secnicSpotFeaturesTag +
                                            ` ` +
                                            `${
                                                datas?.[0].Class3
                                                    ? ' '
                                                    : style.none
                                            }`
                                        }
                                    >
                                        {datas?.[0].Class3
                                            ? datas?.[0].Class3
                                            : ' '}
                                    </div>
                                </div>
                                <div className={style.secnicSpotTitle}>
                                    {datas?.[0].ScenicSpotName}
                                </div>
                                <div className={style.secnicSpotOpen}>
                                    開放時間：{datas?.[0].OpenTime}
                                </div>
                                <div className={style.secnicSpotPhone}>
                                    電話：
                                    {datas?.[0].Phone ? datas?.[0].Phone : ''}
                                </div>
                                <div className={style.secnicSpotLocation}>
                                    地址：{datas?.[0].Address}
                                </div>
                                <div className={style.secnicSpotWeb}>
                                    網頁："no"
                                </div>
                            </div>
                        </div>
                        <div className={style.secnicDeatil}>
                            {datas?.[0].DescriptionDetail}
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}
