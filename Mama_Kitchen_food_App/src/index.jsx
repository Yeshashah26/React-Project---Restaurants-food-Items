import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RestaurantProvider } from "./api/RestaurantProvider"; 
import App from "./App"; 
import Body from "./component/restaurant/Body"; 
import Profile from "./component/pages/Profile";
import ContactUs from "./component/pages/Contactus";
import RestaurantMenu from './component/restaurant/RestaurantMenu';
import Cart from "./component/pages/Cart";
import Error from "./component/common/Error";
import Login from "./component/common/Login"

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
        path: "/profile",
        element: <Profile />,
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
      },
      {
        path: "/login",
        element: <Login />,
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