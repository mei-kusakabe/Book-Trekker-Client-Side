import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const AllBuyer = () => {

    const { user, logOut } = useContext(AuthContext);

    //const url = `http://localhost:5000/userstype?usertype=${user?.usertype}`;
    const url = `http://localhost:5000/userstype?usertype=Buyer`;

    const { data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(users);
    return (
        <div>

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
                            <td><Link className="button1 fw-bold my-2 border shadow" to="/">Delete</Link></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default AllBuyer;