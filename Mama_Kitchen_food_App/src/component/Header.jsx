import { useState, useEffect } from "react";

const Header = ({ listOfRestaurants, setFilteredRestaurants }) => {
  console.log("**......Header......**")
  const [btnText, setBtnText] = useState("Login");
  const [searchText, setSearchText] = useState("");

  // if the dependence array is empty, then useEffect will run each everytime the Header Component will render 
  // if the dependence array is [], then useEffect will run only once
  // if the dependence array is [btnText], then useEffect will be only run when there is a change in the state of [btnText]
  useEffect(() =>{
    console.log("Effect Called");
  }, [ ])
  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

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
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="nav-Items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
