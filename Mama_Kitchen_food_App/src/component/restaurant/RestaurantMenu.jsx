// here in this component the code is correct but Swiggy API is throwing an error of 202 status code
// 202 Status Code:- the request is sent to server and sever also receives it but don't provide full(complete) data

import { useEffect,useState } from "react";
import "../../../styles/styles.css";
import Shimmer from "../common/Shimmer";

const RestaurantMenu = () => {
const [ restaurantMenuData, setRestaurantMenuData ] = useState(null);

useEffect(()=>{
    fetchMenuData();
},[]);


const fetchMenuData = async () =>{
  try{
    const data = await fetch(
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3147695&lng=70.8022415&restaurantId=984727&catalog_qa=undefined&submitAction=ENTER" 
);

    if(!data.ok)
    {
      const errorText = await data.text()
      throw new Error(`HTML :${data.status}. Message: ${errorText}`)
    }
  

    console.log("this is data ", data);
    const jsonContent = await data.json();
    setRestaurantMenuData(jsonContent);
  }
  catch(error){
    console.log("Error: ",error);
  }
};
if (restaurantMenuData === null) return <Shimmer />;
console.log("Data from global varible: ", restaurantMenuData);
const { name, cuisines, areaName, locality, avgRating,costForTwoMessage } = restaurantMenuData?.data?.cards?.[2]?.card?.card?.info;
const { name1, category, defaultPrice, description, imageId, inStock } = restaurantMenuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info;
const { rating } = restaurantMenuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.ratings?.aggregatedRating;

return (<>
<div className="restMenuItem">
  <div className="restMenuHeader">
    <h1 className="restName">{name}</h1>
    <p className="restdetails">
      {cuisines.join(',')}<br></br>
      {areaName} - {locality}<br></br>
      {avgRating} Rating | {costForTwoMessage}
    </p>
  </div>
  <div className="restMenuItemBody">
    <b className="itemName">{name} - Rs {defaultPrice / 100}</b>
    <p className="itemCategory">{ category }</p>
    <p className="itemDescription">{ description }</p>
  </div>
</div>
    </>
)
}
export default RestaurantMenu;