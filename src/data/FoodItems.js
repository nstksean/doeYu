import ChineseFood from '../../public/images/food/bun.jpg'
import PorkRice from '../../public/images/food/rice.jpg'
import ExoticFood from '../../public/images/food/nasilemak.jpg'
import Ice from '../../public/images/food/ice.jpg'
import Cake from '../../public/images/food/cake.jpg'
import AllOthers from '../../public/images/food/other.jpg'
import { nanoid } from '@reduxjs/toolkit'



export const foodTypes = [
    {
        name: '中式美食',
        imageUrl: ChineseFood,
        key: nanoid()
        , inEnglish: "ChineseFood"
    },
    {
        name: '夜市小吃',
        imageUrl: PorkRice,
        key: nanoid(),
        inEnglish: "NightMarket"
    },
    {
        name: '異國美食',
        imageUrl: ExoticFood,
        key: nanoid(),
        inEnglish: "ExoticFood"
    },
    {
        name: '甜點冰品',
        imageUrl: Ice,
        key: nanoid(),
        inEnglish: "Ice"
    },
    {
        name: '伴手禮',
        imageUrl: Cake,
        key: nanoid(),
        inEnglish: "Gift"
    },
    {
        name: '其他種類',
        imageUrl: AllOthers,
        key: nanoid(),
        inEnglish: "Other"
    },
]