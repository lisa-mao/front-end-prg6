import {Link, Outlet} from "react-router";
import Navigation from "./Navigation.jsx";
import ShowFlower from "./ShowFlower.jsx";

function Layout() {
    return (
        <>
            <header>
                <Navigation>

                </Navigation>
            </header>


            <main className="bg-[#FFDDAB]">
                <Outlet/>

            </main>

            <footer>

            </footer>

        </>)
}

export default Layout