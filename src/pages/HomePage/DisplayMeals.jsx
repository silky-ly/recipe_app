import React from 'react'
import Likes from '../../components/Likes'
import { Link } from 'react-router-dom'
import Ratings from '../../components/Ratings'

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
                <p><Ratings value={ food.rating } /></p>
            </div>
            <Likes />
        </div>
    )
}

export default DisplayMeals
