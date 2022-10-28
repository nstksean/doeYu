import { useState, useEffect } from "react";


import { citys } from '../../data/CityItems'
import style from './citystack.module.css'
import CityCard from "./CityCard";


export default function CityStack() {
    const [filter, setfilter] = useState({ name: '熱鬧繁華', tab: 0 })
    const [activeTab, setActiveTab] = useState(0)
    const filterBtn = [
        { name: '熱鬧繁華', tab: 0 },
        { name: '與自然共舞', tab: 1 },
        { name: '純樸人情味', tab: 2 },
        { name: '南島奔放', tab: 3 }
    ]

    const handleTabChange = (filterBtn) => {
        return filterBtn?.filter((filterBtn) => filterBtn?.tab === activeTab)
    }
    const handleCityGroupBtnClick = (item) => {
        setfilter(item)
        setActiveTab(item?.tab)
    }

    const len = filterBtn.length - 1

    const resultObj = handleTabChange(filterBtn)

    useEffect(() => {
        setfilter(resultObj?.at(0))

    }, [activeTab])



    return (
        <div className={style.stackGruop}>
            <div className={style.stackBtnContainer}>

                {filterBtn.map((item) => (
                    <div className={style.stackBtn}
                        onChange={() => handleCityGroupBtnClick(item)}
                        key={item?.tab} >
                        <input type='radio' name="city" id={`${item?.tab}`} value={item?.name}
                            checked={activeTab === item?.tab}
                            onChange={() => handleCityGroupBtnClick(item)}
                        />
                        <label className={style.stackBtnLb} htmlFor={`${item?.tab}`}>
                            {item?.name}
                        </label>
                    </div>
                ))
                }

            </div>
            <div className={style.stackSlide}>
                <div className={style.stackPre}
                    onClick={() => setActiveTab(activeTab < 1 ? len : activeTab - 1)}

                >
                    <svg fill="none" viewBox="0 0 10 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FA7E5F" />
                    </svg>
                </div>
                <div className={style.stackContainer}>
                    {
                        citys.filter((city) => city.category === filter.name)
                            .map((city) => <CityCard city={city} key={city?.key} />
                            )

                    }


                </div>
                <div className={style.stackNex}
                    onClick={() => setActiveTab(activeTab > 2 ? 0 : activeTab + 1)}>
                    <svg fill="none" viewBox="0 0 10 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FA7E5F" />
                    </svg>
                </div>
            </div>
        </div >
    );
}

