import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import style from './slides.module.css'
import slideR from '../../../public/images/fakeSlide/slideR.png'


export default function Slides({ data }) {
    const [Tab, setTab] = useState(0)
    const targetItem = data.at(Tab)

    return (
        <div className={style.slideGroup}>
            <div className={style.slideBtnPre}>
                <Image
                    src={slideR}
                    alt={data.name}
                    layout='fill'
                    objectFit='cover' />
            </div>
            <div className={style.slider}>
                <Link href={`/posts/locations/` + `${data.at(Tab).ScenicSpotID}`}>
                    <div className={style.slideItem}>
                        <div className={style.bgwrap}>
                            <Image
                                src={targetItem.Picture.PictureUrl1}
                                alt={targetItem.ScenicSpotName}
                                layout="fill"
                                objectFit='cover' />
                        </div>
                        <div className={style.wordArtcontainer}>
                            <div className={style.title}>{targetItem.ScenicSpotName}</div>
                            <div className={style.city}>{targetItem.City}</div>
                        </div>
                    </div>
                </Link>
                <div className={style.slideBtnsContainer}>
                    <input className={style.slideBtns} type='radio' name="slide" value={0}
                        onClick={(e) => setTab(e.target.value)}>
                    </input>
                    <input className={style.slideBtns} type='radio' name="slide" value={1}
                        onClick={(e) => setTab(e.target.value)}>
                    </input>
                    <input className={style.slideBtns} type='radio' name="slide" value={2}
                        onClick={(e) => setTab(e.target.value)}>
                    </input>
                    <input className={style.slideBtns} type='radio' name="slide" value={3}
                        onClick={(e) => setTab(e.target.value)}>
                    </input>
                </div>
            </div>
            <div className={style.slideBtnNex}>
                <Image
                    src={slideR}
                    alt={data.name}
                    layout="fill"
                    objectFit='cover'
                />
            </div>
        </div >
    );
}