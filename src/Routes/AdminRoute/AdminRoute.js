import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../Pages/Contexts/AuthProvider';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();


    //spinner

    // if (loading || isAdminLoading) {
    //     return <Loading></Loading>
    // }

    if (loading || isAdminLoading) {
        return <Spinner animation='border' variant='primary' />

    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;