import style from './sceniccard.module.css'
import Image from 'next/image'
import scenicholder from '../../../public/images/placeholders/scenic.png'

export default function ScenicCard({ data }) {
    return (
        <div className={style.hotSpotStackItem}>
            <div className={style.ItemPhoto}>
                <Image
                    src={data?.Picture.PictureUrl1}
                    alt={data?.ScenicSpotName}
                    width={320}
                    height={220}
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={scenicholder}
                />
            </div>
            <div className={style.spotTitle}>{data?.ScenicSpotName}</div>
            <div className={style.spotCity}>
                {data?.City ? `${data?.City}` : `${data?.Address}`}
            </div>
        </div>
    )
}
