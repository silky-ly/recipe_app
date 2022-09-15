import React from 'react';
import { Link } from 'react-router-dom';
// import Ratings from '../../components/Ratings';

const Product = ({ dessert }) => {
	return (
        <figure className="dessert_images">
            <Link to={`/dessert/${dessert._id}`}>
                <img src={dessert.image} class="dessert_img" alt="" />
            </Link>
            <div className="dessert_rating">
                <p>
                    {/* <Ratings value={dessert.rating} /> */}
                </p>
            </div>
        </figure>
	);
};
export default Product;
