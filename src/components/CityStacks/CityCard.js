import Image from "next/image";
import Link from 'next/link';

import style from './citystack.module.css'


export default function CityCard({ cityDataToRender: city }) {

    return (
        <div>
            <Link href={`/posts/scenic/${city?.inEnglish}`}>
                <div className={style.stackItems}
                    key={city?.key}>
                    <div className={style.stackItemsPhoto}>
                        <Image
                            src={city?.imageUrl}
                            alt={city?.name}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            priority />
                    </div>
                    <div className={style.wordArt}>
                        <p className={style.foodType}>
                            {city?.name}
                        </p>
                    </div>
                </div>
            </Link>
        </div>

    );
}