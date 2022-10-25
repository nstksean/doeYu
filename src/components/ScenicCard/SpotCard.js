import style from "./spotcards.module.css"
import Image from "next/image";


export default function SpotCard({ datas }) {
    const item = datas

    return (
        <div className={style.hotSpotStackItem}>
            <div className={style.ItemPhoto}>
                <Image
                    src={item.Picture.PictureUrl1}
                    alt={item.ScenicSpotName}
                    width={320}
                    height={220}
                    layout="responsive"
                />
            </div>
            <div
                className={style.spotTitle}>
                {item?.ScenicSpotName}
            </div>
            <div className={style.spotCity}>
                {item?.City}
            </div>
        </div>
    );
}
