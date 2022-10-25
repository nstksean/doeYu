
import { fakeSlide } from '../data/mockAPI';
import Slides from '../components/Slides/Slides';
import style from '../components/Slides/slides.module.css'



export default function SlideContainer() {
    const datas = fakeSlide

    return (
        <div className={style.SlideContainer}>
            <Slides data={datas} />
        </div>
    );
}