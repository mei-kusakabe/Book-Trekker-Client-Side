import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import FourZeroFour from '../../Pages/FourZeroFour/FourZeroFour';
import Home from '../../Pages/Home/Home';


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
                path: '/blog',
                element: <Blog></Blog>
            }
        ]

    },
    { path: '*', element: <FourZeroFour></FourZeroFour> }
])