import Image from "next/image";
import foodholder from '../../../public/images/placeholders/foodBig.png'
import style from "./resturantcard.module.css"


export default function ResturantCard({ data: data }) {

    return (<>
        <div className={data?.Message ? `${style.none}` : ``}>
            <div className={style.hotSpotStackItem}>
                <div className={style.ItemPhoto}>
                    <Image
                        src={data?.Picture?.PictureUrl1 ? data?.Picture?.PictureUrl1 : foodholder}
                        alt={data?.RestaurantName}
                        width={330}
                        height={230}
                        blurDataURL={foodholder}
                        layout='intrinsic'
                        objectFit='cover'
                    />
                </div>
                <div
                    className={style.spotTitle}>
                    {data?.RestaurantName}
                </div>
                <div className={style.spotCity}>
                    {data?.Class ? data?.Class : '沒有分類'}
                </div>
            </div>
        </div>
        <div className={data?.Message ? `${style.nofound}` : `${style.none}`}>
            {data?.Message}
        </div>

    </>
    );

}