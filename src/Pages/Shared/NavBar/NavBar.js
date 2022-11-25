import React, { useContext } from 'react';
import { Container, Dropdown, Image, Nav, Navbar } from 'react-bootstrap';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import './NavBar.css'

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='header'>
            <Navbar collapseOnSelect className='nav-bg text-white' expand="lg" variant="light">
                <Container>
                    <div className=''>
                        <span>
                            <img src="https://cdn-icons-png.flaticon.com/512/1164/1164713.png" alt="Logo" width="50" height="45" className="d-inline-block align-text-center" />
                            <Navbar.Brand href="/home" className='fw-bold title'>Book Trekker</Navbar.Brand>
                        </span>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="/home" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Home</Nav.Link>
                            <Nav.Link href="/services" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Services</Nav.Link>
                            <Nav.Link href="/blog" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Blog</Nav.Link>
                            <Nav.Link href="/photogallery" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Photo Gallery</Nav.Link>
                            <Nav.Link href="/contact" className='pe-2 fw-bold' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }}>Contact</Nav.Link>

                            <Nav>
                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                <span className='fw-bold my-2 mx-2' style={{ textDecoration: 'none', color: "#EB6440" }}>{user?.displayName}</span>

                                                {/* <Nav.Link href="/orders" className='pe-2 text-white fw-bold' style={{ textDecoration: 'underline', textDecorationColor: "white" }}>My Review</Nav.Link>

                                                <Nav.Link href="/AddService" className='pe-2 text-white fw-bold' style={{ textDecoration: 'underline', textDecorationColor: "white" }}>Add Service</Nav.Link> */}

                                                <FaSignOutAlt className='sign-out fw-bold my-2 fs-4 mx-2' style={{ textDecoration: 'underline', color: "#EB6440", textDecorationColor: "#EB6440" }} onClick={handleLogOut}></FaSignOutAlt>

                                            </>
                                            :

                                            <>

                                                <Link to='/login' style={{ textDecoration: 'underline', color: "EB6440", textDecorationColor: "#EB6440" }} className='fw-bold'>Login</Link>

                                                <Dropdown>
                                                    <Dropdown.Toggle className='fw-bolder' style={{ textDecoration: 'none', background: "#EB6440", color: "white" }} id="dropdown-basic">
                                                        Register
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="/register">As User Account</Dropdown.Item>
                                                        <Dropdown.Item href="/register">As Seller Account</Dropdown.Item>
                                                        <Dropdown.Item href="/register">Admin Account</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                {/* <Link to='/login' style={{ textDecoration: 'underline', color: "EB6440", textDecorationColor: "#EB6440" }} className='fw-bold'>Login</Link> */}

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