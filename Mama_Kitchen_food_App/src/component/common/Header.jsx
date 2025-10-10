import { useState } from "react";
import { Link } from "react-router-dom";
import { useRestaurants } from "../../api/RestaurantProvider"; 

const Header = () => {
  console.log("Header 1"); // Debugging: Remove in production

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

  console.log("Header 2"); // Debugging

  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbyW_eHTqPgkPaLzENSxarujqmHQhevJsgw&s"
            alt="LOGO"
            id="logo-img"
          />
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          className="search-textbox"
          value={searchText}
          onChange={handleSearch}  
          placeholder="Search restaurants..."
          disabled={loading} 
        />
        {/* Optional: Search Button
        <button className="search-button" onClick={handleSearch} disabled={loading}>
          Search
        </button>
        */}
      </div>
      <div className="nav-Items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li>
            <button
              className="login"
              onClick={() =>
                btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
              }
            >
              {btnText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;