import React from "react"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar"

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