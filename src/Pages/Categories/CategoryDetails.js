import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import ModalComponent from '../ModalComponent/ModalComponent';
import './Categories.css'

const CategoryDetails = () => {

    const books = useLoaderData();
    const { user } = useContext(AuthContext)


    //console.log(user);

    // const { name: treatmentName, slots, price } = treatment;

    // const url = `http://localhost:5000/allusers/seller/${user.email}`;

    // const { data: users = [] } = useQuery({
    //     queryKey: ['users', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    // console.log(users);


    const url = "http://localhost:5000/allusers";

    const [users, setAlluser] = React.useState([]);

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setAlluser(response.data);
        });
    }, []);

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
                    books.map((book, i) => <div className='card w-xl-50 w-lg-50 w-md-100 mx-auto my-5 teal-c service m-5 text-center border-1 p-0  shadow justify-content-center align-items-center'
                        key={i} >

                        <img src={book?.pic} alt="" className='card-img-top' />
                        <div className="card-body text-start">
                            <h5 className='card-title text-center fw-bold title-font cap' style={{ textDecoration: 'none', color: "#EB6440" }}>Book Name : {book?.name} </h5>
                            <br />
                            <div className='d-inline d-lg-flex'>
                                <p className='px-3 card-text'> <span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Resale Price: </span> {book?.resalePrice}</p>
                                <p className='px-3 card-text'> <span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Original Price: </span>  {book?.originalPrice}</p>
                            </div>
                            <div className='d-inline d-lg-flex'>
                                <p className='px-3 card-text'> <span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Location:</span> {book?.location}</p>
                                <p className='px-3 card-text'><span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Year of Use:</span>  {book?.yearofuse}</p>
                            </div>

                            <div className='d-inline d-lg-flex d-flex'>
                                <p className='px-3 card-text'><span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Sellers Name:</span>  {book?.SellerName}</p>

                                {

                                    users.map((user) => <div className='' key={user._id}>
                                        {

                                            user?.role === 'seller' && book?.SellerName === user?.name ?

                                                <FaCheck className="bg-primary text-white rounded h-50 w-100"></FaCheck>
                                                : <></>

                                        }
                                    </div>
                                    )

                                }

                            </div>

                            <p className='px-3 card-text'><span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Date Posted:</span>  {book?.PostTime.split("", 10)}</p>
                        </div>
                        {/* <button onClick={handleShow} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow"><Link className='link' to={`/allbookscategory/${book?._id}`}>Book Now</Link></button> */}
                        {/* < button onClick={handleShow} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow" > Book Now</button> */}
                        < ModalComponent book={book.name}
                            price={book.resalePrice}
                            img={book.pic}
                            books={book}
                        ></ModalComponent>
                    </div>


                    )
                }
            </div >
        </div >
    );
};

export default CategoryDetails;