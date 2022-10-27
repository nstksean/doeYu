import { useState } from 'react';

import { fakeSlide } from '../../data/mockAPI';
import Slides from './Slides';
import style from './slides.module.css'



export default function SlideContainer() {
    const datas = fakeSlide

    return (
        <div className={style.SlideContainer}>
            <Slides data={datas}></Slides>
        </div>
    );
}