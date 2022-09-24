
import { createContext, useReducer, useEffect } from 'react'
import { getScenicSpotUrl } from '../api/apiClient';



const initialState = {
    count: 0,
    data: 324,
    rustAPI: {
        data: null,
        isLoaded: false,
        error: null
    },
    scenicSpotAPI_data: [
        {
            "ScenicSpotID": "C1_382000000A_110334",
            "ScenicSpotName": "三重林氏古厝(崇德居)",
            "DescriptionDetail": "崇德居興建於臺灣日治時期的大正十四年（1925年），創建者為林建立。當時林氏家族在三重經營香花生意，頗有成就。而在同族的仕紳林清敦倡議重修先嗇宮後，擔任重建籌備委員的林建立也著手崇德居的興建工程。崇德居佔地600多坪，使用福杉與TR磚建成，為一間單進雙護龍的三合院。除了中間的公媽廳之外，正身左右兩邊各有3間主客房，東西廂（護龍）各有4間，共14間房，與「德」字14劃相合。由於當時林建立之母篤信佛教，林建立為了給母親一個寧靜清幽的環境，所以特意將崇德居打造出「寺廟」的風格紅牆紅瓦的三合院落，雖置身鬧市裡，卻有恬靜安然的氣息，那種舊時的生活痕跡，溫暖許多人的記憶，屋頂簷樑間的剪黏和厝身的水車堵，出自名師陳天乞之手，大廳則是由建造先嗇宮的師傅群完成，氣派莊嚴。",
            "Description": "又名崇德居，建於八十幾年前，是三重唯一保存完整的古厝。紅牆紅瓦的三合院落，雖置身鬧市裡，卻有恬靜安然的氣息，那種舊時的生活痕跡，溫暖許多人的記憶，屋頂簷樑間的剪黏和厝身的水車堵，出自名師陳天乞之手，大廳則是由建造先嗇宮的師傅群完成，氣派莊嚴，極具觀賞價值，若幸運得遇主人，可詢問是否可以入內參觀。",
            "Phone": "886-2-29862345",
            "Address": "新北市241三重區自強路三段34巷12號",
            "ZipCode": "241",
            "TravelInfo": "【大眾運輸】搭乘捷運至三和國中下車，步行約10分鐘。",
            "OpenTime": "請來電預約",
            "Picture": {
                "PictureUrl1": "https://newtaipei.travel/content/images/attractions/1663/640x480_1249a970109000004969.jpg",
                "PictureDescription1": "三重林氏古厝（崇德居）外觀遠景"
            },
            "Position": {
                "PositionLon": 121.48650360107422,
                "PositionLat": 25.072189331054688,
                "GeoHash": "wsqqskrb0"
            },
            "ParkingPosition": {},
            "City": "新北市",
            "SrcUpdateTime": "2022-09-23T01:48:41+08:00",
            "UpdateTime": "2022-09-23T03:04:46+08:00"
        },
        {
            "ScenicSpotID": "C1_382000000A_110339",
            "ScenicSpotName": "碧華布街(三重布莊博物園區)",
            "DescriptionDetail": "清咸豐年間，淡水河東大稻珵商業興盛，同時也帶動三重埔的發展。三重埔指的就是現今新北市的三重區與蘆洲區，三重一直以來都隸屬在蘆州鄉下，直至1947年，才正式和蘆洲分治。三重因地理位置交通便利且緊鄰臺北市，有許多外地遊子選擇此地租屋、買屋，使其成為臺北市周邊移民人口最多的地方。國內經濟起飛時，「客廳即工廠」是當時三重的主調，三步一家五步一間從事產品代工，但因產量規模大，故可撐起全台機械零件一片天。不認識三重時，你會覺得此地總是顯得忙亂，初識後又發覺帶有秩序，一旦熟識後，就會感到無比溫馨。三重碧華布街原為布料批發所在地，起源於惜物節儉的概念，將碎布發揮其利用價值，將布做分類整理與創意運用，進而打造布街風華，在這裡有許多新鮮事等你來瞧瞧喔!",
            "Description": "「客廳即工廠」，布產業的奇蹟",
            "Phone": "886-2-29821108",
            "Address": "新北市241三重區碧華街",
            "ZipCode": "241",
            "TravelInfo": "＊捷運：搭乘捷運蘆洲線至捷運徐匯中學站，步行至碧華街約5分鐘。＊公車： 1.台北客運：229(保佑村-萬華車站)、264(板橋-蘆洲) 2.大都會客運：306(舊庒-蘆洲) 3.三重客運：221(蘆洲-台北車站)、225(蘆洲-民生社區)4.232(蘆洲-松山車站)、306(淩雲五村-蘆洲)、508黃(蘆洲-惇敘高中)、508正線(惇敘高中-蘆洲)、659(蘆洲-台北車站) 、...",
            "OpenTime": "全年開放，以店家時間為準",
            "Picture": {
                "PictureUrl1": "https://newtaipei.travel/content/images/attractions/1669/640x480_20130830095936.jpg",
                "PictureDescription1": "碧華布街(三重布莊博物園區)街邊商店"
            },
            "Position": {
                "PositionLon": 121.4834976196289,
                "PositionLat": 25.08119010925293,
                "GeoHash": "wsqqsmvsd"
            },
            "Class1": "其他",
            "ParkingPosition": {},
            "City": "新北市",
            "SrcUpdateTime": "2022-09-23T01:48:41+08:00",
            "UpdateTime": "2022-09-23T03:04:46+08:00"
        },
        {
            "ScenicSpotID": "C1_382000000A_110341",
            "ScenicSpotName": "三和夜市",
            "DescriptionDetail": "三和夜市原名中央夜市，地緣位置靠近捷運台北橋站，相較士林、師大等觀光夜市，這裡顯得更有「在地味」，夜市裡也藏有許多在地人一吃三十餘年的人氣老店，白天是三重中央公有零售市場，入夜後變身為三重最熱鬧的地方，從髮飾、配件到鞋襪、小吃攤商雲集，人車雜沓的景象和著攤販的叫賣聲，規模相當龐大，充滿了最道地的夜市氣息。在美食部分有許多30年以上的老字號小吃。阿文餛飩鹹湯圓、萬粒肉圓、蚵仔煎以及木瓜牛奶等，都是在地人從小吃到大的經典滋味。價位也比一橋之隔的臺北市更加實惠，非常適合老饕來這裡覓食。最有名的餛飩湯頭選用豬大骨熬煮而成，加入芹菜末、紅蔥頭，湯頭濃醇，內餡處理得仔細，入口滿口芳香，一口一個剛剛好。 (三和路2段及中央北路及重新路1段交接口)",
            "Description": "老饕必遊夜市，多間老字號小吃美味又好買",
            "Phone": "886-2-29862345",
            "Address": "新北市241三重區中央北路",
            "ZipCode": "241",
            "TravelInfo": "【大眾運輸】搭乘捷運至台北橋站下車，往中央北路方向步行約3分鐘。",
            "OpenTime": "17:00~24:00(以店家營業時間為準)",
            "Picture": {
                "PictureUrl1": "https://newtaipei.travel/content/images/attractions/43605/640x480_attractions-image-a9z3oxs1qey0oxu96jbx2q.jpg",
                "PictureDescription1": "三和夜市"
            },
            "Position": {
                "PositionLon": 121.50054931640625,
                "PositionLat": 25.064979553222656,
                "GeoHash": "wsqqsfcyp"
            },
            "ParkingPosition": {},
            "City": "新北市",
            "SrcUpdateTime": "2022-09-23T01:48:41+08:00",
            "UpdateTime": "2022-09-23T03:04:46+08:00"
        },
        {
            "ScenicSpotID": "C1_382000000A_110343",
            "ScenicSpotName": "新北大都會公園 (二重疏洪道河濱公園)",
            "DescriptionDetail": "位於新北市大都會公園內的「熊猴森樂園」，於2020年７月全新開幕。園區占地４公頃，融合台灣特色動物意象，打造全臺最大全齡共融的堤坡滑梯樂園，全區共有31座大小型溜滑梯、100多組遊樂設施，不僅是讓孩子從早到晚玩到瘋狂的遊樂聖地，也是大人與孩子一起玩樂紓壓的好所在！國寶級動物化身孩子玩伴從高處俯瞰熊猴森樂園，看到的是色彩繽紛的天空、山岳、森林及溪流等不同主題，臺灣國寶級動物就化身大型遊樂設施，藏身各主題中，像是臺灣帝雉磨石子溜滑梯、臺灣藍鵲攀爬網、櫻花鉤吻鮭攀爬座及臺灣黑熊鞦韆，一旁的解說牌介紹動物名字、習性及體型，達到寓教於樂的效果，解說牌另一面則詳細說明遊樂設施的適合年齡及注意事項，讓孩子在有趣、有挑戰性的遊樂場探險又玩得安全，多樣的可愛動物更是讓大人拍照拍不停！貼心設計，夜間遊玩也OK熊猴森樂園附近設立了親子廁所及多條無障礙步道，貼心的設計讓旅客盡情暢遊。目前熊猴森樂園的開放時間從上午6點到晚上10點，在炎熱夏日建議傍晚再來遊玩，夜晚燈光充足，更是適合孩子夜間派對的玩樂天堂。水陸雙享大樂園2022年夏季，佔地1500平方公尺的「海世界水樂園」開放，設計延續熊猴森樂園以臺灣特色動物為主題的理念，打造7大臺灣特色水中生物，如綠蠵龜、萬里蟹、彈塗魚、寄居蟹、澎湖章魚、海月水母、花園鰻等親水設施，使用防滑地坪保障遊客安全，歡迎民眾攜帶水槍來此歡樂一夏。",
            "Description": "全世界最大共融式堤坡滑梯樂園，親子玩樂舒壓的聖地",
            "Phone": "886-2-89699596",
            "Address": "新北市241三重區疏洪東路一段859號",
            "ZipCode": "241",
            "TravelInfo": "1.搭乘台北捷運於「三重站」下車後由出口1出站，步行穿過越堤道可至幸運草地景溜滑梯、幸福水漾園區2.搭乘桃園機捷於「三重站」下車後由出口1A出站，穿過越堤道可至幸運草地景溜滑梯、幸福水漾園區",
            "OpenTime": "戲水設施每周二休園噴水時間：至9月每日10:00~12:00、15:00~19:00",
            "Picture": {
                "PictureUrl1": "https://newtaipei.travel/content/images/attractions/25073/640x480_attractions-image-c9bddezoe027ozzsqfulsq.jpg",
                "PictureDescription1": "有大片綠草皮的大都會公園"
            },
            "Position": {
                "PositionLon": 121.481689453125,
                "PositionLat": 25.05651092529297,
                "GeoHash": "wsqqs3kkb"
            },
            "Class1": "遊憩類",
            "Class2": "都會公園類",
            "ParkingInfo": "設有多處收費停車格",
            "ParkingPosition": {},
            "TicketInfo": "免費",
            "City": "新北市",
            "SrcUpdateTime": "2022-09-23T01:48:41+08:00",
            "UpdateTime": "2022-09-23T03:04:46+08:00"
        },
        {
            "ScenicSpotID": "C1_382000000A_110790",
            "ScenicSpotName": "空軍三重一村",
            "DescriptionDetail": "從車潮川流的正義南路探進86巷，映入眼簾的，是兩支青天白日滿地紅國旗，低矮樸素的磚房延道排列，充滿懷舊記憶的「空軍三重一村」就在這裡。「空軍三重一村」，於2006年8月登錄為新北市歷史建築，是目前新北市的眷村文化資產。1954年，婦聯會在此興建空軍眷舍，房子的格局與大小，依軍階大小遞減建造，日軍、國軍部隊都曾在此駐紮，村裡的兩座大型地底防空洞至今保存完整，面積約兩個籃球場大；還有日治時代遺留下來的砲陣地。",
            "Description": "懷舊氛圍沿著磚房延展，守護著新北的眷村記憶",
            "Phone": "886-2-89535332",
            "Address": "新北市241三重區正義南路86巷",
            "ZipCode": "241",
            "TravelInfo": "【大眾運輸】搭乘捷運於「台北橋站」下車，往正義南路方向步行約10分鐘。",
            "OpenTime": "10:00 - 18:00",
            "Picture": {
                "PictureUrl1": "https://newtaipei.travel/content/images/attractions/43259/640x480_attractions-image-dsh2uuarruo-hg4np4tq3q.jpg",
                "PictureDescription1": "空軍三重一村"
            },
            "Position": {
                "PositionLon": 121.4994888305664,
                "PositionLat": 25.057729721069336,
                "GeoHash": "wsqqsc95z"
            },
            "Class1": "其他",
            "ParkingPosition": {},
            "City": "新北市",
            "SrcUpdateTime": "2022-09-23T01:48:41+08:00",
            "UpdateTime": "2022-09-23T03:04:46+08:00"
        }
    ],
    scenicSpotAPI_isLoaded: false,
    scenicSpotAPI_error: null

};


