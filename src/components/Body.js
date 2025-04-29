import RestaurantCard, {Veg} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
console.log("body rendered");

const [listOfRestaurant, setListOfRestaurant] = useState([]);
const [filteredRestaurants, setFilteredRestaurants] = useState([]);
const [searchTexrt, setSearchText] = useState("");
const VegRestaurant = Veg(RestaurantCard);
console.log(listOfRestaurant);

useEffect(() =>{
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2254864&lng=72.8893093&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ");

  const json = await data.json();
  console.log(json);
  // optional chaining
  setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
console.log(listOfRestaurant);

const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return <h1>Bad network check it</h1>

// conditional rendering
// if(listOfRestaurant.length === 0) {
//   return <Shimmer />
// };

return listOfRestaurant.length === 0 ? (<Shimmer/>) : (
  <div className="body">
    <div className="search-container flex">
      <div className= "search flex m-4 p-4">
        <input type="text" className="search-box border-2 rounded-ee-lg" value={searchTexrt} onChange={(e) => {
          setSearchText(e.target.value);
        }}/>
        <button className="ml-4 px-4 bg-green-200 rounded-lg hover:bg-green-400" onClick={() =>{
          const searchedRes = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchTexrt.toLowerCase())); //here we can use the same const variable name filteredRestaurant because it is inside the a block scope of button button to understand in a better way we will change the variable namr to searchedRes
          setFilteredRestaurants(searchedRes) //here we can use the same const variable name filteredRestaurant because it is inside the a block scope of button button to understand in a better way we will change the variable namr to searchedRes
          console.log(searchTexrt)
        }}> Search</button>
      </div>



      <button className="filter-btn my-7 px-2 rounded-lg bg-green-200 hover:bg-green-400 " onClick={() => {
        console.log("clicked")
        const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
        setListOfRestaurant(filteredList);
      }}> Top rated </button>
    </div>

    <div className="res-container flex flex-wrap justify-between">
      {filteredRestaurants.map((restaurant) => (
        <Link  key={restaurant.info.id}to ={"/restaurants/" + restaurant.info.id}>
           
           {restaurant?.info?.veg ? (<VegRestaurant resData={restaurant}/>) :
           (<RestaurantCard  resData={restaurant} />)}
          
          </Link>
      ))}
      
    </div>
  </div>
); 



};

export default Body;
