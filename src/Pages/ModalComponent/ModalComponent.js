import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const ModalComponent = ({ book, price }) => {


    // console.log("book:", book);
    const { user } = useContext(AuthContext);
    //const books = useLoaderData();

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const loc = form.loc.value;
        const name = user?.displayName;
        const email = user?.email;
        const phone = form.phone.value;
        const Bookname = form.Bookname.value;
        const price = form.price.value;


        // const review = {
        //     title: title,
        //     price: price,
        //     img: img,
        //     description: description

        // }


        const booking = {

            userName: name,
            Location: loc,
            email: email,
            phone: phone,
            price: price,
            Bookname: Bookname
        }

        console.log(booking);


        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    // form.reset();
                    toast('Successfully Booked!');
                    //lert('Service Added Successfully!')
                }
            })
            .catch(error => console.error(error));

    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            < button onClick={handleShow} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow" > Book Now</button>

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
                        <button onClick={handleClose} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow">Save Changes</button>
                    </Modal.Footer>

                </Modal>

            </>
        </div>
    );
};

export default ModalComponent;