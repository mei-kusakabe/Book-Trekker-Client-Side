import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';


const MyProduct = () => {
    // let n = 1;
    const { user, logOut } = useContext(AuthContext);



    //fetch(`http://localhost:5000/allusers/seller/${email}`)

    const url = `http://localhost:5000/allbookscategory/seller/${user.displayName}`;

    const { data: products = [] } = useQuery({
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


        fetch('http://localhost:5000/adCollection', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error(error));



    }



    return (
        <div className='px-3 '>



            <table className='mx-auto text-black'>
                <tr>
                    <th>No.</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>SalePrice</th>
                    <th>Condition</th>
                    <th>Sale Status</th>
                    <th>Advertise</th>
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
                            {/* <td><Link className="button1 fw-bold my-2 border shadow" to="/">Delete</Link></td> */}

                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyProduct;


