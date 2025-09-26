import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer";

const Body = ({ filteredRestaurants, setFilteredRestaurants }) => {
  if (filteredRestaurants.length == 0) return <Shimmer />;

  //Restauarants with avgrating more than 4.4 will be displayed
  const topRest = () => {   
    const filtering = filteredRestaurants.filter((restaurant) => (restaurant.info.avgRating > 4.4));
    setFilteredRestaurants(filtering)
  };

  return (
  <>
    <div> 
      <button className="filter-btn" onClick={topRest}> Top Rated Restaurants </button> 
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