// action type 
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const SCENICSPOT_DATA = 'SCENICSPOT_DATA'
export const SCENICSPOT_LOAD = 'SCENICSPOT_LOAD'
export const SCENICSPOT_ERROR = 'SCENICSPOT_ERROR'


// reducer
function reducer(state, action) {
    switch (action.type) {
        case SCENICSPOT_DATA:
            return { ...state, scenicSpotAPI_data: action.payload };
        case SCENICSPOT_LOAD:
            return { ...state, scenicSpotAPI_isLoaded: action.payload, };
        case SCENICSPOT_ERROR:
            return { ...state, scenicSpotAPI_error: action.payload };
        case INCREMENT:
            return { ...state, count: state.count + 1, data: action.payload };
        case DECREMENT:
            return { ...state, count: state.count - 1, data: action.payload };
        default:
            return state;
    }
}


export const RootContext = createContext(initialState);
RootContext.displayName = 'RootContext'

export function RootContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const query = ({ $filter: `contains(Address,'三重')`, $top: '5', $format: 'JSON' })
    const scenicSpotUrl = getScenicSpotUrl('NewTaipei', query)

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(scenicSpotUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    // setIsLoaded(true);
                    // setItems(result);
                    dispatch({ type: SCENICSPOT_LOAD, payload: true })
                    dispatch({ type: SCENICSPOT_DATA, payload: result })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                    dispatch({ type: SCENICSPOT_LOAD, payload: true })
                    dispatch({ type: SCENICSPOT_ERROR, payload: error })
                }
            )
    }, [])

    return (
        <RootContext.Provider value={{ state, dispatch }}>
            {children}
        </RootContext.Provider>

    )
}

