import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaEnvelope, FaCheck } from 'react-icons/fa';


const AllSellers = () => {
    const { user, logOut } = useContext(AuthContext);


    //const url = `https://book-trekker-server-side.vercel.app/userstype?usertype=${user?.usertype}`;
    // const { data: users = [] } = useQuery({
    //     queryKey: ['users', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    // const [users, setuser] = useState([]);

    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         setuser(response.data);
    //     });
    // }, []);


    const url = `https://book-trekker-server-side.vercel.app/userstype?usertype=Seller`;

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    const handleVerifySeller = id => {
        fetch(`https://book-trekker-server-side.vercel.app/allusers/seller/${id}`, {
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
    const handleDelete = user => {
        const proceed = window.confirm('Are you sure you want to delete this seller?');
        if (proceed) {
            fetch(`https://book-trekker-server-side.vercel.app/allusers/${user._id}`, {
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
                        toast.success(`Seller ${user.name} deleted successfully`)
                    }
                })
        }
    }

    /// console.log(users);
    return (
        <div className='container my-5'>

            {
                users?.length ? <h3 className='fw-bold fs-2 py-3' style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }} >All Sellers From Book-Trekker</h3> : <h3 className='d-none'>none</h3>
            }
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

                            <td>
                                <div className='d-inline d-lg-flex d-flex'>
                                    <td className='text-end'>{user.name} </td>
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
                                </div>

                            </td>

                            <td>{user.email}</td>

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

                            <td><button onClick={() => handleDelete(user)} className="button1 fw-bold my-2 border shadow">Delete</button></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default AllSellers;