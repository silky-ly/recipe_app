import React from "react";
import { Link } from "react-router-dom";
import Ratings from "../../components/Ratings";


const DisplayLocals = ({ local }) => {
    return ( 
        <figure>
            <Link to={`/local/${ local._id }`}>
                <img src={ local.image } class="local-img" alt="" />
                <div className="rating">
                    <p><Ratings value={ local.rating } /></p>
                </div>
            </Link>
        </figure>
    )
}

export default DisplayLocals;