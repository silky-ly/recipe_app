import React from "react";
import { Link } from "react-router-dom";
import Ratings from "../../components/Ratings";


const DisplayVegans = ({ vegan }) => {
    return ( 
        <figure>
            <Link to={`/vegan/${ vegan._id }`}>
                <img src={ vegan.image } class="cocktail-img" alt="" />
            </Link>
            <div className="rating">
                <p><Ratings value={ vegan.rating } /></p>
            </div>
        </figure>
    )
}

export default DisplayVegans;
