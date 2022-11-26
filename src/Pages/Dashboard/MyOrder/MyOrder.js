import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyOrder = () => {

    const { user, logOut } = useContext(AuthContext);
    const [mybook, setMybooking] = useState([]);



    // useEffect(() => {
    //     fetch(`http://localhost:5000/bookings?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setMybooking(data))
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

    return (
        <div>
            my Order

            <table className='mx-auto text-black'>
                <tr>
                    <th>Title</th>
                    <th>Pic</th>
                    <th>Price</th>
                    <th>PayMent</th>
                </tr>

                <tbody>
                    {
                        bookings.map((booking, i) => <tr>
                            <th>{i + 1}</th>
                            <th><img className='rounded-circle h-25 w-25' src={booking.img} alt="" /></th>
                            <th>{booking.Bookname}</th>
                            <th>{booking.price}</th>
                            <th><button>pay</button></th>

                            {/* <td></td>
                            <td></td> */}
                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;