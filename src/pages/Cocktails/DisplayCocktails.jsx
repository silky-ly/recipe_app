import React from "react";
import { Link } from "react-router-dom";


const DisplayCocktails = ({ cocktail }) => {
    return ( 
        <figure className='re'>
            <Link to={`/cocktail/${ cocktail._id }`}>
                <img src={ cocktail.image } class="cocktail-img" alt="" />
            </Link>
        </figure>
    )
}

export default DisplayCocktails;
