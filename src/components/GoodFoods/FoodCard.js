import Image from "next/image";
import Link from "next/link";

import style from "./goodfoods.module.css"



export default function FoodCard({ foods }) {
    const food = foods
    return (
        <Link href={`/posts/restaurants/${food.inEnglish}`}>
            <div className={style.foodStackItem}>
                <div className={style.bgWrap}>
                    <Image
                        alt={food.name}
                        src={food.imageUrl}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div className={style.wordArt}>
                    <p className={style.foodType}>
                        {food.name}
                    </p>
                </div>
            </div>
        </Link>
    );
}