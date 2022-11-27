import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import { AuthContext } from '../Pages/Contexts/AuthProvider';
import Navbar from '../Pages/Shared/NavBar/NavBar';
import './DashboardLayout.css'


const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    //const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">

                <Outlet></Outlet>
                <div className="drawer-content">

                </div>
                {/* <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" /> */}

                {/* <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            // isAdmin &&
                            <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                            </>
                        }

                    </ul>

                </div> */}

                {/* <nav className="navbar navbar-light bg-light shadow">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Menu App</span>

                        <button className="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>

                <div className="modal true" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">MENU</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">HOME</li>
                                    <li className="list-group-item">DOCUMENTOS</li>
                                    <li className="list-group-item">APLICATIVO</li>
                                    <li className="list-group-item">CONTATOS</li>
                                    <li className="list-group-item">SOBRE</li>
                                </ul>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div> */}


                <div className="text-start w-25 ms-5">
                    <table className='mx-auto text-black  shadow'>
                        <tr>
                            <th>Visit </th>
                        </tr>
                        <tbody className=''>

                            {
                                isAdmin && <>
                                    <tr>
                                        <td><Link className="button1  fw-bold my-2 border shadow" to="/dashboard/allseller">All Seller</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link className="button1   fw-bold my-2 border shadow" to="/dashboard/allbuyer">All Buyer</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link className="button1   fw-bold my-2 border shadow" to="/dashboard/reportedItem">Reported Item</Link></td>
                                    </tr>
                                </>
                            }


                            {
                                isSeller && <>
                                    <tr>
                                        <td><Link className="button1  fw-bold my-2 border shadow" to="/dashboard/addproduct">Add Products</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link className="button1   fw-bold my-2 border shadow" to="/dashboard/myproduct">My Products</Link></td>
                                    </tr>
                                    <tr>
                                        <td><Link className="button1   fw-bold my-2 border shadow" to="/dashboard/allbuyer">My Buyer</Link></td>
                                    </tr>
                                </>
                            }


                            {
                                !isSeller && !isAdmin ?
                                    <>
                                        <tr>
                                            <td><Link className="button1   fw-bold my-2 border shadow" to="/dashboard/myorder">My Order</Link></td>
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