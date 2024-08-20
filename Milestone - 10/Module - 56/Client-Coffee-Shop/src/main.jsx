import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root.jsx'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import ErrorPage from "./Components/ErrorPage.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";
import SignIn from "./Components/Authenticate/SignIn.jsx";
import SignUp from "./Components/Authenticate/SignUp.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Users from "./Components/Users.jsx";

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://coffee-shop-backend-1-ppmw.onrender.com/coffee')
            },
            {
                path: '/addCoffee',
                element: <AddCoffee />
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`https://coffee-shop-backend-1-ppmw.onrender.com/coffee/${params.id}`)
            },
            {
                path: "/details/:id",
                element: <CoffeeDetails />,
                loader: ({ params }) => fetch(`https://coffee-shop-backend-1-ppmw.onrender.com/coffee/${params.id}`)
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/users',
                element: <Users />,
                loader: () => fetch('https://coffee-shop-backend-1-ppmw.onrender.com/users')
            }
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </QueryClientProvider>
    </StrictMode>,
)
