import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import './Categories.css'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Typewriter from 'react-ts-typewriter';
import Zoom from 'react-reveal/Zoom';
import AnimatedText from "./../../Pages/AnimatedText"
import { motion } from "framer-motion";



const Categories = () => {


    //  useTitle('Services')
    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     fetch('https://book-trekker-server-side.vercel.app/categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, []);


    const { loading } = useContext(AuthContext);
    const [replay, setReplay] = useState(true);
    // Placeholder text data, as if from API
    const placeholderText = [
        { type: "heading1", text: "Shop by Category" },
        // {
        //     type: "heading2",
        //     text: "Shop by Category"
        // }
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };

    // Quick and dirt for the example
    const handleReplay = () => {
        setReplay(!replay);
        setTimeout(() => {
            setReplay(true);
        }, 600);
    };

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



            <h2 className='fw-bold pt-4' style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }}><Zoom>Shop by Category</Zoom></h2>
            {/* <div className='mt-5'>
                <motion.div
                    className="mt-5"
                    initial="hidden"
                    // animate="visible"
                    animate={replay ? "visible" : "hidden"}
                    variants={container}
                >
                    <div className="container mt-5">
                        {placeholderText.map((item, index) => {
                            return <AnimatedText className="mt-5" onClick={handleReplay} {...item} key={index} />;
                        })}
                    </div>
                    {<button onClick={handleReplay}>
                        Replay <span>⟲</span>
                    </button>}
                </motion.div>

            </div> */}


            {/* <motion.h1
                // animate={{ x: [50, 100, 50], opacity: 1, scale: 1 }}
                // transition={{
                //     duration: 5,
                //     delay: 0.3,
                //     ease: [0.5, 0.5, 0, 0.5],
                // }}

                transition={{
                    staggerChildren: 0.025
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.02 }}
            >
                Animation made easy with Framer Motion
            </motion.h1> */}
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
        </div >


    );
};

export default Categories;