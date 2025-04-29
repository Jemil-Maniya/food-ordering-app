import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantDrop from "./RestaurantDrop";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // console.log(resId)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

  const [indexShow, setIndexShow] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, city, avgRating } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; //now it is not useful because of this below categopry section that we added later
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div>
      <h1 className="font-bold text-xl text-center p-4 ">
        {name} - {city}{" "}
      </h1>
      <h3 className="text-center font-semibold mb-4">{avgRating} stars</h3>
      <h3 className="font-bold text-xl p-4 text-center border-t border-b ">
        {" "}
        Menu{" "}
      </h3>

      <p>
        {categories.map((c, index) => (
          <RestaurantDrop
            key={c?.card?.card.title}
            data={c?.card?.card}
            showItems={index === indexShow ? true : false}
            setIndexShow={() => setIndexShow(index)}
          />
        ))}
      </p>
    </div>
  );
};

export default RestaurantMenu;
