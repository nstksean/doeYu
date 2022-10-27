import style from "./sceniccard.module.css"
import Image from "next/image";
import scenicholder from '../../../public/images/placeholders/scenic.png'

export default function ScenicCard({ item: item }) {

    return (
        <div className={style.hotSpotStackItem}>
            <div className={style.ItemPhoto}>
                <Image
                    src={item?.Picture.PictureUrl1 ? item?.Picture.PictureUrl1 : scenicholder}
                    alt={item?.ScenicSpotName}
                    width={320}
                    height={220}
                    layout="responsive"
                    placeholder='blur'
                    blurDataURL={scenicholder}
                />
            </div>
            <div
                className={style.spotTitle}>
                {item?.ScenicSpotName}
            </div>
            <div className={style.spotCity}>
                {item?.City ? `${item?.City}` : `${item?.Address}`}
            </div>
        </div>
    );
}
