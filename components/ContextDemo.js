import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext';


const ContextDemo = () => {
    const context = useContext(ThemeContext);
    console.log(context)
    const testFn = () => {
        context.setfirst({
            light: {
                foreground: "#111111",
                background: "#111111"
            },
            dark: {
                foreground: "#111111",
                background: "#111111"
            }
        })

    }
    return (
        <>
            <button onClick={testFn}>dd</button>
            <div>{JSON.stringify(context.first)}</div>
        </>
    )
}

export default ContextDemo