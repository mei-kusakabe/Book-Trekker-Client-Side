import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';


const MyProduct = () => {
    // let n = 1;
    const { user, logOut } = useContext(AuthContext);



    //fetch(`https://book-trekker-server-side.vercel.app/allusers/seller/${email}`)

    const url = `https://book-trekker-server-side.vercel.app/allbookscategory/seller/${user.displayName}`;

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.displayName],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(products);

    const handleAdvertise = (row) => {

        const product = {

            pic: row.pic,
            resalePrice: row.resalePrice,
            condition: row.condition,
            name: row.name

        }


        fetch('https://book-trekker-server-side.vercel.app/adCollection', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`Advertised successfully`)

            })
            .catch(error => console.error(error));



    }

    const handleDelete = p => {
        const proceed = window.confirm('Are you sure you want to delete this product?');
        if (proceed) {
            fetch(`https://book-trekker-server-side.vercel.app/allbookscategory/${p._id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('book-trekker-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        refetch();
                        toast.success(`Product ${p.name} deleted successfully`)
                    }
                })
        }
    }



    return (
        <div className='container my-5'>


            <table className='mx-auto text-black'>
                <tr>
                    <th>No.</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>SalePrice</th>
                    <th>Condition</th>
                    <th>Sale Status</th>
                    <th>Advertise</th>
                    <th>Delete</th>
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

                            {/* <td>  <img class="rounded-circle w-25 h-25" src={product.pic} alt='' /> </td> */}
                            <td>{product.name}</td>
                            <td>{product.resalePrice}</td>
                            <td>{product.condition}</td>
                            <td>Available</td>
                            <td><button onClick={() => handleAdvertise(product)} className="button1 fw-bold my-2 border shadow">Advertise</button></td>
                            <td><button onClick={() => handleDelete(product)} className="button1 fw-bold my-2 border shadow">Delete Product</button></td>

                            {/* <td><Link className="button1 fw-bold my-2 border shadow" to="/">Delete</Link></td> */}

                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyProduct;


