import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom"
import App from "./src/App.jsx";
import Aboutus from "./src/component/Aboutus.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    {/* <RouterProvider router='<AppRouter />' /> */}
  </StrictMode>
)


// const AppRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/aboutus",
//     element: <Aboutus />,
//   }
// ])