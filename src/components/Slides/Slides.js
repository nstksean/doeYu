import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import style from './slides.module.css'
import slideR from '../../../public/images/fakeSlide/slideR.png'

export default function Slides({ datum }) {
    const [currentTab, setCurrentTab] = useState(0)

    const targetItem = datum?.at(currentTab)

    const len = datum.length - 1

    return (
        <div className={style.slideGroup}>
            <div
                onClick={() =>
                    setCurrentTab(currentTab < 1 ? len : currentTab - 1)
                }
            >
                <div className={style.slideBtnPre}>
                    <Image
                        src={slideR}
                        alt={datum?.name}
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
            </div>
            <div className={style.slider}>
                <Link
                    href={
                        `/posts/locations/` +
                        `${datum?.at(currentTab).ScenicSpotID}`
                    }
                >
                    <div className={style.slideItem}>
                        <div className={style.bgwrap}>
                            <Image
                                src={targetItem?.Picture.PictureUrl1}
                                alt={targetItem?.ScenicSpotName}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className={style.wordArtcontainer}>
                            <div className={style.title}>
                                {targetItem?.ScenicSpotName}
                            </div>
                            <div className={style.city}>{targetItem?.City}</div>
                        </div>
                    </div>
                </Link>
                <div className={style.slideBtnsContainer}>
                    <input
                        className={style.slideBtns}
                        type="radio"
                        name="slide"
                        value={0}
                        onClick={(e) => setCurrentTab(parseInt(e.target.value))}
                        checked={currentTab === 0}
                        onChange={(e) =>
                            setCurrentTab(parseInt(e.target.value))
                        }
                    ></input>
                    <input
                        className={style.slideBtns}
                        type="radio"
                        name="slide"
                        value={1}
                        onClick={(e) => setCurrentTab(parseInt(e.target.value))}
                        checked={currentTab === 1}
                        onChange={(e) =>
                            setCurrentTab(parseInt(e.target.value))
                        }
                    ></input>
                    <input
                        className={style.slideBtns}
                        type="radio"
                        name="slide"
                        value={2}
                        onClick={(e) => setCurrentTab(parseInt(e.target.value))}
                        onChange={(e) =>
                            setCurrentTab(parseInt(e.target.value))
                        }
                        checked={currentTab === 2}
                    ></input>
                    <input
                        className={style.slideBtns}
                        type="radio"
                        name="slide"
                        value={3}
                        onClick={(e) => setCurrentTab(parseInt(e.target.value))}
                        onChange={(e) =>
                            setCurrentTab(parseInt(e.target.value))
                        }
                        checked={currentTab === 3}
                    ></input>
                </div>
            </div>
            <div
                onClick={() =>
                    setCurrentTab(currentTab > 2 ? 0 : currentTab + 1)
                }
            >
                <div className={style.slideBtnNex}>
                    <Image
                        src={slideR}
                        alt={datum?.name}
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
            </div>
        </div>
    )
}
