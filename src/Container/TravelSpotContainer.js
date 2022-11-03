import { useContext } from 'react'

import style from '../components/TravelSpots/travelspots.module.css'
import TravelSpots from '../components/TravelSpots/TravelSpots'
import { RootContext } from '../context/rustContext'

export default function TravelSpotContainer() {
    const rootContextValue = useContext(RootContext)
    const datas = rootContextValue.state.rustAPI_data
    const loading = rootContextValue.state.rustAPI_isLoaded

    return (
        <div className={style.SpotContainer}>
            <TravelSpots datas={datas} loading={loading} />
        </div>
    )
}
