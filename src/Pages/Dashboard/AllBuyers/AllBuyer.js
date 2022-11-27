import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
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
                    <th>Title</th>
                    <th>Name</th>
                    <th>Email</th>
                    {/* <th>PayMent</th> */}
                </tr>

                <tbody>
                    {
                        users.map((user, i) => <tr>
                            <th>{i + 1}</th>
                            {/* <th><img className='rounded-circle h-25 w-25' src={booking.img} alt="" /></th> */}
                            <th>{user.name}</th>
                            <th>{user.email}</th>
                            {/* //  <th><button>pay</button></th> */}

                            {/* <td></td>
                            <td></td> */}
                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default AllBuyer;