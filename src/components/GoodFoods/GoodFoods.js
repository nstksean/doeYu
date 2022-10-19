
import { foodTypes } from "../../data/FoodItems";
import Image from "next/image";



import style from "./goodfoods.module.css"
import Link from "next/link";


export default function GoodFoods() {

    return (
        <div className={style.hotFoodGroup}>
            <div className={style.title}>
                人氣美食
            </div>
            <div className={style.stackFoodContainer}>
                <Link href={`/posts/restaurants/${foodTypes.at(0).inEnglish}`}>
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
                        <div className={style.wordArt}>
                            <p className={style.foodType}>
                                {foodTypes.at(0).name}
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href={`/posts/restaurants/${foodTypes.at(1).inEnglish}`}>
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
                        <div className={style.wordArt}>
                            <p className={style.foodType}>
                                {foodTypes.at(1).name}
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href={`/posts/restaurants/${foodTypes.at(2).inEnglish}`}>
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
                        <div className={style.wordArt}>
                            <p className={style.foodType}>
                                {foodTypes.at(2).name}
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href={`/posts/restaurants/${foodTypes.at(3).inEnglish}`}>

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
                        <div className={style.wordArt}>
                            <p className={style.foodType}>
                                {foodTypes.at(3).name}
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href={`/posts/restaurants/${foodTypes.at(4).inEnglish}`}>

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
                        <div className={style.wordArt}>
                            <p className={style.foodType}>
                                {foodTypes.at(4).name}
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href={`/posts/restaurants/${foodTypes.at(5).inEnglish}`}>

                    <div className={style.foodStackItem}>
                        <div className={style.bgWrap}>
                            <Image
                                alt={foodTypes.at(5).name}
                                src={foodTypes.at(5).imageUrl}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div><div className={style.wordArt}>
                            <p className={style.foodType}>
                                {foodTypes.at(5).name}
                            </p></div>

                    </div>
                </Link>


            </div>

        </div >
    );
}