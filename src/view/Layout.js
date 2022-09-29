import style from "./layout.module.css"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className={style.viewHight}>{children}</div>
            <Footer />
        </>
    );
}

export default Layout;