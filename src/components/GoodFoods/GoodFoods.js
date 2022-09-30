import { RootContext } from "../../context/rustContext";
import style from "./goodfoods.module.css"
import { useContext } from "react";

export default function GoodFoods() {
    const rootContextValue = useContext(RootContext)

    // if (rootContextValue.state.rustAPI_data === null) {
    //     return datas == []
    // }
    // else () => {
    //     return datas = rootContextValue.state.rustAPI_data
    // }

    const datas = rootContextValue.state.rustAPI_data
    const loading = rootContextValue.state.rustAPI_isLoaded
    console.log({ datas, loading });

    return (
        <div className={style.hotFoodGroup}>
            <div className={style.title}>
                人氣美食
            </div>
            <div className={style.stackFoodContainer}>
                {
                    datas.slice(0, 5).map((data) =>
                        <div key={data.ScenicSpotID}
                            className={style.foodStackItem}>
                            <div className={style.foodType}> {data.ScenicSpotName}</div>
                        </div>
                    )

                }

                {/* <div className={style.foodStackItem}>
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
                </div> */}

            </div>

        </div >
    );
}