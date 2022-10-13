import { RootContext } from "../../context/rustContext";
import { useContext } from "react";
import { foodTypes } from "./FoodItems";
import Image from "next/image";
import { nanoid } from '@reduxjs/toolkit'


import style from "./goodfoods.module.css"


export default function GoodFoods() {
    const rootContextValue = useContext(RootContext)
    const datas = rootContextValue.state.rustAPI_data
    const loading = rootContextValue.state.rustAPI_isLoaded

    return (
        <div className={style.hotFoodGroup}>
            <div className={style.title}>
                人氣美食
            </div>
            <div className={style.stackFoodContainer}>
                <div className={style.foodStackItem}>
                    <div className={style.bgWrap}>
                        <Image
                            alt={foodTypes.at(0).name}
                            src={foodTypes.at(0).imageUrl}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <p className={style.foodType}>
                        {foodTypes.at(0).name}
                    </p>
                </div>
                <div className={style.foodStackItem}>
                    <div className={style.bgWrap}>
                        <Image
                            alt={foodTypes.at(1).name}
                            src={foodTypes.at(1).imageUrl}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <p className={style.foodType}>
                        {foodTypes.at(1).name}
                    </p>
                </div>
                <div className={style.foodStackItem}>
                    <div className={style.bgWrap}>
                        <Image
                            alt={foodTypes.at(2).name}
                            src={foodTypes.at(2).imageUrl}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <p className={style.foodType}>
                        {foodTypes.at(2).name}
                    </p>
                </div>
                <div className={style.foodStackItem}>
                    <div className={style.bgWrap}>
                        <Image
                            alt={foodTypes.at(3).name}
                            src={foodTypes.at(3).imageUrl}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <p className={style.foodType}>
                        {foodTypes.at(3).name}
                    </p>
                </div>
                <div className={style.foodStackItem}>
                    <div className={style.bgWrap}>
                        <Image
                            alt={foodTypes.at(4).name}
                            src={foodTypes.at(4).imageUrl}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <p className={style.foodType}>
                        {foodTypes.at(4).name}
                    </p>
                </div>
                <div className={style.foodStackItem}>
                    <div className={style.bgWrap}>
                        <Image
                            alt={foodTypes.at(5).name}
                            src={foodTypes.at(5).imageUrl}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <p className={style.foodType}>
                        {foodTypes.at(5).name}
                    </p>
                </div>


            </div>

        </div >
    );
}