import React from 'react';
import './FourZeroFour.css'
const FourZeroFour = () => {
    return (
        <section className='p-5 text-center bg4-image'>

            <div className="d-flex justify-content-center align-items-center h-100">
                <div className='mt-5' >
                    <h4 className="mb-3 fst-italic text-center fs-1 px-5 text-white"><br></br>Ooops! 404 Route Not Found.</h4>
                    <a className="mb-3 btn btn-outline-light btn-lg fw-bold" href="/" role="button"
                    >Go back to Home Page</a>

                </div>
            </div>

        </section>
    );
};

export default FourZeroFour;