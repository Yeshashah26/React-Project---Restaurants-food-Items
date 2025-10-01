import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router";
import AppRoutes from "./src/routes/AppRoutes";

console.log("Index.js")
const root = ReactDom.createRoot(document.getElementById("root"));
root.render( 
  <RouterProvider router={AppRoutes} />
);