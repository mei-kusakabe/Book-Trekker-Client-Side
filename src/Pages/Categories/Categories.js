import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'

const Categories = () => {
    //  useTitle('Services')
    const [categories, setCategories] = useState([]);
    // const { loading } = useContext(AuthContext);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    // if (loading) {
    //     return <Spinner animation='border' variant='primary' />
    // }


    return (
        <div className='services'>

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

                <div className='service-all m-5 border-0'>
                    {
                        categories.map(category => <div className='service m-5 text-center border-1 p-0 w-75 shadow'
                            key={category._id}
                            category={category}>
                            <img src={category?.img} alt="" />
                            <h5 className='p-3 w-100'>{category?.title} </h5>
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