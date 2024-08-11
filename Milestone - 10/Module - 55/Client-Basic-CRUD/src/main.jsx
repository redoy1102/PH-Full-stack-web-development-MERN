import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";
import Users from "./Component/Users.jsx";
import Update from "./Component/Update.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/users",
                element: <Users />,
                loader: () => fetch('http://localhost:3000/users')
            },
            {
                path: '/update/:id',
                element: <Update />,
                loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`)
            }
        ],
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
