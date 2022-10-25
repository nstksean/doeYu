
import { foodTypes } from "../data/FoodItems";
import Image from "next/image";

import style from "../components/GoodFoods/goodfoods.module.css"
import Link from "next/link";
import FoodCard from "../components/GoodFoods/FoodCard";


export default function GoodFoodContainer() {
    const foods = foodTypes
    return (
        <div className={style.hotFoodGroup}>
            <div className={style.title}>
                人氣美食
            </div>

            <div className={style.stackFoodContainer}>

                {foods.map((food) => <FoodCard foods={food} key={food.key} />
                )}

            </div >
        </div>
    );
}