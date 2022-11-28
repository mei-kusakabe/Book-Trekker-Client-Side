import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddProduct = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleProduct = event => {
        event.preventDefault();
        const form = event.target;
        //const name = form.name.value;
        const title = form.title.value;
        const CategoryId = form.CategoryId.value;
        const pic = form.pic.value;
        const description = form.description.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const PostTime = form.PostTime.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const SellerName = form.SellerName.value;
        const condition = form.condition.value;
        const YearofPurchase = form.YearofPurchase.value;
        const yearofuse = form.yearofuse.value;


        const product = {
            title: title,
            //  name: name,
            CategoryId: CategoryId,
            pic: pic,
            description: description,
            resalePrice: resalePrice,
            originalPrice: originalPrice,
            location: location,
            PostTime: PostTime,
            phone: phone,
            YearofPurchase: YearofPurchase,
            condition: condition,
            yearofuse: yearofuse,
            SellerName: SellerName

        }

        console.log(product);

        fetch('https://book-trekker-server-side.vercel.app/allbookscategory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Product  Added Successfully!');
                    navigate('/dashboard/myproduct');

                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div>

            <h3 className='fw-bold fs-2 py-3' style={{ textDecoration: 'none', color: "#EB6440", textDecorationColor: "#EB6440" }} >Please Add a Product..</h3>

            <form onSubmit={handleProduct} className="d-flex flex-column justify-content-center align-items-center my-3 px-3 py-5  border shadow-lg rounded-3 bg-light  mx-5">

                <div className='row row-cols-1 row-cols-lg-2 gap-4'>
                    <input name="name" type="text" placeholder="Product Name" className="input border shadow mx-auto p-3 rounded" />
                    <label for="title" >Choose Category:</label>
                    <select id="title" name="CategoryId" className="input border shadow mx-auto p-3 rounded w-50" size="3">
                        <option value="637ff22e7fbc105d1cb18575">CHILDREN'S BOOKS</option>
                        <option value="637ff22e7fbc105d1cb18576">LITERATURE & FICTION</option>
                        <option value="637ff22e7fbc105d1cb18577">RELIGION & SPIRITUALITY</option>
                    </select>

                    <input name="pic" type="text" placeholder="Photo URL" className="input border shadow mx-auto p-3 rounded" />
                    <textarea name="description" className="input border shadow mx-auto p-3 rounded w-50" placeholder="Description" required></textarea>
                    <input name="YearofPurchase" type="text" placeholder="Year of Purchase" className="input border shadow mx-auto p-3 rounded" />

                    <label for="condition" >Condition:</label>
                    <select id="condition" name="condition" className="input border shadow mx-auto p-3 rounded w-50" size="3">
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                    <input name="yearofuse" type="text" placeholder="Year of Use" className="input border shadow mx-auto p-3 rounded" />
                    <input name="resalePrice" type="text" placeholder="Resale Price" className="input border shadow mx-auto p-3 rounded" />
                    <input name="originalPrice" type="text" placeholder="Original Price" className="input border shadow mx-auto p-3 rounded" />
                    <input name="SellerName" type="text" defaultValue={user?.displayName} placeholder="Seller Name" className="input border shadow mx-auto p-3 rounded" />
                    <input name="phone" type="text" placeholder="Phone No" className="input border shadow mx-auto p-3 rounded" />
                    <label for="start">Post Time:</label>
                    <input type="date" name="PostTime" min="2018-01-01" max="2024-12-31" placeholder="Post Time" className="input border shadow mx-auto p-3 rounded" />
                    <input name="location" type="text" placeholder="Location" className="input border shadow mx-auto p-3 rounded" />

                </div>
                <button className="button1 px-5  mx-3 fw-bold text-white my-3 border shadow">Add Product</button>

            </form>

        </div>
    );
};

export default AddProduct;
