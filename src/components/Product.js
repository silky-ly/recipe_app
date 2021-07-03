import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({ dessert }) => {
    return (
        <figure className='re'>
            <Link to={`/dessert/${ dessert._id }`}>
                <img src={ dessert.image } class="gallery__dessert" alt="Image 1" />
            </Link>
        </figure>
    )
}

export default Product



