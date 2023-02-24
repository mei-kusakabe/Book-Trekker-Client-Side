import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';

import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';
import RareBooks from '../RareBooks/RareBooks';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <RareBooks></RareBooks>
            <Advertisement></Advertisement>
            <About></About>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;