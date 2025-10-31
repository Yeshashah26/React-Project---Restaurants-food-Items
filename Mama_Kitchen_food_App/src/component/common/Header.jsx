import { useState } from "react";
import { useRestaurants } from "../../api/RestaurantProvider";
import { IoSearchOutline, IoFastFoodSharp } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi"; // For mobile menu toggle
import ButtonComponent from "./ButtonComponent";
import NavItems from "./NavItems";
import Login from "./Login";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const [searchText, setSearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-5 md:px-10">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <IoFastFoodSharp className="text-4xl md:text-5xl text-yellow-500" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Fast Food</h1>
        </div>

        {/* Desktop Search Box */}
        <div className="relative hidden md:block w-1/3">
          <IoSearchOutline className="absolute left-3 top-3 text-gray-500 text-lg" />
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full pl-10 py-2 text-sm md:text-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 outline-none disabled:bg-gray-100"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={handleSearch}
            disabled={loading}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-gray-900 font-semibold text-lg">
            <NavItems to="/" navname="Home" />
            <NavItems to="/aboutus" navname="About Us" />
            <NavItems to="/contactus" navname="Contact Us" />
          </ul>

          <RiShoppingBag3Fill className="text-3xl text-gray-800 hover:text-yellow-500 transition" />

          <ButtonComponent
            label={btnText}
            onClick={() => {
              <Login />
              alert("Hello");
            }}
          />
        </nav>

        {/*  Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden lg:hidden bg-white border-t border-gray-200 shadow-sm px-5 py-4">
          {/* Search */}
          <div className="mb-3 relative">
            <IoSearchOutline className="absolute left-3 top-3 text-gray-500 text-lg" />
            <input
              type="text"
              className="w-full border border-gray-300 rounded-full pl-10 py-2 text-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 outline-none disabled:bg-gray-100"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={handleSearch}
              disabled={loading}
            />
          </div>
        {/* NavBar */}
          <ul className="flex flex-col gap-3 text-gray-900 font-medium text-lg mb-4">
            <NavItems to="/" navname="Home" />
            <NavItems to="/aboutus" navname="About Us" />
            <NavItems to="/contactus" navname="Contact Us" />
          </ul>
        {/* Cart and Login */}
          <div className="flex items-center justify-between">
            <RiShoppingBag3Fill className="text-3xl text-gray-800 hover:text-yellow-500 transition" />
            <ButtonComponent
              label={btnText}
              onClick={() => 
                setBtnText(btnText === "Login" ? "Logout" : "Login")
              }
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
