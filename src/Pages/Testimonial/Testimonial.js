import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <section className='sg m-5'>
            <div className="py-5 mx-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-xl-8 text-center">
                        <h3 className="fw-bold mb-4" style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }}>What Our Customers Are Saying? </h3>
                        <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                            Book Trekker Books is a for-profit, socially conscious business and global online bookseller that sells used books online and offline and donates a book for every purchase. Every sale helps to fund literacy and education initiatives in Bangladesh.
                        </p>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card">
                            <div className="card-body py-4 mt-2">
                                <div className="d-flex justify-content-center mb-4">
                                    <img src="https://i.pinimg.com/564x/8d/b1/ee/8db1ee5eca81abdbe21ca394d700c4fa.jpg" alt="person-1" className="rounded-circle shadow-1-strong" width="100" height="100" />
                                </div>
                                <h5 className="font-weight-bold title-font cap" style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }}>Renu Islam</h5>
                                <h6 className="font-weight-bold my-3">Student at Dhaka University</h6>
                                <ul className="list-unstyled d-flex justify-content-center">
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star-half-alt  text-info"></i>
                                    </li>
                                </ul>
                                <p className="mb-2">
                                    <i className="fas fa-quote-left pe-2"></i>A very trusted place for buying books. I've always been extremely satisfied with their service (and the free bookmarks!)
                                    <i className="fas fa-quote-right ps-2"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card">
                            <div className="card-body py-4 mt-2">
                                <div className="d-flex justify-content-center mb-4">
                                    <img src="https://i.pinimg.com/564x/d8/2a/1b/d82a1b7346548db439f3e217d64a26b7.jpg"
                                        className="rounded-circle shadow-1-strong" alt="person-2" width="100" height="100" />
                                </div>
                                <h5 className="font-weight-bold title-font cap" style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }}>Sharifa Hasan </h5>
                                <h6 className="font-weight-bold my-3">Teacher at IOM</h6>
                                <ul className="list-unstyled d-flex justify-content-center">
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                </ul>
                                <p className="mb-2">
                                    <i className="fas fa-quote-left pe-2"></i>Ordered from here twice and was really satisfied with the service. They have reasonable prices, good quality and are very responsive.
                                    <i className="fas fa-quote-right ps-2"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-0">
                        <div className="card">
                            <div className="card-body py-4 mt-2">
                                <div className="d-flex justify-content-center mb-4">
                                    <img src="https://i.pinimg.com/564x/1e/ac/97/1eac971fe6bae27559fdc41f2f98db17.jpg"
                                        className="rounded-circle shadow-1-strong" alt="person-3" width="100" height="100" />
                                </div>
                                <h5 className="font-weight-bold title-font cap" style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }}>Shuvro Dutta</h5>
                                <h6 className="font-weight-bold my-3">Front-end Developer in ExaBytes</h6>
                                <ul className="list-unstyled d-flex justify-content-center">
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star  text-info"></i>
                                    </li>
                                    <li>
                                        <i className="far fa-star  text-info"></i>
                                    </li>
                                </ul>
                                <p className="mb-2">
                                    <i className="fas fa-quote-left pe-2"></i>I have taken many parcels from Book Trekker.They are trustworthy.Yes,You can buy books from them.
                                    <i className="fas fa-quote-right ps-2"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;