import React from "react";
import { Link } from "react-router-dom";
import Ratings from "../../components/Ratings";


const DisplayCocktails = ({ cocktail }) => {
    return ( 
        <>
        <figure>
            <Link to={`/cocktail/${ cocktail._id }`}>
                <img src={ cocktail.image } class="cocktail-img" alt="" />
            <div className="rating">
                <p><Ratings value={ cocktail.rating } /></p>
            </div>
            </Link>
        </figure>
        </>
    )
}

export default DisplayCocktails;
