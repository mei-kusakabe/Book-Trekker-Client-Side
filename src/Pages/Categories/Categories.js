import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import './Categories.css'

import { useQuery, useQueryClient } from '@tanstack/react-query'

const Categories = () => {


    //  useTitle('Services')
    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     fetch('https://book-trekker-server-side.vercel.app/categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, []);


    const { loading } = useContext(AuthContext);
    // implemented  react query 

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://book-trekker-server-side.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })

    if (loading) {
        return <Spinner animation='border' variant='primary' />
    }


    return (


        <div className='services m-5'>

            <h2 className='fw-bold pt-4' style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }}>Shop by Category</h2>

            <div className='p-2 list rounded  justify-content-center align-items-center service-page-list'>
                {
                    categories.map((category, i) => <p key={category._id}>
                        <button className="button1 px-5  mx-3 fw-bold text-white my-2 border shadow"> <Link className='link' to={`/allbookscategory/${category._id}`}> <span className='fw-bold'>{i + 1}.</span>{category.title}</Link></button>
                        {/* <Link to={`/services/${service._id}`}> <span className='fw-bold'>{i + 1}.</span>{service.title}</Link> */}
                    </p>)
                }

            </div>
            <div >

                <div className='service-all  border-0'>
                    {
                        categories.map(category => <div className='service m-5 teal-c text-center border-1 p-0 w-75 shadow'
                            key={category._id}
                            category={category}>
                            <img src={category?.img} alt="" />
                            <h5 className='p-3 w-100 title-font cap'>{category?.title} </h5>
                            <p className='p-3 text '>  {category?.description}</p>
                            <button className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow"><Link className='link' to={`/allbookscategory/${category?._id}`}>View Details</Link></button>
                        </div>


                        )
                    }

                </div>
            </div>
        </div>


    );
};

export default Categories;