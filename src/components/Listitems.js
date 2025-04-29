import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const Listitems = ({items}) => {
    // console.log(items)
    // const itemImage = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"
    
    const dispatch = useDispatch() 
    
    const handleAddItem = (i) => {
        // dipatch an action
        dispatch(addItem(i)); 
    }; 

    return(
        <div>
            {items.map((i)=>
                 <div className="p-2 m-2 border-b-2 border-gray-400 text-left flex" key={i.card.info.id}>
                    
                   <div className="w-16/20">
                    <div className="text-lg" >
                    <span>{i.card.info.name}</span>
                    <span> - Rs.{i.card.info.price/100}</span>
                    <p className="text-[13px]">{i.card.info.description}</p>
                    </div>  
                </div>
                    <div className="w-4/20 ">
                        <div className="absolute">
                            <button className="p-[2.5px] bg-black text-white shadow-lg rounded-md  " onClick={() =>handleAddItem(i)} >Add+</button>
                        </div>
                        <img className="ml-auto rounded-lg"  src={CDN_URL + i.card.info.imageId} />
                    </div>

                    
                    
                 </div> )}
        </div>
    )
}

export default Listitems;