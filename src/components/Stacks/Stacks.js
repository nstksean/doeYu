import { RootContext } from "../../context/rustContext";
import { useContext } from "react";

import style from './stacks.module.css'
import Image from "next/image";


export default function Stacks() {

    const rootContextValue = useContext(RootContext)
    const datas = rootContextValue.state.rustAPI_data
    const loading = rootContextValue.state.rustAPI_isLoaded

    console.log({ datas, loading })


    return (
        <div className={style.stackGruop}>

            <div className={style.stackBtnContainer}>

                <div className={style.stackBtn}>
                    <input type='radio' name="city" id="熱鬧繁華" />
                    <label className={style.stackBtnLb} htmlFor="熱鬧繁華">
                        熱鬧繁華</label>
                </div>
                <div className={style.stackBtn}>
                    <input type='radio' name="city" id="與自然共舞" />
                    <label className={style.stackBtnLb} htmlFor="與自然共舞">與自然共舞
                    </label>
                </div>
                <div className={style.stackBtn}>
                    <input type='radio' name="city" id="純樸人情味" />
                    <label className={style.stackBtnLb} htmlFor="純樸人情味">純樸人情味</label>
                </div>
                <div className={style.stackBtn}>
                    <input type='radio' name="city" id="南島奔放" />
                    <label className={style.stackBtnLb} htmlFor="南島奔放">南島奔放</label>

                </div>


            </div>
            <div className={style.stackSlide}>
                <div className={style.stackPre}>
                    <svg fill="none" viewBox="0 0 10 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FA7E5F" />
                    </svg>
                </div>
                <div className={style.stackContainer}>
                    {
                        datas?.slice(0, 6).map((data) =>
                            <div className={style.stackItems}
                                key={data.ScenicSpotID}
                            ><div className={style.stackItemsPhoto}>

                                    <Image
                                        src={data?.Picture.PictureUrl1}
                                        alt="Picture location"
                                        width={320}
                                        height={220}
                                        layout="intrinsic">
                                    </Image>
                                </div>
                            </div>
                        )

                    }

                    {/* <div className={style.stackItems}>
                        <span>B</span>
                    </div>
                    <div className={style.stackItems}>
                        <span>C</span>
                    </div>
                    <div className={style.stackItems}>
                        <span>D</span>
                    </div>
                    <div className={style.stackItems}>
                        <span>E</span>
                    </div>
                    <div className={style.stackItems}>
                        <span>F</span>
                    </div> */}
                </div>
                <div className={style.stackNex}>
                    <svg fill="none" viewBox="0 0 10 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FA7E5F" />
                    </svg>
                </div>
            </div>
        </div>
    );
}