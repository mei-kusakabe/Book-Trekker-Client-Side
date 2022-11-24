import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade className='fw-bolder'>
                <Carousel.Item className='d-flex align-items-center'>
                    <img
                        className="lg-d-block w-100 h-100 bg-image"
                        src="https://img.freepik.com/free-photo/front-view-desk-with-stacked-books-copy-space_23-2148827255.jpg?w=1380&t=st=1669288713~exp=1669289313~hmac=957c1fc26f91ffaa31216127b3168596d7b31f7f6508c44f4e37d6767172aeb4"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='d-flex flex-column justify-content-center h-100'>
                        <h3 className='text-end ms-5 fw-bolder fs-2' style={{ color: "#EB6440" }}>     "Good friends, good books, <br></br> and a sleepy conscience: <br></br> this is the ideal life."</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        className="d-block w-100 h-100 bg-image"
                        src="https://img.freepik.com/free-photo/portrait-student-child-girl-studying-library_1150-5912.jpg?w=996&t=st=1669307307~exp=1669307907~hmac=443c652ce2329748f899efc62c5d7e0a2525ae45d414635b2423850fa2a7b33d"
                        alt="First slide"
                    />

                    <Carousel.Caption className='d-flex flex-column justify-content-center h-100'>
                        <h3 className='ms-5' style={{ color: "#EB6440" }}>"There is no friend as loyal as a book."</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid h-100 bg-image"
                        src="https://img.freepik.com/free-photo/laptop-computer-book-workplace-library-room_1150-5925.jpg?w=996&t=st=1669307022~exp=1669307622~hmac=7edc115b9198e78b301f7798739b0e19c973e0aa4fb7c77689fe12299986a9df"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='d-flex flex-column justify-content-center h-100'>
                        <h3 className='ms-5' style={{ color: "#EB6440" }}>"Books are a uniquely portable magic."</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel >
        </div >
    );
};

export default Banner;