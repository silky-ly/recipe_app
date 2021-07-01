import React from 'react'
import Likes from './Likes'
import { Link } from 'react-router-dom'

const DisplayMeals = ({ food }) => {
    return (
        <div className="homepage-card">
            <Link to={`/homepage/${ food._id }`}>
                <div className='homepage-img'>
                    <img src={ food.image } alt="" />
                </div>

                <div className='homepage-contents'>
                    <h3>{ food.name }</h3>
                    <p> { food.rating }</p>
                </div>
                <Likes />
            </Link>
        </div>
    )
}

export default DisplayMeals
