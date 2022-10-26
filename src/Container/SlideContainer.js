
import { fakeSlide as datas } from '../data/mockAPI';
import Slides from '../components/Slides/Slides';
import style from '../components/Slides/slides.module.css'



export default function SlideContainer() {

    return (
        <div className={style.SlideContainer}>
            <Slides contextData={datas} />
        </div>
    );
}