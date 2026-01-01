
import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import About from "../Pages/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>, 
    children: [
      { index:true,
         element: <Home /> 
      },
      { path: "/login", 
        element: <Login /> 
      },
      { path: "/register",
         element: <Register /> 
      },
      {
        path:"/about",
        element:<About />
      }
    ],
  },
]);

export default router;
