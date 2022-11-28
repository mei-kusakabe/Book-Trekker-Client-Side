import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyWishlist = () => {

    const { user, logOut } = useContext(AuthContext);
    const url = `https://book-trekker-server-side.vercel.app/wishCollection/${user.uid}`;

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.uid],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handlePay = (row) => {

        // const product = {

        //     pic: row.pic,
        //     resalePrice: row.resalePrice,
        //     condition: row.condition,
        //     name: row.name

        // }


        // fetch('https://book-trekker-server-side.vercel.app/adCollection', {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(product)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(error => console.error(error));
    }


    return (
        <div className='container my-5'>

            {
                products?.length ? <h3 className='fw-bold fs-2 py-3' style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }} >Your WishList..</h3> : <h3 className='d-none'>No Wish List Availabl</h3>
            }
            <table className='mx-auto text-black sg'>
                <tr>
                    <th>No.</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>SalePrice</th>
                    <th>Condition</th>
                    <th>Sale Status</th>
                    <th>Pay</th>
                </tr>

                <tbody>
                    {
                        products.map((product, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td> <Image
                                style={{ height: '50px', width: "60px" }} data-toggle="tooltip"
                                roundedCircle title={product.name}
                                src={product.pic}>
                            </Image></td>

                            <td>{product.title}</td>
                            <td>{product.resalePrice}</td>
                            <td>{product.condition}</td>
                            <td>Available</td>
                            <td><button onClick={() => handlePay(product)} className="button1 fw-bold my-2 border shadow">Payment</button></td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyWishlist;