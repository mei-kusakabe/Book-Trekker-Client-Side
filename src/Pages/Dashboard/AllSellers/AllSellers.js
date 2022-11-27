import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AllSellers = () => {
    const { user, logOut } = useContext(AuthContext);


    //const url = `http://localhost:5000/userstype?usertype=${user?.usertype}`;
    // const { data: users = [] } = useQuery({
    //     queryKey: ['users', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }
    // })


    const url = `http://localhost:5000/userstype?usertype=Seller`;

    const [users, setuser] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            setuser(response.data);
        });
    }, []);

    // The all - sellers route will have a name, email address, 
    // delete button, and verify button.Admin will be able to verify a
    //  seller.When clicked on the verify button, the seller's status will 
    //  change from unverified to verified(show a blue tick when the seller 
    //     is verified), and this status will be shown on the products added
    //      by a verified seller.


    /// console.log(users);
    return (
        <div>
            <table className='mx-auto text-black'>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Verify Seller</th>
                    <th>Delete Seller</th>
                    <th>Seller Status</th>
                </tr>

                <tbody>
                    {
                        users.map((user, i) => <tr>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><Link className="button1 fw-bold my-2 border shadow" to="/">Verify</Link></td>
                            <td><Link className="button1 fw-bold my-2 border shadow" to="/">Delete</Link></td>
                            <td>Unverified</td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;