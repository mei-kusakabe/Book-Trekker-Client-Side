import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web'

import { AuthContext } from '../Contexts/AuthProvider';
import './Advertisement.css'

const Advertisement = () => {

    const { user } = useContext(AuthContext);
    const { data: product, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: () => fetch('https://book-trekker-server-side.vercel.app/adCollection')
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
        <div className='sg m-5 py-5'>

            {
                product?.length ? <h3 className='fw-bold fs-2 p-3 mb-5' style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }} >Top Advertisement..</h3> : <h3 className='d-none'>none</h3>
            }


            <div className='ad-all mx-5  border-0'>

                {
                    product?.length ?
                        <>
                            {
                                product.map(c =>
                                    // card ad mx-5 teal-c text-center border-1 p-0  shadow
                                    <div className='card1 mt-5 mx-5 teal-c text-center'
                                        key={c._id}>
                                        <div className='imgbox'>
                                            <img className='h-75 imh' src={c?.pic} alt="" />
                                        </div>
                                        <div className='content'>

                                            <h6 className='title-font'><span className='fw-bold'> {c?.name}</span></h6>
                                            <p className='px-3 text'> Price: {c?.resalePrice}</p>

                                            <a href="something" class="button3">View More</a>

                                            {/* <button className="button1 px-5  text-white mx-3 fw-bold  border shadow"><Link className='link' to={`/`}>View more</Link></button> */}
                                        </div>
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





