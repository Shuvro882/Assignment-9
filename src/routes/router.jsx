
import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import Contact from "../Pages/Contact";
import ForgetPassword from "../Pages/ForgetPassword";


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
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
      path: "/forget-password",
  element: <ForgetPassword />
}
    ],
  },
  {
    path:'/*',
    element:<ErrorPage />
  }
]);

export default router;
