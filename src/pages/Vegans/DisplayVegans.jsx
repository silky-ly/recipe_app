import React from "react";
import { Link } from "react-router-dom";
// import Ratings from "../../components/Ratings";


const DisplayVegans = ({ vegan }) => {
    return ( 
        <figure className="vegan_images">
            <Link to={`/vegan/${ vegan._id }`}>
                <img src={ vegan.image } class="vegan_img" alt="" />
            </Link>
            <div className="vegan_rating">
                {/* <p><Ratings value={ vegan.rating } /></p> */}
            </div>
        </figure>
    )
}

export default DisplayVegans;
