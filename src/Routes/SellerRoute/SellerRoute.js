import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../hooks/useSeller';
import { AuthContext } from '../../Pages/Contexts/AuthProvider';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();


    //spinner

    // if (loading || isSellerLoading) {
    //     return <Loading></Loading>
    // }

    if (loading || isSellerLoading) {
        return <Spinner animation='border' variant='primary' />

    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;