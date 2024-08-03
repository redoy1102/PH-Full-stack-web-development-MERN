import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../Root/Root.jsx";
import Home from "./Component/Home/Home.jsx";
import Login from "./Component/Login/Login.jsx";
import Register from "./Component/Register/Register.jsx";
import Settings from "./Component/Settings/Settings.jsx";
import Profile from "./Component/Profile/Profile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/settings",
                element: <Settings></Settings>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
