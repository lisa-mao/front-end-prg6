import {Link, Outlet} from "react-router";
import Navigation from "./Navigation.jsx";
import ShowFlower from "./ShowFlower.jsx";
import Footer from "./Footer.jsx"

function Layout() {
    return (
        <>
            <header>
                <Navigation>

                </Navigation>
            </header>


            <main className="bg-[#FFDDAB] min-h-screen ">
                <Outlet/>

        </main>
            <Footer/>
        </>)
}

export default Layout