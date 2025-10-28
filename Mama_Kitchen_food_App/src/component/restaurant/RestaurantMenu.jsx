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
    const data = await fetch("http://localhost:5000/");
    if(!data.ok)
    {
      const errorText = await data.text()
      throw new Error(`HTML :${data.status}. Message: ${errorText}`)
    }
    const jsonContent = await data.json();
    setRestaurantMenuData(jsonContent);
  }
  catch(error){
    console.log("Error: ",error);
  }
};
  if (restaurantMenuData === null) return <Shimmer />;
  console.log("Data from global varible: ", restaurantMenuData);
  if (!restaurantMenuData || !restaurantMenuData.data.cards) {
  return <p>Loading ...</p>;
  }
  const { name,areaName, avgRating, costForTwo, locality } = restaurantMenuData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[1]?.info;
  const { cuisines } = restaurantMenuData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[1]?.info?.cuisines;
  // const { name1, category, defaultPrice, description, imageId, inStock } = restaurantMenuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info;
  // const { rating } = restaurantMenuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.ratings?.aggregatedRating;
 console.log({cuisines})
 return (<>
  <div className="restMenuItem">
    <div className="restMenuHeader">
      <h1 className="restName">{name}</h1>
      <p className="restdetails">
        Rating: {avgRating} | {costForTwo} <br></br>
        {cuisines} 
        Area: {areaName} - {locality}
      </p>
    </div>   
    {/* <div className="restMenuItemBody">
      <b className="itemName">Name - Rs {defaultPrice / 100}</b>
      <p className="itemCategory">{ category }</p>
      <p className="itemDescription">{ description }</p>
    </div> */}
  </div>
      </>
)
}
export default RestaurantMenu;