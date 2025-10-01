import { useState, useEffect } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
// import ApiData from 
import "../styles.css";
import { Outlet } from "react-router";

function App({ listOfRestaurants, filteredRestaurants, setFilteredRestaurants }) {
console.log("App.jsx")
   return (
    <>
      <Header
        listOfRestaurants={ listOfRestaurants }
        setFilteredRestaurants={setFilteredRestaurants} />
        <Outlet />
      <Body 
        filteredRestaurants={filteredRestaurants} 
        setFilteredRestaurants={setFilteredRestaurants} />
    </>
  );
}

export default App;
