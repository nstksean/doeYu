
import { v2_Tourism_Scenic_fakeslide_top4 as datum } from '../data/mockAPI';
import Slides from '../components/Slides/Slides';
import style from '../components/Slides/slides.module.css'



export default function SlideContainer() {

    return (
        <div className={style.SlideContainer}>
            <Slides datum={datum} />
        </div>
    );
}