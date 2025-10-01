import { createBrowserRouter } from "react-router";
import Aboutus from "./src/component/pages/Aboutus";
import ContactUs from "./src/component/pages/Contactus";
import Cart from "./src/component/pages/Cart";
import Error from "./src/component/common/Error";

const AppRoutes = () =>{
    const myroutes = createBrowserRouter([
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
    return {myroutes}
}

export default AppRoutes;