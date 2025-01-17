import Logo from "./Logo"
import {GrSearch} from "react-icons/gr"
import {FaRegCircleUser} from "react-icons/fa6"
import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom"
const Header = () => {
    return (
       <header className="h-16 shadow-md bg-white">
        <div className="h-full container mx-auto flex items-center justify-between px-4">
            <div className="">
                <Link to={"/"}>
                    <Logo w={90} h={50}/>
                </Link>
            </div>

            <div className="hidden lg:flex items-center w-full justify-center max-w-sm border rounded-full focus-within:shadow-md pl-2">
                <input type="text" placeholder="search product here ..." className="w-full outline-none"/>
                <div className="text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full bg-red-300">
                    <GrSearch/>
                </div>
            </div>

            <div className="flex items-center gap-7">
               <div className="text-3xl cursor-pointer">
                <FaRegCircleUser/>
               </div>

                  <div className="text-2xl relative">
                    <span>
                        <FaShoppingCart/>
                    </span>
                    <div className="bg-red-600  h-5 rounded-full text-white w-5 p-1 flex items-center justify-center absolute -top-2 -right-3">
                        <p className="text-sm">0</p>
                    </div>
                  </div>

                  <div>
                    <Link to={"/login"} className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-800">Login</Link>
                  </div>

            </div>
        </div>
       </header>
    )
}

export default Header