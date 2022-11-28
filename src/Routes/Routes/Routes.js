import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Advertisement from '../../Pages/Advertisement/Advertisement';
import Blog from '../../Pages/Blog/Blog';
import Categories from '../../Pages/Categories/Categories';
import CategoryDetails from '../../Pages/Categories/CategoryDetails';
import AddProduct from '../../Pages/Dashboard/AddProduct/AddProduct';
import AllBuyer from '../../Pages/Dashboard/AllBuyers/AllBuyer';
import AllSellers from '../../Pages/Dashboard/AllSellers/AllSellers';
import MyOrder from '../../Pages/Dashboard/MyOrder/MyOrder';
import MyProduct from '../../Pages/Dashboard/MyProduct';
import MyWishlist from '../../Pages/Dashboard/MyWishlist/MyWishlist';
import FourZeroFour from '../../Pages/FourZeroFour/FourZeroFour';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import AdminRoute from '../AdminRoute/AdminRoute';
import BuyerRoute from '../BuyerRoute/BuyerRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';
import ReportItem from '../../Pages/Dashboard/ReportItem/ReportItem';


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
                loader: ({ params }) => fetch(`https://book-trekker-server-side.vercel.app/allbookscategory/${params.CategoryId}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/ad',
                element: <Advertisement></Advertisement>
            }


        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [

            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/myorder',
                element: <BuyerRoute><MyOrder></MyOrder></BuyerRoute>
            },
            {
                path: '/dashboard/mywishlist',
                element: <BuyerRoute><MyWishlist></MyWishlist></BuyerRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },



        ]
    },
    { path: '*', element: <FourZeroFour></FourZeroFour> }
])