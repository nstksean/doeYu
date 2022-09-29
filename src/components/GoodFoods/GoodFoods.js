import style from "./goodfoods.module.css"

export default function GoodFoods() {
    return (
        <div className={style.hotFoodGroup}>
            <div className={style.title}>
                人氣美食
            </div>
            <div className={style.stackFoodContainer}>
                <div className={style.foodStackItem}>
                    <div className={style.foodType}>中式美食</div>
                </div>
                <div className={style.foodStackItem}>
                    <div className={style.foodType}>夜市小吃</div>
                </div>
                <div className={style.foodStackItem}>
                    <div className={style.foodType}>異國料理</div>
                </div>
                <div className={style.foodStackItem}>
                    <div className={style.foodType}>甜點冰品</div>
                </div>
                <div className={style.foodStackItem}>
                    <div className={style.foodType}>伴手禮</div>
                </div>
                <div className={style.foodStackItem}>
                    <div className={style.foodType}>全部類別</div>
                </div>


            </div>
        </div>
    );
}