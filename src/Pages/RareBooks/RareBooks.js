import React from 'react';

const RareBooks = () => {
    return (
        <section className="section about-section rare" id="rare">
            <div className="container">
                <div className="row align-items-center justify-content-around flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h3 className="dark-color">Most expensive sales in 2022</h3>
                            <h4 className="theme-color" style={{ color: "#EB6440" }}>Rare Books</h4>
                            <p>The list includes a book about Italian architecture and a landmark book about the stock market. There is also poetry and a famous novel about time travel.</p>
                            <button className="button1 px-5  mx-3 fw-bold text-white my-2 border shadow"> View the list</button>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center">
                        <div className="about-img">
                            <img src="https://assets.brightspot.abebooks.a2z.com/dims4/default/e2b1e5e/2147483647/strip/true/crop/1000x694+0+0/resize/1600x1110!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2Ffd%2F23%2F3ccb25fe49cbaa5464e5e6f9f71f%2Fcooks-voyages.jpg" className='w-100 rounded' alt="" />
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default RareBooks;