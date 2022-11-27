import React, { useContext } from 'react';
import { Container, Dropdown, Image, Nav, Navbar, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import './NavBar.css'
import './../../../Layout/DashboardLayout'

const NavBar = () => {

    const { user, logOut, loading } = useContext(AuthContext);

    // console.log(user?.usertype);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    //const axios = require('axios'); // legacy way

    // Make a request for a user with a given ID
    // axios.get(`http://localhost:5000/users?email=${user?.email}`)
    //     .then(function (response) {
    //         // handle success
    //         console.log(response.data);
    //         // userC = response.data;
    //         //return data;
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    //     });

    //const services = useLoaderData();
    //console.log(services);


    // const url = `http://localhost:5000/users?email=${user?.email}`;

    // const { data: usersC = [] } = useQuery({
    //     queryKey: ['usersC', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         // userC = data;
    //         return data;
    //     }
    // })

    // console.log(usersC);


    // if (loading) {
    //     return <Spinner animation='border' variant='primary' />
    // }


    return (
        <div className='header'>



            <Navbar collapseOnSelect className='nav-bg text-white' expand="lg" variant="light">
                <Container>
                    <div className=''>
                        <span>
                            <img src="https://cdn-icons-png.flaticon.com/512/1164/1164713.png" alt="Logo" width="50" height="45" className="d-inline-block align-text-center" />
                            <Navbar.Brand href="/" className='fw-bold title'>Book Trekker</Navbar.Brand>
                        </span>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="/" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Home</Nav.Link>
                            <Nav.Link href="/services" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Services</Nav.Link>
                            <Nav.Link href="/blog" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Blog</Nav.Link>
                            <Nav.Link href="/photogallery" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Photo Gallery</Nav.Link>
                            <Nav.Link href="/contact" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Contact</Nav.Link>
                            {/* <Nav>
                                {
                                    usersC.map((userD, i) => <div
                                        key={i}
                                        usertype={userD.usertype}>
                                        {userD.usertype === "Buyer" ?
                                            <Nav.Link href="/dashboard" className='px-3 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Order</Nav.Link>
                                            :
                                            <>
                                            </>
                                        }

                                        {
                                            userD.usertype === "Seller" ?
                                                <>
                                                    <Nav.Link href="/dashboard/addproduct" className='pe-2 px-5 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Add Product</Nav.Link>
                                                    <Nav.Link href="/photogallery" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>My Product</Nav.Link>
                                                </>
                                                :
                                                <>
                                                </>
                                        }
                                    </div>
                                    )
                                }
                            </Nav> */}

                            <Nav>
                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                <span className='fw-bold my-2 mx-2' style={{ textDecoration: 'none', color: "#EB6440" }}>{user?.displayName}</span>

                                                <Nav.Link href="/dashboard" className='pe-2 fw-bold' style={{ textDecoration: 'none', color: "#EB6440" }}>DashBoard</Nav.Link>
                                                <FaSignOutAlt className='sign-out fw-bold my-2 fs-4 mx-2' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }} onClick={handleLogOut}></FaSignOutAlt>
                                            </>
                                            :
                                            <>
                                                <Link to='/login' style={{ textDecoration: 'underline', color: "EB6440", textDecorationColor: "#EB6440" }} className='fw-bold'>Login</Link>
                                                <Link to='/register' style={{ textDecoration: 'underline', color: "EB6440", textDecorationColor: "#EB6440" }} className='fw-bold'>Register</Link>
                                            </>
                                    }

                                </>

                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '50px' }} data-toggle="tooltip"
                                        roundedCircle title={user?.displayName}
                                        src={user?.photoURL}>
                                    </Image>
                                    : <FaUser className='mt-2'></FaUser>
                                }

                            </Nav>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default NavBar;