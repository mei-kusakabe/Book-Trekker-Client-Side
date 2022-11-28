import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const AllBuyer = () => {

    const { user, logOut } = useContext(AuthContext);


    const url = `https://book-trekker-server-side.vercel.app/userstype?usertype=Buyer`;

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('book-trekker-token')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });


    console.log(users);



    const handleDelete = user => {
        const proceed = window.confirm('Are you sure you want to delete this buyer?');
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
                        toast.success(`Buyer ${user.name} deleted successfully`)
                    }
                })
        }
    }


    return (
        <div className='container my-5'>
            {
                users?.length ? <h3 className='fw-bold fs-2 py-3' style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }} >All Buyers From Book-Trekker</h3> : <h3 className='d-none'>none</h3>
            }
            <table className='mx-auto text-black'>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>location</th>
                    <th>Delete Buyer</th>

                </tr>

                <tbody>
                    {
                        users.map((user, i) => <tr>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>01894321111</td>
                            <td>Chattogram</td>
                            <td><button onClick={() => handleDelete(user)} className="button1 fw-bold my-2 border shadow">Delete</button></td>
                            {/* <td><Link className="button1 fw-bold my-2 border shadow" to="/">Delete</Link></td> */}

                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default AllBuyer;