import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useBuyer from '../../hooks/useBuyer';
import { AuthContext } from '../../Pages/Contexts/AuthProvider';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();


    //spinner

    // if (loading || isBuyerLoading) {
    //     return <Loading></Loading>
    // }

    if (loading || isBuyerLoading) {
        return <Spinner animation='border' variant='primary' />

    }

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;