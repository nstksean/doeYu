import { useState } from 'react';

import { fakeSlide } from '../../data/mockAPI';
import Slides from './Slides';


export default function SlideContainer() {
    const datas = fakeSlide

    return (
        <div>
            <Slides data={datas}></Slides>
        </div>
    );
}