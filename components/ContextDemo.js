import { useContext } from 'react'
import { DECREMENT, INCREMENT, RootContext } from '../context/RootContext';


const ContextDemo = () => {
    const rootContextValue = useContext(RootContext);
    console.log(rootContextValue)

    return (
        <>
            <button onClick={() => rootContextValue.dispatch({ type: DECREMENT, payload: 22 })}>-</button>
            <button onClick={() => rootContextValue.dispatch({ type: INCREMENT, payload: 11 })}>+</button>

            <div>{JSON.stringify(rootContextValue)}</div>
        </>
    )
}

export default ContextDemo