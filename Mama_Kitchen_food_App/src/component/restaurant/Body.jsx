import RestaurantCard from "./RestaurantCard";
import Shimmer from "../common/Shimmer";
import ButtonComponent from "../common/ButtonComponent";
import { useRestaurants } from "../../api/RestaurantProvider";

const Body = () => {
  const { filteredRestaurants, setFilteredRestaurants, loading, error } = useRestaurants();

  if (loading) return <Shimmer />;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <p className="text-red-600 text-lg font-semibold mb-4">
          Error loading restaurants: {error}
        </p>
        <button
          onClick={() => useRestaurants().refetch()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  if (filteredRestaurants.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <Shimmer />
      </div>
    );
  }

  // Filter top-rated restaurants
  const handleTopRated = () => {
    const filtering = filteredRestaurants.filter(
      (restaurant) => restaurant.info?.avgRating > 4.4
    );
    setFilteredRestaurants(filtering);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* Filter Section */}
      <div className="flex justify-between items-center mb-6 -mt-5">
        <h2 className="text-2xl font-bold text-gray-800 font-sans">
         Explore Restaurants 
        </h2>
        <ButtonComponent
          label="Top Rated Restaurants"
          onClick={handleTopRated}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition"
        />
      </div>

      {/* Restaurant Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Body;
