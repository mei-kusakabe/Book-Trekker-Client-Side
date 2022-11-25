import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Categories from '../../Pages/Categories/Categories';
import CategoryDetails from '../../Pages/Categories/CategoryDetails';
import FourZeroFour from '../../Pages/FourZeroFour/FourZeroFour';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/allbookscategory/:CategoryId',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allbookscategory/${params.CategoryId}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]

    },
    { path: '*', element: <FourZeroFour></FourZeroFour> }
])