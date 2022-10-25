import style from "./trailandtitle.module.css"

export default function TrailAndTitle({ signpostData }) {

    const data = signpostData?.at(0)

    return (<>
        <div className={style.signpost}>
            <div className={style.home}>首頁</div>
            <div className={style.morethan}>
                <svg fill="none" viewBox="0 0 10 14"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#A9D3FF" />
                </svg>
            </div>
            <div className={style.spotorfood}>
                {data?.RestaurantID ? '美食餐廳' : '旅行景點'}
            </div>
            <div className={style.morethan}>
                <svg fill="none" viewBox="0 0 10 14"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#A9D3FF" />
                </svg>
            </div>
            <div className={style.cityorkind}>
                {data?.City ? `${data.City}` : ''}
            </div>
        </div>

        <div className={style.title}>
            {data?.RestaurantID ? '美食餐廳' : '旅行景點'}
        </div>
    </>
    );
}