import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import ModalComponent from '../ModalComponent/ModalComponent';
import './Categories.css'

const CategoryDetails = () => {

    const books = useLoaderData();
    const { user } = useContext(AuthContext)

    //console.log(user);

    // const { name: treatmentName, slots, price } = treatment;



    // const handleBooking = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const loc = form.loc.value;
    //     const name = user?.displayName;
    //     const email = user?.email;
    //     const phone = form.phone.value;
    //     const Bookname = form.Bookname.value;
    //     const price = form.price.value;

    //     // [3, 4, 5].map((value, i) => console.log(value))
    //     const booking = {
    //         // appointmentDate: date,
    //         // treatment: treatmentName,
    //         // patient: name,
    //         // slot,
    //         name,
    //         loc,
    //         email,
    //         phone,
    //         price,
    //         Bookname
    //     }

    //     console.log(booking);

    // TODO: send data to the server
    // and once data is saved then close the modal 
    // and display success toast
    // fetch('https://doctors-portal-server-rust.vercel.app/bookings', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(booking)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if (data.acknowledged) {
    //             setTreatment(null);
    //             toast.success('Booking confirmed');
    //             refetch();
    //         }
    //         else {
    //             toast.error(data.message);
    //         }
    //     })


    //}

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
                        {/* < button onClick={handleShow} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow" > Book Now</button> */}
                        <ModalComponent book={book.name}
                            price={book.resalePrice}></ModalComponent>
                    </div>


                    )
                }
            </div >
        </div >
    );
};

export default CategoryDetails;