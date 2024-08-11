import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../Root.jsx";
import Phones from "./Components/Phones.jsx";
import Phone from "./Components/Phone.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/phones",
                element: <Phones />,
                loader: () => fetch('http://localhost:3000/phones')
            },
            {
                path:"/phone/:id",
                element: <Phone />,
                loader: ({params}) => fetch(`http://localhost:3000/phone/${params.id}`)
            }
        ],
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
