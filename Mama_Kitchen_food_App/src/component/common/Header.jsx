import { useState } from "react";
import { useRestaurants } from "../../api/RestaurantProvider";
import { IoSearchOutline, IoFastFoodSharp } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";
import ButtonComponent from "./ButtonComponent";
import NavItems from "./NavItems";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const [searchText, setSearchText] = useState("");

  const { listOfRestaurants, setFilteredRestaurants, loading } = useRestaurants();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchText(query);

    if (query === "") {
      setFilteredRestaurants(listOfRestaurants);
    } else {
      const filtered = listOfRestaurants.filter((restaurant) =>
        restaurant.info?.name?.toLowerCase().includes(query)
      );
      setFilteredRestaurants(filtered);
    }
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* --- Logo Section --- */}
        <div className="flex items-center gap-3">
          <IoFastFoodSharp className="text-6xl text-yellow-500" />
          <h1 className="text-3xl font-bold text-gray-800">Fast Food </h1>
        </div>

        {/* --- Search Box --- */}
        <div className="relative w-1/3 hidden md:block">
          <IoSearchOutline className="absolute left-3 top-3 text-gray-700 text-xl" />
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full pl-10 py-2 text-md hover:border-yellow-500 transition-color focus:outline-none focus:ring-1 focus:ring-yellow-400 transition disabled:bg-gray-100"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={handleSearch}
            disabled={loading}
          />
        </div>

        {/* --- Navigation --- */}
        <nav className="flex items-center gap-6">
          <ul className="flex list-none items-center gap-6 text-gray-900 font-bold text-lg">
            <NavItems to="/" navname="Home" />
            <NavItems to="/aboutus" navname="About Us" />
            <NavItems to="/contactus" navname="Contact Us" />
          </ul>

          {/* --- Cart Icon --- */}
          <RiShoppingBag3Fill className="text-3xl text-gray-800 hover:text-yellow-500 transition" />

          {/* --- Login / Logout Button --- */}
          <ButtonComponent
            label={btnText}
            onClick={() =>
              setBtnText(btnText === "Login" ? "Logout" : "Login")
            }
          />
        </nav>
      </div>

      {/* --- Mobile Search --- */}
      <div className="block md:hidden px-4 pb-3">
        <div className="relative">
          <IoSearchOutline className="absolute left-3 top-3 text-gray-500 text-xl" />
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={handleSearch}
            disabled={loading}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
