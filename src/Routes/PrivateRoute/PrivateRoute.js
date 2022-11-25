import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Pages/Contexts/AuthProvider';
const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    // const location = useLocation();

    if (loading) {
        return <h1 className='fs-5'>Loading...</h1>
    }

    if (user) {
        return children;
    }
    return (
        < div className='my-5'>
            <h2>Please login to View Details.</h2>
            <button style={{ textDecoration: 'none', background: "#EB6440", color: "white" }} className="px-5 py-2 mx-3 fw-bold  my-4 rounded border shadow" > <Link to={`/login`} style={{ textDecoration: 'none', background: "#EB6440", color: "white" }}> <span className='fw-bold'>Please Login</span></Link></button>

            {/* <Navigate to="/login" state={{ from: location }} replace> Login</Navigate>; */}
        </div >
    );
};

export default PrivateRoute;