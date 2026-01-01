
import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>, 
    children: [
      { path: "/",
         element: <Home /> 
      },
      { path: "/login", 
        element: <Login /> 
      },
      { path: "/register",
         element: <Register /> 
      },
    ],
  },
]);

export default router;
