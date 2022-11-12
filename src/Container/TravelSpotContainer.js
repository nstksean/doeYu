import { useContext } from 'react'

import style from '../components/TravelSpots/travelspots.module.css'
import TravelSpots from '../components/TravelSpots/TravelSpots'
import { RustContext } from '../context/rustContext'

export default function TravelSpotContainer() {
    const rustContextValue = useContext(RustContext)
    const datas = rustContextValue.state.rustAPI_data
    const loading = rustContextValue.state.rustAPI_isLoaded

    return (
        <div className={style.SpotContainer}>
            <TravelSpots datas={datas} loading={loading} />
        </div>
    )
}
