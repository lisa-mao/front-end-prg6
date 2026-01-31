import {Link} from "react-router";
import Logo from "./images/flowerentry.png"

function Navigation() {
    return (
        <>
            <nav className="bg-[#5F8B4C] font-medium space-x-5 p-5 ">
                <div className="flex flex-row items-end gap-3 ">
                    <Link to={'/'}>
                        <div className="flex flex-row ">

                            <img className="size-13" src={Logo} alt="logo"/>

                            <h1 className=" flex items-end text-xl pl-2">BloomNation</h1>
                        </div>
                    </Link>

                    <Link className="bg-[#FF9A9A] border-2 border-solid border-[#945034] p-1 text-black" to={'/create'}>Create Entry</Link>
                </div>
            </nav>
        </>
    )


}

export default Navigation