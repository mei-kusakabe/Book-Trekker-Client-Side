import axios from 'axios';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../Contexts/AuthProvider';
import ModalComponent from '../ModalComponent/ModalComponent';
import './Categories.css'

const CategoryDetails = () => {

    const books = useLoaderData();
    // const { user } = useContext(AuthContext)


    const url = "https://book-trekker-server-side.vercel.app/allusers";

    const [users, setAlluser] = React.useState([]);

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setAlluser(response.data);
        });
    }, []);


    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <div className='services m-5'>


            <div className='book-all m-5 border-0 justify-content-center align-items-center'>
                {
                    books.map((book, i) => <div className='card w-xl-50 w-lg-50 w-md-100 mx-auto my-5 teal-c service m-5 text-center border-1 p-0  shadow justify-content-center align-items-center'
                        key={i} >

                        <img src={book?.pic} alt="" className='card-img-top' />
                        <div className="card-body text-start">
                            <h5 className='card-title text-center fw-bold title-font cap' style={{ textDecoration: 'none', color: "#EB6440" }}>Book Name : {book?.name} </h5>
                            <br />
                            <div className='d-inline d-lg-flex'>
                                <p className='px-3 card-text'> <span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Resale Price: </span> {book?.resalePrice}</p>
                                <p className='px-3 card-text'> <span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Original Price: </span>  {book?.originalPrice}</p>
                            </div>
                            <div className='d-inline d-lg-flex'>
                                <p className='px-3 card-text'> <span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Location:</span> {book?.location}</p>
                                <p className='px-3 card-text'><span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Year of Use:</span>  {book?.yearofuse}</p>
                            </div>

                            <div className='d-inline d-lg-flex d-flex'>
                                <p className='px-3 card-text'><span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Sellers Name:</span>  {book?.SellerName}</p>

                                {
                                    users.map((user) => <div className='' key={user._id}>
                                        {

                                            user?.role === 'seller' && book?.SellerName === user?.name ?

                                                <FaCheck className="bg-primary text-white rounded h-50 w-100"></FaCheck>
                                                : <></>
                                        }
                                    </div>
                                    )

                                }

                            </div>

                            <p className='px-3 card-text'><span className='fw-bold' style={{ textDecoration: 'none', color: "#497174" }}>Date Posted:</span>  {book?.PostTime.split("", 10)}</p>
                        </div>
                        {/* <button onClick={handleShow} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow"><Link className='link' to={`/allbookscategory/${book?._id}`}>Book Now</Link></button> */}
                        {/* < button onClick={handleShow} className="button1 px-5  text-white mx-3 fw-bold my-2 border shadow" > Book Now</button> */}
                        < ModalComponent book={book.name}
                            price={book.resalePrice}
                            img={book.pic}
                            books={book}
                        ></ModalComponent>
                    </div>


                    )
                }
            </div >
        </div >
    );
};

export default CategoryDetails;