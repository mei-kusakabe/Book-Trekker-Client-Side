import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className="section about-section " id="about">
            <div className="container">
                <div className="row align-items-center justify-content-around flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h3 className="dark-color">About Us.</h3>
                            <h4 className="theme-color" style={{ color: "#EB6440" }}>Helping buyers and sellers since 1996</h4>
                            <p>Book-Trekkers offers books, fine art and collectibles, helping you discover and buy the things you love. Trusted independent sellers from around the world offer for sale millions of new, used and rare books, as well as art and collectibles through the Book-Trekkers websites.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center">
                        <div className="about-img">
                            <img src="https://as1.ftcdn.net/v2/jpg/01/57/44/42/1000_F_157444294_COaJreLoVUonknUYboQyiI0yelZi0uc2.jpg" className='w-75 rounded' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;