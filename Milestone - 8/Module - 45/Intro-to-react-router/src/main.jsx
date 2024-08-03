import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// from react router 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contact from './Component/Contact/Contact.jsx';
import Batches from './Component/Batches/Batches.jsx';
import Home from './Component/Home/Home.jsx'
import Users from './Component/Users/Users.jsx';
import UserDetails from "./Component/UserDetails/UserDetails.jsx";
import NavContainer from "./Component/NavContainer/NavContainer.jsx"
import Posts from "./Component/Posts/Posts.jsx";
import PostDetails from "./Component/PostDetails/PostDetails.jsx";
import PostComments from "./Component/PostComments/PostComments.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavContainer></NavContainer>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/batches",
        element: <Batches></Batches>
      },
      {
        path: "/students",
        element: <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: "/post/:postId",
        element: <PostDetails></PostDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "/post/:postId/comments",
        element: <PostComments></PostComments>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
