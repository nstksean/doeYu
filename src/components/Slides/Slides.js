import Image from 'next/image';
import { useContext } from 'react';
import { RootContext } from '../../context/rustContext';
import style from './slides.module.css'



export default function Slides() {
    const rootContextValue = useContext(RootContext)
    const datas = rootContextValue.state.rustAPI_data
    const loading = rootContextValue.state.rustAPI_isLoaded


    return (
        <div className={style.slideGroup}>
            <button className={style.slideBtnPre}>
                <svg fill="none" viewBox="0 0 10 14"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#392A93" />
                </svg>
            </button>
            <div className={style.slider}>
                <div className={style.slideItem}>
                    {/* <Image
                        src={ }
                        alt=""
                        width={ }
                        height={ }
                        layout="responsive"
                    /> */}
                </div>
                <div className={style.slideBtnsContainer}>
                    <input className={style.slideBtns} type='radio' name="slide"></input>
                    <input className={style.slideBtns} type='radio' name="slide"></input><input className={style.slideBtns} type='radio' name="slide"></input><input className={style.slideBtns} type='radio' name="slide"></input>
                </div>
            </div>
            <button className={style.slideBtnNex}>
                <svg fill="none" viewBox="0 0 10 14"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#392A93" />
                </svg>
            </button>
        </div>
    );
}