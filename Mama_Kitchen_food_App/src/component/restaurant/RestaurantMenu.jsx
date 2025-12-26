import { useEffect,useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [ restaurantMenuData, setRestaurantMenuData ] = useState();

  useEffect(()=>{
      fetchMenuData();
  },[resId]);

  const fetchMenuData = async () =>{
    try{
      const data = await fetch(`http://localhost:5000/restaurant/${resId}`);
      const jsonContent = await data.json();
      setRestaurantMenuData(jsonContent);
    }
    catch(error){
      console.log("Frontend fetch",error);
    }
  };
  if (!restaurantMenuData) {
    return <p>Loading ...</p>;
  }
 return (<>
 <div className="restMenu max-w-9xl mx-auto bg-white p-2 mt-4">
  <div className="restMenuHeader">
    <div className="w-full max-w-5xl mx-auto py-6">

  <div className="flex items-start justify-between">

    {/* LEFT SECTION */}
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-gray-900">
        {restaurantMenuData.name}
      </h1>

      <p className="text-gray-600 text-lg">
        Cuisines: {restaurantMenuData.cuisines}
      </p>

      <p className="text-gray-500 text-sm">
        Address: {restaurantMenuData.address}
      </p>
    </div>

    {/* RIGHT SECTION (Rating Box) */}
    <div className="flex flex-col items-end">
      
      {/* Rating box */}
      <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-md font-bold text-sm">
        <span>{restaurantMenuData.avgRating}</span>
        <span>★</span>
      </div>

      {/* Count + label */}
      <div className="mt-1 text-right">
        <p className="text-gray-800 font-semibold text-sm">
          {restaurantMenuData.ratingCount}
        </p>

        <p className="text-gray-500 text-xs border-t border-dotted border-gray-300 pt-1">
          {restaurantMenuData.ratingType} Ratings
        </p>
      </div>
    </div>
  </div>
    </div>
    <MenuCard item={restaurantMenuData.categories.items} />
  </div>
</div>
</>
)
}
export default RestaurantMenu;