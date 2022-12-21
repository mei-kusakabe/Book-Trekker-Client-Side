import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import useSellerAll from '../hooks/useSellerAll';
import { AuthContext } from '../Pages/Contexts/AuthProvider';
import Navbar from '../Pages/Shared/NavBar/NavBar';
import './DashboardLayout.css'


const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSellerAll] = useSellerAll(user?.email)


    //const [isAdmin] = useAdmin(user?.email)
    return (
        <div >
            <Navbar></Navbar>

            <div className='sg m-5 py-5'>
                <Outlet></Outlet>

                <div className="text-start mx-5 ">
                    <h3 className='fw-bold fs-2 py-3' style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }} >Welcome to DashBoard..</h3>
                    <table className='mx-auto text-black  shadow'>
                        <tr>
                            <th>
                                <h3 className=''>Visit</h3>
                            </th>
                        </tr>
                        <tbody className=''>

                            {
                                isAdmin && <>
                                    <tr>
                                        <td><Link className="button1 fw-bold border shadow" to="/dashboard/allseller">All Seller</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link className="button1 fw-bold border shadow" to="/dashboard/allbuyer">All Buyer</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link className="button1 fw-bold border shadow" to="/">Report Item</Link></td>
                                    </tr>
                                </>
                            }

                            {
                                isBuyer ?
                                    <>
                                        <tr>
                                            <td><Link className="button1 fw-bold border shadow h6" to="/dashboard/myorder"><small>My Order</small></Link></td>
                                        </tr>
                                        <tr>
                                            <td><Link className="button1 fw-bold border shadow h6" to="/dashboard/mywishlist" >WishList</Link></td>

                                        </tr>
                                    </>
                                    :
                                    <></>
                            }

                            {
                                isSellerAll || isSeller ?
                                    <>
                                        <tr>
                                            <td><Link className="button1 fw-bold border shadow h6" to="/dashboard/addproduct"><small>Add Product</small></Link></td>
                                        </tr>
                                        <tr>
                                            <td><Link className="button1 fw-bold border shadow h6" to="/dashboard/myproduct">My Product</Link></td>
                                        </tr>
                                        <tr>
                                            <td><Link className="button1 fw-bold border shadow h6" aria-disabled to="/dashboard/allbuyer">My Buyer</Link></td>
                                        </tr>
                                    </>
                                    :
                                    <></>
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </div >
    );
};

export default DashboardLayout;