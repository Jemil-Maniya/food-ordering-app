import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
  
    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      
      sla,
    }= resData?.info


    return (
        <div
          className="res-card border-solid border-green-200 bg-amber-200 m-4 p-4 w-60 h-auto justify-center hover:bg-orange-300 rounded-lg  "
        >
          <img
            className="res-logo w-55 h-50 rounded-lg "
            src={ CDN_URL + cloudinaryImageId }
              alt="Biryani"/>
          <h3 className="text-lg font-semibold">{name}</h3>
          <h4>{cuisines.join(', ')}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.slaString}</h4>
        </div>
          );
        };


export const Veg = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="absolute mx-4 bg-green-300 p-2 rounded-lg"> Veg Available </label> 
        <RestaurantCard {...props}  />
      </div>
    )
  }
}


export default RestaurantCard;
        