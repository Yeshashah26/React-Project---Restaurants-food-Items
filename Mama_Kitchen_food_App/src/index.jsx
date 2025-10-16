import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RestaurantProvider } from "./api/RestaurantProvider"; 
import App from "./App"; 
import Body from "./component/restaurant/Body"; 
import Aboutus from "./component/pages/Aboutus";
import ContactUs from "./component/pages/Contactus";
import RestaurantMenu from './component/restaurant/RestaurantMenu';
import Cart from "./component/pages/Cart";
import Error from "./component/common/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <Error />,
    children: [
      {
        index: true, 
        element: <Body />,
      },
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
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      }
    ],
  },
]);

console.log("Index.js");

const root = createRoot(document.getElementById("root"));
root.render(
  <RestaurantProvider> 
    <RouterProvider router={router} />
  </RestaurantProvider>
);