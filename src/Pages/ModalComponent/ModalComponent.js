import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import { AuthContext } from '../Contexts/AuthProvider';

const ModalComponent = ({ book, price, img, books }) => {

    const navigate = useNavigate();
    console.log(img);
    const { user } = useContext(AuthContext);
    console.log(user);
    //const books = useLoaderData();
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const loc = form.loc.value;
        const name = user?.displayName;
        const email = user?.email;
        const phone = form.phone.value;
        const Bookname = form.Bookname.value;
        const price = form.price.value;


        const bookings = {

            userName: name,
            Location: loc,
            email: email,
            phone: phone,
            price: price,
            Bookname: Bookname,
            img: img
        }

        console.log(bookings);


        fetch('https://book-trekker-server-side.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    form.reset();
                    toast.success('Successfully Booked!');
                    navigate('/dashboard/myorder');
                }
            })
            .catch(error => console.error(error));

    }

    // const handleWish = () => {

    //     fetch('https://book-trekker-server-side.vercel.app/wishlists', {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(bookings)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.acknowledged) {

    //                 //  form.reset();
    //                 toast('Added to Wish List!');
    //                 //lert('Service Added Successfully!')
    //             }
    //         })
    //         .catch(error => console.error(error));


    //     fetch('https://book-trekker-server-side.vercel.app/allbookscategory', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.acknowledged) {

    //                 //form.reset();
    //                 toast('Product  Added Successfully!');

    //                 navigate('/dashboard/myproduct');

    //                 //lert('Service Added Successfully!')
    //             }
    //         })
    //         .catch(error => console.error(error));
    // }

    const handleWish = (row, uid) => {

        const product = {

            title: row.title,
            CategoryId: row.CategoryId,
            pic: row.pic,
            resalePrice: row.resalePrice,
            originalPrice: row.originalPrice,
            location: row.location,
            PostTime: row.PostTime,
            condition: row.condition,
            SellerName: row.SellerName,
            uid: uid
        }


        fetch('https://book-trekker-server-side.vercel.app/wishCollection', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    toast('Added to WishList Successfully!');

                    navigate('/dashboard/mywishlist');


                }
            })
            .catch(error => console.error(error));

    }





    const handlemessage = () => {

        toast('You have to be buyer to book this product!');

    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            {
                !isSeller && !isAdmin ?
                    <>
                        < button onClick={handleShow} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow"> Book Now</button>
                        {/* < button onClick={handleShow} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow"><Link className='link' to={`/allbookscategory/${category?._id}`}>Add to WishList</Link> </button> */}
                        <button onClick={() => handleWish(books, user?.uid)} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow">Add to WishList</button>


                    </>
                    :
                    <>
                        < button onClick={handlemessage} className="px-3  text-white mx-3 fw-bolder my-2 border rounded shadow" style={{ textDecoration: 'none', background: "#748DA6" }}> Book Now</button>

                    </>
            }


            {/* < button onClick={handleShow} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow" > Book Now</button> */}

            <>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Order your Book Now!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleBooking}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="name" defaultValue={user?.displayName} placeholder="Username" disabled />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" defaultValue={user?.email} placeholder="Enter email" disabled />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" name="Bookname" defaultValue={book} placeholder="BookName" disabled />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name="price" defaultValue={price} placeholder="Price" disabled />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" name="phone" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Meeting Location</Form.Label>
                                <Form.Control type="text" name="loc" placeholder="Meeting Location" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {/* <button onClick={handleClose} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow">Save Changes</button> */}
                    </Modal.Footer>

                </Modal>

            </>
        </div>
    );
};

export default ModalComponent;