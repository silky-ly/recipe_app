import React from "react";
import { Link } from "react-router-dom";


const DisplayLocals = ({ local }) => {
    return ( 
        <figure>
            <Link to={`/local/${ local._id }`}>
                <img src={ local.image } class="local-img" alt="" />
            </Link>
        </figure>
    )
}

export default DisplayLocals;