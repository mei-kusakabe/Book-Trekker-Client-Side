import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-6">
                        <h3 className='orange'>Site Map</h3>
                        <ul className="list-unstyled three-column">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Code</li>
                            <li>Design</li>
                            <li>Host</li>
                            <li>Contact</li>
                            <li>Company</li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <h3 className='orange'>Latest Articles</h3>
                        <div className="media">

                            {/* <Link to="/" className="pull-left">
                                <img src="http://placehold.it/64x64" alt="" className="media-object" />
                            </Link> */}
                            <div className="media-body">
                                <h4 className="media-heading">Trending Books</h4>
                                <p>Book Trekker regularly publishes fascinating features about a huge variety
                                    of bookish subjects, publishers, and interesting characters in literature and notable anniversaries. </p>
                            </div>
                        </div>

                        <div className="media">
                            {/* <Link to="" className="pull-left">
                                <img src="http://placehold.it/64x64" alt="" className="media-object" />
                            </Link> */}
                            <div className="media-body">
                                <h4 className="media-heading">Coding</h4>
                                <p>Book Trekker sells millions of used books at the lowest everyday prices.
                                    We personally assess every book's quality and offer rare, out-of-print
                                    treasures. We deliver the joy of reading in 100% recyclable packaging with
                                    free standard shipping on BD orders over 100 Tk. BookTrekker.com. Read more. Spend less.</p>
                            </div>
                        </div>

                        {/* <div className="media">
                           
                            <div className="media-body">
                                <h4 className="media-heading">Web Design</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div> */}

                    </div>

                    <div className="col-lg-4">
                        <h3 className='orange'>Our Work</h3>
                        <Link to="https://www.facebook.com/10minuteschool"><i className="fa fa-facebook px-2"></i></Link>
                        <Link to="https://www.instagram.com/10ms_insta/?fbclid=IwAR0-kg6VrR-cNhsrUYycp1AHG7gUFaPPRJPDGf44k_B1xuTwzFXD11XlZBo"><i className="fa fa-twitter px-2"></i></Link>
                        <Link to="https://www.instagram.com/10ms_insta/?fbclid=IwAR0-kg6VrR-cNhsrUYycp1AHG7gUFaPPRJPDGf44k_B1xuTwzFXD11XlZBo"><i className="fa fa-google-plus px-2"></i></Link>
                        <Link to="https://www.youtube.com/c/10MinuteSchoolMain"><i className="fa fa-youtube px-2"></i></Link>
                        <Link to="https://www.lLinknkedin.com/company/10ms/?fbclid=IwAR3maQ75NlD5oM_Sm8fDzLn9-O3p4QZPNYKHd7IISO0ksrVqwjNH1QrFqkc"><i className="fa fa-linkedin-square px-2"></i></Link>
                    </div>

                </div>
            </div>
            <div className="copyright text-center">
                Copyright &copy; 2022 <span>Book Trekker</span>
            </div>
        </footer >
    );
};

export default Footer;