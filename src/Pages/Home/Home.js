import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;