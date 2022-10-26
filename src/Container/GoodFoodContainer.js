
import { foodTypes } from "../data/FoodItems";
import Image from "next/image";

import style from "../components/FoodCard/foodcard.module.css"
import FoodCard from "../components/FoodCard/FoodCard";


export default function GoodFoodContainer() {
    const foods = foodTypes
    return (
        <div className={style.hotFoodGroup}>
            <div className={style.title}>
                人氣美食
            </div>

            <div className={style.stackFoodContainer}>

                {foods.map((food) => <FoodCard foodDataToRender={food} key={food?.key} />
                )}

            </div >
        </div>
    );
}