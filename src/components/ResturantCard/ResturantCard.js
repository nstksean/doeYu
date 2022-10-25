import style from "./foodcards.module.css"
import Image from "next/image";

export default function ResturantCard({ datas }) {
    const data = datas
    return (
        <div className={style.hotSpotStackItem}>
            <div className={style.ItemPhoto}>
                <Image
                    src={data.Picture.PictureUrl1}
                    alt={data.RestaurantName}
                    width={330}
                    height={230}
                    layout="responsive"
                />
            </div>
            <div
                className={style.spotTitle}>
                {data.RestaurantName}
            </div>
            <div className={style.spotCity}>
                {data.Class}
            </div>
        </div>
    );

}