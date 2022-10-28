import Image from "next/image";
import style from "./travelspots.module.css"


export default function SpotCard({ data }) {

    return (
        <>
            <div key={data?.ScenicSpotID}
                className={style.hotSpotStackItem}>
                <div className={style.ItemPhoto}>
                    <Image
                        src={data?.Picture.PictureUrl1}
                        alt={data?.ScenicSpotName}
                        width={320}
                        height={220}
                        layout="responsive"
                    />
                </div>
                <div
                    className={style.spotTitle}>
                    {data?.ScenicSpotName}
                </div>
                <div className={style.spotCity}>{data?.City}</div>
            </div>
        </>

    );

}