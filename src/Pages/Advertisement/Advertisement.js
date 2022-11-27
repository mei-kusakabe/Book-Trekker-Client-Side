import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import './Advertisement.css'

const Advertisement = () => {

    const { user } = useContext(AuthContext);
    const { data: product, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: () => fetch('http://localhost:5000/adCollection')
            .then(res => res.json())
    })

    console.log(product)

    if (isLoading) {
        return <span>Loading...</span>
    }

    // const handlemessage = () => {

    //     toast('Please Login to view more details!');

    // }

    return (
        <div className='advertise sg'>

            {
                product?.length ? <h3 className='fw-bold fs-2 py-5' style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }} >Top Advertisement..</h3> : <h3 className='d-none'>none</h3>
            }
            <div className='ad-all  border-0'>

                {
                    product?.length ?
                        <>
                            {
                                product.map(c => <div className='ad mx-5 text-center border-1 p-0  shadow'
                                    key={c._id}>
                                    <img src={c?.pic} alt="" />
                                    <h5 className='p-3 w-100 title-font'>Book Name: {c?.name} </h5>
                                    <p className='p-3 text '> Price: {c?.resalePrice}</p>

                                    <button className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow"><Link className='link' to={`/`}>View more</Link></button>

                                </div>
                                )

                            }
                        </>
                        :
                        <div className='d-none'></div>
                }
            </div>

        </div>
    );
};

export default Advertisement;





