import {Footer} from "../component/Footer";
import {Outlet} from "react-router-dom";
import {Navbar} from "../component/Navbar";
import {Header} from "../component/Header";

export const Page = () => {
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}