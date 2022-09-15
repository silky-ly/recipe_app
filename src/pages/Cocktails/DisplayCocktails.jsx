import React from "react";
import { Link } from "react-router-dom";
// import Ratings from "../../components/Ratings";


const DisplayCocktails = ({ cocktail }) => {
    return ( 
        <>
        <figure className="cocktails_images">
            <Link to={`/cocktail/${ cocktail._id }`}>
                <img src={ cocktail.image } class="cocktail_img" alt="" />
            <div className="cocktails_rating">
                {/* <p><Ratings value={ cocktail.rating } /></p> */}
            </div>
            </Link>
        </figure>
        </>
    )
}

export default DisplayCocktails;
