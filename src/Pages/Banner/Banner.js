import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import './Banner.css'
import bgvideo from './../../video/banner_background.mp4'
// import logo from './logo.png';


const Banner = () => {
    return (
        <section className='home'>
            <Zoom>
                <h1 className='text-start  fw-bolder fs-2 nav-font cap' style={{ color: "#ffff" }}>     "Good friends, good books, <br></br> and a sleepy conscience: <br></br> this is the ideal life."</h1>
            </Zoom>
            <div className='btnn-group'>
                <a href='/login' className='btnn rounded-5 fw-bold'>Login to explore</a>
                {/* <a href='' className='btn btn-1 rounded-5'>dfd</a> */}

            </div>
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path fill="#fff" fill-opacity="1" d="M0,96L34.3,90.7C68.6,85,137,75,206,96C274.3,117,343,171,411,197.3C480,224,549,224,617,186.7C685.7,149,754,75,823,64C891.4,53,960,107,1029,149.3C1097.1,192,1166,224,1234,234.7C1302.9,245,1371,235,1406,229.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L40,149.3C80,171,160,213,240,229.3C320,245,400,235,480,224C560,213,640,203,720,176C800,149,880,107,960,96C1040,85,1120,107,1200,117.3C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#fff" fill-opacity="1" d="M0,224L40,234.7C80,245,160,267,240,229.3C320,192,400,96,480,58.7C560,21,640,43,720,96C800,149,880,235,960,256C1040,277,1120,235,1200,202.7C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
        </section>
    );
};

export default Banner;