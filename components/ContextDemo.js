import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext';


const ContextDemo = () => {
    const context = useContext(ThemeContext);
    console.log(context)

    return (
        <>
            Count: {context.state.count}
            <button onClick={() => context.dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => context.dispatch({ type: 'increment' })}>+</button>

            <div>{JSON.stringify(context)}</div>
        </>
    )
}

export default ContextDemo