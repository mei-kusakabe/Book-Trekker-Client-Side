import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import './MyOrder.css'

const MyOrder = () => {

    const { user } = useContext(AuthContext);
    // const [mybook, bookings] = useState([]);

    // useEffect(() => {
    //     fetch(`https://book-trekker-server-side.vercel.app/bookings?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => bookings(data))
    // }, []);


    // useEffect(() => {
    //     fetch(`https://book-trekker-server-side.vercel.app/bookings?email=${user?.email}`)
    // }, [user?.email])



    const url = `https://book-trekker-server-side.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(bookings);

    // const url = `https://book-trekker-server-side.vercel.app/bookings?email=${user?.email}`;

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


        < div className='sg m-2 py-3'>
            <h2 className='title-font py-2 orange'>
                Your Orders from Book Trekker
            </h2>
            <div className='order-all  border-0'>
                {
                    bookings?.length ?
                        bookings.map((booking, i) => <div className='order mx-5 teal-c text-center border-1 p-0 rounded shadow'
                            key={i}>

                            {/* w-25 w-xl-50 w-lg-25 w-md-100 */}

                            <div>
                                <img src={booking.img} alt="" />
                            </div>
                            <div>
                                <h5 className='p-3 w-100'>Book Name: {booking.Bookname} </h5>
                                <p className='p-3 text '>Price:  {booking.price}</p>
                                <button className="button1 px-5  text-white mx-3 fw-bold my-4 border shadow">Proceed to pay</button>
                            </div>


                        </div>

                        )
                        :
                        <>
                            <h2>No Order has benn placed</h2>

                        </>
                }

            </div >
        </div >
    );
};

export default MyOrder;