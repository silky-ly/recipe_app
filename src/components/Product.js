import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({ dessert }) => {
    return (
        <div class="dessert-gallery">
            <figure className={`gallery__item dessert--${ dessert._id }`}>
                <Link to={`/desserts/${ dessert._id }`}>
                    <img src={ dessert.image } class="gallery__dessert" alt="Image 1" />
                </Link>
            </figure>
        </div>
    )
}

export default Product



