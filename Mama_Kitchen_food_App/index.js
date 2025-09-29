import ReactDOM from "react-dom/client"; 
import App from "./src/App.jsx";
import Aboutus from "./src/component/Aboutus";
import Contactus from "./src/component/Contactus";
import Cart from "./src/component/Cart"
import { createBrowserRouter, RouterProvider } from "react-router";

const appRoute = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/Aboutus", element: <Aboutus />},
  {path: "/Contactus", element: <Contactus />},
  {path: "/Cart", element: <Cart />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRoute} />
)