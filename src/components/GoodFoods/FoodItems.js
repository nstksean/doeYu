import ChineseFood from '../../../public/images/food/bun.jpg'
import PorkRice from '../../../public/images/food/rice.jpg'
import ExoticFood from '../../../public/images/food/nasilemak.jpg'
import Ice from '../../../public/images/food/ice.jpg'
import Cake from '../../../public/images/food/cake.jpg'
import AllOthers from '../../../public/images/food/other.jpg'
import { nanoid } from '@reduxjs/toolkit'



export const foodTypes = [
    {
        name: '中式美食',
        imageUrl: ChineseFood,
        key: nanoid()
    },
    {
        name: '夜市小吃',
        imageUrl: PorkRice,
        key: nanoid()
    },
    {
        name: '異國美食',
        imageUrl: ExoticFood,
        key: nanoid()
    },
    {
        name: '甜點冰品',
        imageUrl: Ice,
        key: nanoid()
    },
    {
        name: '伴手禮',
        imageUrl: Cake,
        key: nanoid()
    },
    {
        name: '全部種類',
        imageUrl: AllOthers,
        key: nanoid()
    },
]