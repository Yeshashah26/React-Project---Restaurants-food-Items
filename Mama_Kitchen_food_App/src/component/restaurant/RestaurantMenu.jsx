import { useEffect,useState } from "react";
import { useParams } from "react-router";
// import "../../../styles/styles.css";
// import Shimmer from "../common/Shimmer";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const [ restaurantMenuData, setRestaurantMenuData ] = useState();

console.log("ResId: " ,{resId})

  useEffect(()=>{
      fetchMenuData();
  },[resId]);

  const fetchMenuData = async () =>{
    try{
      const data = await fetch(`http://localhost:5000/restaurant/${resId}`);
      console.log("Data: ",data) 
      const jsonContent = await data.json();
      setRestaurantMenuData(jsonContent.data);
    }
    catch(error){
      console.log("Frontend fetch",error);
    }
  };
  // if (restaurantMenuData === null) return <Shimmer />;
  // console.log("Data from global varible: ", restaurantMenuData);
  if (!restaurantMenuData) {
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
      <h1 className="restName">Name: {name}</h1>
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