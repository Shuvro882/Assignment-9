
import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import Contact from "../Pages/Contact";
import ForgetPassword from "../Pages/ForgetPassword";
import GameDetails from "../Pages/GameDetails";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import MyProfile from "../Pages/MyProfile";


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
      },
      {
        path: "/games/:id",
        element:
        <PrivateRoute>
          <GameDetails />
        </PrivateRoute>
      },
      {
        path: "/MyProfile",
        element:
        <PrivateRoute>
          <MyProfile />
        </PrivateRoute>
      }
    ],
  },
  {
    path:'/*',
    element:<ErrorPage />
  }
]);

export default router;
