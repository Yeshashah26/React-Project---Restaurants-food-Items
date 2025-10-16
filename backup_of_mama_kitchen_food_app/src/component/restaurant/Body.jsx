import RestaurantCard from "./RestaurantCard";
import Shimmer from "../common/Shimmer";
import { useRestaurants } from "../../api/RestaurantProvider"; 

const Body = () => {
  const { filteredRestaurants, setFilteredRestaurants, loading, error } = useRestaurants();
  if (loading) {
    return <Shimmer />;
  }
  if (error) {
    return (
      <div className="error-message">
        <p>Error loading restaurants: {error}</p>
        <button onClick={() => useRestaurants().refetch()}>Retry</button>
      </div>
    );
  }

  // Top-rated filter function 
  const topRest = () => {
    const filtering = filteredRestaurants.filter(
      (restaurant) => restaurant.info?.avgRating > 4.4  
    );
    setFilteredRestaurants(filtering);
  };

  // Show Shimmer or message if no restaurants (after loading)
  if (filteredRestaurants.length === 0) {
    return (
      <div className="no-results">
        <Shimmer />  
      </div>
    );
  }

  return (
    <>
      <div className="filter-section">
        <button 
          className="filter-btn" 
          onClick={topRest}
          disabled={loading}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-Container">
        <div className="body-res-card">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;