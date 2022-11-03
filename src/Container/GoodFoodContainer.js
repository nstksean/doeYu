import { foodTypes } from '../data/FoodItems'

import style from '../components/FoodCard/foodcard.module.css'
import FoodCard from '../components/FoodCard/FoodCard'

export default function GoodFoodContainer() {
    return (
        <div className={style.hotFoodGroup}>
            <div className={style.title}>人氣美食</div>

            <div className={style.stackFoodContainer}>
                {foodTypes.map((food) => (
                    <FoodCard food={food} key={food?.key} />
                ))}
            </div>
        </div>
    )
}
