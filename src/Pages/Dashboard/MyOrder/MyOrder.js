import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import './MyOrder.css'

const MyOrder = () => {

    const { user, logOut } = useContext(AuthContext);
    // const [mybook, bookings] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/bookings?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => bookings(data))
    // }, []);


    // useEffect(() => {
    //     fetch(`http://localhost:5000/bookings?email=${user?.email}`)
    // }, [user?.email])



    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(bookings);

    // const url = `http://localhost:5000/bookings?email=${user?.email}`;

    // const { data: bookings = [] } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('book-trekker-token')}`
    //             }
    //         });
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    console.log(bookings);

    return (
        <div>
            my Order

            <div className='order-all m-5 border-0'>
                {
                    bookings.map((booking, i) => <div className='order m-5 text-center mx-auto border-1 p-0 w-25 shadow d-flex'
                        key={i}>

                        <div>
                            <img src={booking.img} alt="" />
                        </div>
                        <div>
                            <h5 className='p-3 w-100'>{booking.Bookname} </h5>
                            <p className='p-3 text '>  {booking.price}</p>
                            <button className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow">pay</button>
                        </div>


                    </div>


                    )
                }

            </div>
        </div>
    );
};

export default MyOrder;