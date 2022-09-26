
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"

const Layout = ({ children }) => {
    return (
        <div className="viewHight">
            <NavBar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;