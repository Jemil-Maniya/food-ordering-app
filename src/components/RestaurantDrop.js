import { useState } from "react";
import Listitems from "./Listitems";

const RestaurantDrop = ({data, showItems, setIndexShow }) => {
    // console.log(data)

const clickHandler = () =>{
    setIndexShow() 

}

// const [showItems, setShowItems] = useState(false)
// const clickHandler = () => {
//     // if(showItems) {setShowItems(false)} else{setShowItems(true)}  
//     setShowItems(!showItems) swiggy also user this kind not the lifitng state up kind
// }

    return (
        <div>
            <div className="m-auto my-4 p-2 text-center w-6/12 bg-amber-200  font-semibold cursor-pointer">
                <div className="flex justify-between" onClick={clickHandler}>
                <span>
                    {data.title} ({data.title.length})
                </span>
                <span> 🔽 </span>
                </div>
                 
                { showItems && <Listitems items={data?.itemCards }/>}
            </div>

            <div>
            
            </div>
        </div>
    )
}

export default RestaurantDrop;




