import React, { useContext, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaCameraRetro, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../Contexts/AuthProvider';
//import useTitle from '../hooks/useTitle';
import "./Register.css"
const Register = () => {
    // useTitle('Register')
    const [error, setError] = useState('');
    // const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, setUser, loading } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    // if (loading) {
    //     return <Spinner animation='border' variant='primary' />
    // }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const usertype = form.usertype.value;
        const inrole = usertype;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                toast('User Created Successfully.')
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });

        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }

            updateUserProfile(profile)
                .then(() => { saveUser(name, email, photoURL, usertype, inrole) })
                .catch(error => console.error(error));
        }

    }




    // const saveUser = (name, email, photoURL, usertype) => {
    //     const user = { name, email, photoURL, usertype };

    //     fetch('https://book-trekker-server-side.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             Navigate('/');
    //             // if(data.acknowledged){
    //             //     form.reset();
    //             //     setShow(false);
    //             //    toast('argvergaerg')

    //             // }
    //         })
    //         .catch(error => console.error(error));

    // }



    const saveUser = (name, email, photoURL, usertype, inrole) => {
        const user = { name, email, photoURL, usertype, inrole };

        fetch('https://book-trekker-server-side.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email);

                // if(data.acknowledged){
                //     form.reset();
                //     setShow(false);
                //    toast('argvergaerg')

                // }
            })
            .catch(error => console.error(error));

    }



    // const handleAccepted = event => {
    //     setAccepted(event.target.checked)
    // }

    return (


        <div className="container-fluid vh-100">
            <div className="">
                <div className="rounded d-flex justify-content-center">
                    <div className="form col-md-4 col-sm-12 shadow-lg p-5 rounded  mt-2">
                        <div className="text-center">
                            <h3 className="text-white fw-bold fs-2">Welcome to Register Page!!</h3>
                        </div>
                        <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center border shadow-lg rounded-3 bg-light ">
                            <div className="p-4">

                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaUser></FaUser> </span>
                                    <input type="text" className="form-control" name="name" placeholder="Full Name" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaCameraRetro></FaCameraRetro> </span>
                                    <input type="text" className="form-control" name="photoURL" placeholder="Photo URL" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"> <FaEnvelope></FaEnvelope></span>
                                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaLock></FaLock></span>
                                    <input type="password" className="form-control" name="password" placeholder="Password" required />
                                </div>

                                <label for="usertype" className='input-group-text px-3' >Register as:</label>
                                <select id="usertype" name="usertype" className="input border shadow mx-auto px-3 rounded w-100 h-25" size="1" required>
                                    <option value="Buyer">Buyer</option>
                                    <option value="Seller">Seller</option>
                                </select>
                                <br></br>

                                <Button variant="primary" className="btn-xl fw-bold mt-3" type="submit" > Register</Button>
                                <Form.Text className="text-danger">
                                    {error}
                                </Form.Text>
                                <hr />

                                <p className='mt-3'>Already an User? <Link to="/login"> <span className='fw-bold text-black'>Click here to Login</span></Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;