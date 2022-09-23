import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext';


const ContextDemo = () => {
    const theme = useContext(ThemeContext);
    console.log(theme)
    return (
        <div>ContextDemo</div>
    )
}

export default ContextDemo