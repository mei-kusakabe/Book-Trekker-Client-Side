import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import './Advertisement.css'

const Advertisement = () => {
    const { data: product, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: () => fetch('http://localhost:5000/adCollection')
            .then(res => res.json())
    })

    console.log(product)

    if (isLoading) {
        return <span>Loading...</span>
    }

    return (
        <div className='advertise'>

            {
                product?.length ? <h3 className='fw-bold mt-5 fs-2 pt-5' style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }} >Top Advertisement..</h3> : <h3 className='d-none'>none</h3>
            }
            <div className='ad-all m-5 border-0'>
                {
                    product?.length ?
                        <>
                            {
                                product.map(c => <div className='ad m-5 text-center border-1 p-0  shadow'
                                    key={c._id}>
                                    <img src={c?.pic} alt="" />
                                    <h5 className='p-3 w-100'>{c?.name} </h5>
                                    <p className='p-3 text '>  {c?.resalePrice}</p>
                                    <button className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow"><Link className='link' to={`/allbookscategory/${c?._id}`}>View Details</Link></button>
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



