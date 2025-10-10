import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import ApiData from "../api/ApiData";
import Body from "../component/restaurant/Body";
import Aboutus from "../component/pages/Aboutus";
import ContactUs from "../component/pages/Contactus";
import Cart from "../component/pages/Cart";
import Error from "../component/common/Error";

  
  const myroutes = createBrowserRouter([
  {
    path: "/",
    element: <ApiData />,
    errorElement: <Error />,
    children:[
      // {
      //   index: true,
      //   // element: <Body />,
      // element: <Body filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} />,
      // },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
    ])
console.log("AppROutes.jsx");
export default myroutes;