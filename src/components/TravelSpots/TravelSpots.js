import { useContext, useState } from 'react'

import SpotCard from './SpotCard'
import style from "./travelspots.module.css"



export default function TravelSpots({ datas }) {

    const [countClick, setCountClick] = useState(396)

    const handleBtnPreClick = () => {

        setCountClick(countClick - 1)
    }

    const handleBtnNexClick = () => {

        setCountClick(countClick + 1)
    }

    return (
        <div className={style.hotSpotGroup}>
            <div className={style.title}>
                熱門景點
            </div>
            <div className={style.reversefor375}>
                <div className={style.hotSpotBtnContainer}>
                    <button className={style.hotSpotBtnPre}
                        onClick={handleBtnPreClick}>
                        <svg fill="none" viewBox="0 0 10 14"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FEFEFE" />
                        </svg>
                    </button>
                    <button className={style.hotSpotBtnNex}
                        onClick={handleBtnNexClick}>
                        <svg fill="none" viewBox="0 0 10 14"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FEFEFE" />
                        </svg>
                    </button>
                </div>
                <div className={style.hotSpotStackContainer}>

                    {
                        datas?.slice((0 + (countClick % 9)), (4 + (countClick % 9))).map((data) =>
                            <SpotCard data={data} key={data.ScenicSpotID} />
                        )
                    }
                </div>
                <div className={style.hotSpotStackContainer375}>

                    {
                        datas?.slice((0 + (countClick % 9)), (2 + (countClick % 9))).map((data) =>
                            <SpotCard data={data} key={data.ScenicSpotID} />

                        )
                    }
                </div>
            </div>
        </div >
    );
}

