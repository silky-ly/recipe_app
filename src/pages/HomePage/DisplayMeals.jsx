import React from 'react'
import { Link } from 'react-router-dom'
import Likes from '../../components/Likes'
import Ratings from '../../components/Ratings'

const DisplayMeals = ({ food }) => {
    return (
        <div className="homepage_card">
            <Link to={`/homepage/${ food._id }`}>
                <div className="homecard_img">
                    <img src={ food.image } alt="" />
                </div>
            </Link>

            <div className="homecard_content">
                <h3>{ food.name }</h3>

                <div className="homecard_rate">
                    <p><Ratings value={ food.rating } /></p>
                    <Likes />
                </div>
            </div>
        </div>
    )
}

export default DisplayMeals
