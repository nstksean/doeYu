import { useContext } from 'react'
import { RootContext } from '../../context/rustContext'
import style from './tryContextDemo.module.css'

const TryContextDemo = () => {
    const rootContextValue = useContext(RootContext)
    console.log(rootContextValue)

    return (
        <>
            {/* <button onClick={() => rootContextValue.dispatch({ type: DECREMENT, payload: 22 })}>-</button>
            <button onClick={() => rootContextValue.dispatch({ type: INCREMENT, payload: 11 })}>+</button> */}

            <div className={style.none}>{JSON.stringify(rootContextValue)}</div>
        </>
    )
}

export default TryContextDemo
