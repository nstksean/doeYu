import style from "..TravelSpots/travelspots.module.css"
import { RootContext } from '../../context/RootContext';
import { useContext } from 'react'

export default function TravelSpots() {

    const rootContextValue = useContext(RootContext);
    const data = rootContextValue.state.scenicSpotAPI_data
    const loading = rootContextValue.state.scenicSpotAPI_isLoaded

    console.log({ data, loading });
    return (
        <div className={style.hotSpotGroup}>
            <div className='title'>
                熱門景點
            </div>
            <div className={style.hotSpotBtnContainer}>
                <button className={style.hotSpotBtnPre}>
                    <svg fill="none" viewBox="0 0 10 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FEFEFE" />
                    </svg>
                </button>
                <button className={style.hotSpotBtnNex}>
                    <svg fill="none" viewBox="0 0 10 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FEFEFE" />
                    </svg>
                </button>
            </div>
            <div className={style.hotSpotStackContainer}>
                {
                    data.slice(0, 4).map(x => <div className={style.hotSpotStackItem}>
                        <div className={style.ItemPhoto}></div>
                        <div className={style.spotTitle}>{x.ScenicSpotName}</div>
                        <div className={style.spotCity}>{x.City}</div>
                    </div>)
                }
                {/* <div className={style.hotSpotStackItem}>
                    <div className={style.ItemPhoto}></div>
                    <div className={style.spotTitle}>我是景點名稱</div>
                    <div className={style.spotCity}>我是城市</div>
                </div>
                <div className={style.hotSpotStackItem}>
                    <div className={style.ItemPhoto}></div>
                    <div className={style.spotTitle}>我是景點名稱</div>
                    <div className={style.spotCity}>我是城市</div>
                </div><div className={style.hotSpotStackItem}>
                    <div className={style.ItemPhoto}></div>
                    <div className={style.spotTitle}>我是景點名稱</div>
                    <div className={style.spotCity}>我是城市</div>
                </div><div className={style.hotSpotStackItem}>
                    <div className={style.ItemPhoto}></div>
                    <div className={style.spotTitle}>我是景點名稱</div>
                    <div className={style.spotCity}>我是城市</div>
                </div> */}
            </div>
        </div>
    );
}