import React from 'react'
import { Link } from 'react-router-dom'
import Ratings from '../../components/Ratings'


const Product = ({ dessert }) => {
    return (
        <figure>
            <Link to={`/dessert/${ dessert._id }`}>
                <img src={ dessert.image } class="gallery__dessert" alt="" />
            </Link>
            <div className="rating">
                <p><Ratings value={ dessert.rating } /></p>
            </div>
        </figure>
    )
}
export default Product



