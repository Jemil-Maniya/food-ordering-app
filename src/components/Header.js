import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus()
   

    const {loggedInUser} = useContext(UserContext)
    // console.log(loggedInUser)

    // subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    useEffect(() =>{
        console.log("use effect called")
    }, [btnNameReact]);

    return (
        <div className="flex justify-between bg-pink-50">
            <div className="logo-conainer">
                <img className="w-54" src= {LOGO_URL} />
            </div>
            <div className="flex items-center" >
                <ul className="flex p-4 m-4 ">
                    <li className="px-4"> Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to={"/"} > Home </Link></li>
                    <li className="px-4"><Link to={"/about"}> About us </Link></li>
                    <li className="px-4"><Link to={"/contact"}> Contact us </Link></li>
                    <li className="px-4"><Link to={"/grocery"}> Grocery </Link></li>
                    <li className="px-4 font-bold text-xl"><Link to={"/cart"}> Cart - ( {cartItems.length}  items) </Link></li>
                    <button className="login" onClick={ () => {btnNameReact === "Login" ? setBtnNameReact("Log out") : setBtnNameReact("Login");
                         console.log(btnNameReact);}  }>
                        {btnNameReact}
                         
                    </button>

                    <li className="px-4 font-bold">
                    <Link className="links">{loggedInUser}</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
};

export default Header;