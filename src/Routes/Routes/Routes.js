import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Categories from '../../Pages/Categories/Categories';
import CategoryDetails from '../../Pages/Categories/CategoryDetails';
import AddProduct from '../../Pages/Dashboard/AddProduct/AddProduct';
import AllBuyer from '../../Pages/Dashboard/AllBuyers/AllBuyer';
import AllSellers from '../../Pages/Dashboard/AllSellers/AllSellers';
import MyOrder from '../../Pages/Dashboard/MyOrder/MyOrder';
import FourZeroFour from '../../Pages/FourZeroFour/FourZeroFour';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import AdminRoute from '../AdminRoute/AdminRoute';
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
            },


        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/myorder',
                element: <MyOrder></MyOrder>
            },

            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            // {
            //     path: '/dashboard/allusers',
            //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            // },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },

            // {
            //     path: '/users/:email',
            //     element: <Na></NavBar>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/users/${params.email}`)
            // }
            // {
            //     path: '/dashboard/managedoctors',
            //     element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://doctors-portal-server-rust.vercel.app/bookings/${params.id}`)
            // },
        ]
    },
    { path: '*', element: <FourZeroFour></FourZeroFour> }
])