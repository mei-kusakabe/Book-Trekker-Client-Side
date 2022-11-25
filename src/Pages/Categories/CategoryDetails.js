import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './Categories.css'

const CategoryDetails = () => {

    const books = useLoaderData();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='services m-5'>

            {/* <div className='p-2 list rounded  justify-content-center align-items-center service-page-list'> */}

            <div className='book-all m-5 border-0 justify-content-center align-items-center'>
                {
                    books.map((book, i) => <div className='card w-75 mx-auto my-5 service m-5 text-center border-1 p-0  shadow justify-content-center align-items-center'
                        key={i} >

                        <img src={book?.pic} alt="" className='card-img-top' />
                        <div className="card-body text-start">
                            <h5 className='card-title text-center fw-bold' style={{ textDecoration: 'none', color: "#EB6440" }}>{book?.name} </h5>
                            <br />
                            <div className='d-inline d-lg-flex'>
                                <p className='px-3 card-text'> <span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Resale Price: </span> {book?.resalePrice}</p>
                                <p className='px-3 card-text'> <span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Original Price: </span>  {book?.originalPrice}</p>
                            </div>
                            <div className='d-inline d-lg-flex'>
                                <p className='px-3 card-text'> <span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Location:</span> {book?.location}</p>
                                <p className='px-3 card-text'><span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Year of Use:</span>  {book?.yearofuse}</p>
                            </div>
                            <p className='px-3 card-text'><span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Sellers Name:</span>  {book?.SellerName}</p>
                            <p className='px-3 card-text'><span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Date Posted:</span>  {book?.PostTime.split("", 10)}</p>
                        </div>
                        {/* <button onClick={handleShow} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow"><Link className='link' to={`/allbookscategory/${book?._id}`}>Book Now</Link></button> */}
                        <button onClick={handleShow} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow">Book Now</button>
                        <>
                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Order your Book Now!!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Username" disabled />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" disabled />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Book Name</Form.Label>
                                            <Form.Control type="text" placeholder="BookName" disabled />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="text" placeholder="Price" disabled />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="Phone Number" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Meeting Location</Form.Label>
                                            <Form.Control type="text" placeholder="Meeting Location" />
                                        </Form.Group>

                                        {/* <Button variant="primary" type="submit">
                                            Submit
                                        </Button> */}


                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <button onClick={handleClose} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow">Save Changes</button>
                                    {/* <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button> */}
                                </Modal.Footer>

                            </Modal>

                        </>
                    </div>)
                }
            </div>
        </div >
    );
};

export default CategoryDetails;