import { useState, useEffect } from "react";
import App from "./App"
const ApiData = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch API
      const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3147695&lng=70.8022415&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      // JSON DATA into Object
      const json = await data.json();
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants); // show all initiallyo
      
    } catch(error) {
      console.error("Error in Fetching: ", error);
    }
  };
  console.log("ApiData.jsx")
  return(
    <div>
        <App listOfRestaurants={ listOfRestaurants } 
             setFilteredRestaurants={ setFilteredRestaurants } 
             filteredRestaurants={ filteredRestaurants } />
    </div>
  );

}

export default ApiData;