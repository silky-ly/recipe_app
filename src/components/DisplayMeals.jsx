import React from 'react'
import Likes from './Likes'
import { Link } from 'react-router-dom'

const DisplayMeals = ({ food }) => {
    return (
        <div className="homepage-card">
            <Link to={`/homepage/${ food._id }`}>
                <div className="card-img">
                    <img src={ food.image } alt="" />
                </div>
            </Link>
            <div className="card-contents">
                <h3>{ food.name }</h3>
                <p> { food.rating }</p>
            </div>
            {/* <Likes /> */}
        </div>
    )
}

export default DisplayMeals
