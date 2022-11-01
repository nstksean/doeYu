import Image from "next/image";
import foodholder from '../../../public/images/placeholders/food.png'
import style from "./resturantcard.module.css"


export default function ResturantCard({ data }) {

    return (
        <div className={style.hotSpotStackItem}>
            <div className={style.ItemPhoto}>
                <Image
                    src={data?.Picture.PictureUrl1}
                    alt={data?.RestaurantName}
                    width={330}
                    height={230}
                    layout="responsive"
                    blurDataURL={foodholder}
                />
            </div>
            <div
                className={style.spotTitle}>
                {data?.RestaurantName}
            </div>
            <div className={style.spotCity}>
                {data?.Class}
            </div>
        </div>
    );

}