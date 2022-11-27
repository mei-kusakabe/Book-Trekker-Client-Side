import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaEnvelope, FaCheck } from 'react-icons/fa';


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

    // const [users, setuser] = useState([]);

    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         setuser(response.data);
    //     });
    // }, []);


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    const handleVerifySeller = id => {
        fetch(`http://localhost:5000/allusers/seller/${id}`, {
            //method: 'PUT'
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('book-trekker-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller successfully Verified.')
                    refetch();
                }
            })
    }

    /// console.log(users);
    return (
        <div>
            <table className='mx-auto text-black'>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Verify Seller</th>
                    <th>Seller Status</th>
                    <th>Delete Seller</th>
                </tr>

                <tbody>
                    {
                        users.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name} </td>

                            <td>{user.email}</td>

                            <td>
                                {
                                    user?.role === 'seller' ?
                                        <td className=''>
                                            <FaCheck className="bg-primary text-white rounded h-50 w-100"></FaCheck>
                                        </td>
                                        :

                                        <td className='d-none'>
                                            <FaCheck></FaCheck>
                                        </td>

                                }
                            </td>
                            <td><button onClick={() => handleVerifySeller(user._id)} className="button1 fw-bold my-2 border shadow">Verify</button></td>
                            <td>

                                {
                                    user?.role === 'seller' ?
                                        <td className='text-center ms-5'>
                                            Verified
                                        </td>
                                        :

                                        <td className='text-center'>
                                            Not Verified
                                        </td>

                                }

                            </td>

                            <td><Link className="button1 fw-bold my-2 border shadow" to="/">Delete</Link></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default AllSellers;