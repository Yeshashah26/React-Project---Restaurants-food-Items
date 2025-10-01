import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./src/App";
// import Body from "./src/component/Body";
import ApiData from "./src/ApiData";
import Aboutus from "./src/component/Aboutus";
import ContactUs from "./src/component/Contactus";
import Cart from "./src/component/Cart";
import Error from "./src/component/Error";

const myapp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      // {
      //   path: "/",
      //   element: <Body filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} />,
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
    errorElement: <Error />
  },
])
console.log("Index.js")
const root = ReactDom.createRoot(document.getElementById("root"));
root.render( 
  <RouterProvider router={myapp} />
);